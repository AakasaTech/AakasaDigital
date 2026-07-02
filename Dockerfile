# ─────────────────────────────────────────────────────────────────────────────
# Aakasa Digital — multi-stage Docker build
#
# Stage 1 (deps)    – install all npm dependencies (dev + prod)
# Stage 2 (builder) – run `next build` and produce .next/standalone
# Stage 3 (runner)  – minimal production image
#
# Build:
#   docker build -t aakasa-digital:latest .
#
# Run:
#   docker run -p 3001:3001 aakasa-digital:latest
# ─────────────────────────────────────────────────────────────────────────────

# ── Stage 1: install dependencies ────────────────────────────────────────────
FROM node:24-alpine AS deps

# libc6-compat is required by some native Node modules on Alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy manifests first for layer caching
COPY package.json package-lock.json* ./

RUN npm ci

# ── Stage 2: build ───────────────────────────────────────────────────────────
FROM node:24-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ── Stage 3: production runner ────────────────────────────────────────────────
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# PM2 state directory — must be writable by the non-root nextjs user
ENV PM2_HOME=/tmp/.pm2

# Install PM2 process manager (runs as root before user switch)
RUN npm install -g pm2@latest --no-fund --no-audit

# Dedicated non-root user/group + PM2 home directory
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs \
 && mkdir -p /tmp/.pm2 \
 && chown -R nextjs:nodejs /tmp/.pm2

# Static public assets
COPY --from=builder /app/public ./public

# Pre-create .next so chown works before copying into it
RUN mkdir -p .next && chown nextjs:nodejs .next

# Standalone server bundle — contains server.js + minimal node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Static client assets (JS/CSS chunks)
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# PM2 ecosystem config
COPY --chown=nextjs:nodejs ecosystem.config.js ./

USER nextjs

EXPOSE 3001

ENV PORT=3001
ENV HOSTNAME="0.0.0.0"

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
