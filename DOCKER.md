# Docker Deployment — Aakasa Digital

This guide covers building and running the full Aakasa Digital stack with Docker Compose: the marketing site, four SaaS products, and an nginx reverse proxy.

---

## Architecture

```
                                   ┌───────────────────────┐
                                   │     nginx  :80/:443    │
                                   └───┬───┬───┬───┬───┬────┘
                                       │   │   │   │   │
                    aakasa.dev/www ────┘   │   │   │   └──── pdfcraft.aakasa.dev
              billcraft.aakasa.dev ────────┘   │   └──────── taskcraft.aakasa.dev
                                                └──────────── supportcraft.aakasa.dev

  aakasa-digital (3001)   billcraft (3000)   supportcraft (3002)
  taskcraft (3003)        pdfcraft (3004)
```

All containers run on an internal Docker bridge network (`aakasa-net`). Only nginx is exposed to the host on ports 80 and 443.

---

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) 24+ (or Docker Engine + Compose v2)
- All five project directories present side-by-side:

```
work/aakasatech/
├── AakasaDigital/      ← this repo (docker-compose.yml lives here)
├── BillCraft_AI/
├── SupportCraft_AI/
├── TaskCraft_AI/
└── PDFCraft/
```

---

## Quick Start

### 1. Create the environment file

```bash
cd AakasaDigital
cp .env.docker.example .env
```

Open `.env` and fill in every value. See [Environment Variables](#environment-variables) below for details.

### 2. Build all images

```bash
docker compose build
```

To build a single service (e.g. after a code change):

```bash
docker compose build billcraft
docker compose build supportcraft
docker compose build taskcraft
docker compose build pdfcraft
docker compose build aakasa-digital
```

> **Note:** `NEXT_PUBLIC_*` variables are baked into the JavaScript bundle at build time. If you change any `NEXT_PUBLIC_*` value in `.env`, you must rebuild the affected image — a container restart alone will not pick up the change.

### 3. Start the stack

```bash
docker compose up -d
```

### 4. Verify all containers are running

```bash
docker compose ps
```

Expected output:

```
NAME                STATUS          PORTS
aakasa-digital      running
billcraft           running
supportcraft        running
taskcraft           running
pdfcraft            running
nginx               running         0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp
```

### 5. Stream logs

```bash
# All services
docker compose logs -f

# Single service
docker compose logs -f billcraft
docker compose logs -f supportcraft
docker compose logs -f taskcraft
docker compose logs -f pdfcraft
docker compose logs -f nginx
```

---

## Environment Variables

Copy `.env.docker.example` to `.env`. The file uses prefixed names to keep all variables in one place:

| Prefix | Service |
|---|---|
| `AAKASA_` | Aakasa Digital |
| `BILLCRAFT_` | BillCraft AI |
| `SUPPORTCRAFT_` | SupportCraft AI |
| `TASKCRAFT_` | TaskCraft AI |
| `PDFCRAFT_` | PDFCraft |

### BillCraft AI

| Variable | Description |
|---|---|
| `BILLCRAFT_SUPABASE_URL` | Supabase project URL |
| `BILLCRAFT_SUPABASE_ANON_KEY` | Supabase anon/public key *(build arg)* |
| `BILLCRAFT_SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `BILLCRAFT_APP_URL` | Public URL e.g. `https://billcraft.aakasa.dev` *(build arg)* |
| `BILLCRAFT_OPENAI_API_KEY` | OpenAI API key |
| `BILLCRAFT_RESEND_API_KEY` | Resend API key for transactional email |
| `BILLCRAFT_RESEND_FROM_EMAIL` | Sender address verified in Resend |
| `BILLCRAFT_RESEND_FROM_NAME` | Sender display name |
| `BILLCRAFT_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key *(build arg)* |
| `BILLCRAFT_STRIPE_SECRET_KEY` | Stripe secret key |
| `BILLCRAFT_STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `BILLCRAFT_STRIPE_*_PRICE_ID` | Six Stripe price IDs (basic/pro/agency × monthly/annual) |
| `BILLCRAFT_PAYPAL_CLIENT_ID` | PayPal client ID *(build arg + runtime)* |
| `BILLCRAFT_PAYPAL_CLIENT_SECRET` | PayPal client secret |
| `BILLCRAFT_PAYPAL_API_URL` | `https://api-m.paypal.com` (live) or sandbox URL |
| `BILLCRAFT_PAYPAL_WEBHOOK_ID` | PayPal webhook ID |
| `BILLCRAFT_PAYPAL_*_PLAN_ID` | Six PayPal plan IDs (basic/pro/agency × monthly/annual) |
| `BILLCRAFT_GOOGLE_AUTH_FLOW` | `custom` (default, own-domain consent screen) or `supabase` |
| `BILLCRAFT_GOOGLE_CLIENT_ID` / `_SECRET` | Google OAuth client for Sign-In |
| `BILLCRAFT_PORTAL_SESSION_SECRET` | 32-char random secret for client portal cookies |
| `BILLCRAFT_CRON_SECRET` | Secret for authenticating cron job requests |
| `BILLCRAFT_ADMIN_EMAILS` | Comma-separated emails allowed into `/admin` |
| `BILLCRAFT_EMAIL_PROVIDER` | `resend` |
| `BILLCRAFT_ALLOWED_ORIGINS` | Comma-separated hostnames allowed to call this app's API *(build arg)* |

### SupportCraft AI

| Variable | Description |
|---|---|
| `SUPPORTCRAFT_SUPABASE_URL` | Supabase project URL |
| `SUPPORTCRAFT_SUPABASE_ANON_KEY` | Supabase anon/public key *(build arg)* |
| `SUPPORTCRAFT_SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `SUPPORTCRAFT_APP_URL` | Public URL e.g. `https://supportcraft.aakasa.dev` *(build arg)* |
| `SUPPORTCRAFT_AI_PROVIDER` | `openai` or `anthropic` |
| `SUPPORTCRAFT_OPENAI_API_KEY` | OpenAI API key |
| `SUPPORTCRAFT_ANTHROPIC_API_KEY` | Anthropic API key |
| `SUPPORTCRAFT_EMAIL_PROVIDER` | `resend` or `gmail` |
| `SUPPORTCRAFT_EMAIL_FROM` | Sender address |
| `SUPPORTCRAFT_GMAIL_CLIENT_ID` | Gmail OAuth2 client ID (Gmail provider only) |
| `SUPPORTCRAFT_GMAIL_CLIENT_SECRET` | Gmail OAuth2 client secret (Gmail provider only) |
| `SUPPORTCRAFT_GMAIL_REFRESH_TOKEN` | Gmail OAuth2 refresh token (Gmail provider only) |
| `SUPPORTCRAFT_RESEND_API_KEY` | Resend API key (Resend provider only) |
| `SUPPORTCRAFT_RESEND_FROM_EMAIL` | Sender address verified in Resend |
| `SUPPORTCRAFT_RESEND_FROM_NAME` | Sender display name |
| `SUPPORTCRAFT_PAYPAL_CLIENT_ID` | PayPal client ID *(build arg + runtime)* |
| `SUPPORTCRAFT_PAYPAL_CLIENT_SECRET` | PayPal client secret |
| `SUPPORTCRAFT_PAYPAL_WEBHOOK_ID` | PayPal webhook ID |
| `SUPPORTCRAFT_PAYPAL_PLAN_ID_PUBLIC_*` | Eight client-side plan IDs *(build args, baked into the PayPal buttons)* |
| `SUPPORTCRAFT_PAYPAL_PLAN_ID_*` | Eight server-side plan IDs (webhook → DB plan mapping) — **not the same values** as the `_PUBLIC_` set above |
| `SUPPORTCRAFT_INBOUND_SECRET` | Shared secret verifying the inbound-email webhook |
| `SUPPORTCRAFT_GOOGLE_CLIENT_ID` / `_SECRET` | Google OAuth client for Sign-In |
| `SUPPORTCRAFT_CRON_SECRET` | Secret for authenticating cron job requests |
| `SUPPORTCRAFT_ADMIN_EMAILS` | Comma-separated emails allowed into `/admin` |

### TaskCraft AI

| Variable | Description |
|---|---|
| `TASKCRAFT_SUPABASE_URL` | Supabase project URL |
| `TASKCRAFT_SUPABASE_ANON_KEY` | Supabase anon/public key *(build arg)* |
| `TASKCRAFT_SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `TASKCRAFT_APP_URL` | Public URL e.g. `https://taskcraft.aakasa.dev` *(build arg)* |
| `TASKCRAFT_OPENAI_API_KEY` | OpenAI API key |
| `TASKCRAFT_PAYPAL_CLIENT_ID` | PayPal client ID *(build arg + runtime)* |
| `TASKCRAFT_PAYPAL_CLIENT_SECRET` | PayPal client secret |
| `TASKCRAFT_PAYPAL_WEBHOOK_ID` | PayPal webhook ID |
| `TASKCRAFT_PAYPAL_PLAN_ID_*` | Four PayPal plan IDs (solo/team × monthly/yearly) — same value used for both the build arg and runtime var in this app |
| `TASKCRAFT_GOOGLE_AUTH_FLOW` | `custom` (default, own-domain consent screen) or `supabase` |
| `TASKCRAFT_GOOGLE_CLIENT_ID` / `_SECRET` | Google OAuth client for Sign-In |
| `TASKCRAFT_ADMIN_EMAILS` | Comma-separated emails allowed into `/admin` |
| `TASKCRAFT_CRON_SECRET` | Secret for authenticating cron job requests |
| `TASKCRAFT_RESEND_API_KEY` | Resend API key for transactional email |
| `TASKCRAFT_RESEND_FROM_EMAIL` / `_FROM_NAME` | Sender identity |

`BILLCRAFT_INTERNAL_URL` / `SUPPORTCRAFT_INTERNAL_URL` (container-to-container URLs TaskCraft calls directly — `http://billcraft:3000/api` / `http://supportcraft:3002/api/v1` — bypassing nginx and the public hostname) are not secrets and are set as literals directly in `docker-compose.yml`, not sourced from `.env`.

### PDFCraft

| Variable | Description |
|---|---|
| `PDFCRAFT_APP_URL` | Public URL e.g. `https://pdfcraft.aakasa.dev` *(build arg)* |

Entirely client-side PDF processing — no database, no other secrets.

---

## Nginx Routing

The nginx config lives at `nginx/nginx.conf`.

| Domain | Container | Internal port |
|---|---|---|
| `aakasa.dev`, `www.aakasa.dev` | `aakasa-digital` | 3001 |
| `billcraft.aakasa.dev` | `billcraft` | 3000 |
| `supportcraft.aakasa.dev` | `supportcraft` | 3002 |
| `taskcraft.aakasa.dev` | `taskcraft` | 3003 |
| `pdfcraft.aakasa.dev` | `pdfcraft` | 3004 |

`www.aakasa.dev` automatically redirects to `aakasa.dev` (301).

---

## HTTPS / SSL

SSL is active. The nginx config uses `server.crt` and `server.key` from `nginx/certs/`, and all HTTP traffic is automatically redirected to HTTPS (301).

```
nginx/certs/
├── server.crt    ← certificate (full chain)
└── server.key    ← private key
```

The certs directory is mounted read-only into the nginx container:

```yaml
volumes:
  - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
  - ./nginx/certs:/etc/nginx/certs:ro
```

To replace the certificate (e.g. on renewal):

1. Drop the new `server.crt` and `server.key` into `nginx/certs/`.
2. Reload nginx without restarting the container:

   ```bash
   docker compose exec nginx nginx -s reload
   ```

### Let's Encrypt / Certbot

To automate renewal, run Certbot in a separate container using the DNS-01 or webroot challenge, output the cert as `server.crt` / `server.key`, and hook `nginx -s reload` into the post-renewal hook.

---

## Common Commands

```bash
# Rebuild and restart a single service after a code change
docker compose build billcraft && docker compose up -d --no-deps billcraft

# Stop the stack (preserves images and volumes)
docker compose down

# Stop and remove everything including volumes
docker compose down -v

# Open a shell in a running container
docker compose exec billcraft sh

# Check nginx config for syntax errors
docker compose exec nginx nginx -t

# Reload nginx config without downtime
docker compose exec nginx nginx -s reload

# Pull the latest nginx image
docker compose pull nginx
```

---

## Updating an Application

After pushing new code to any project:

```bash
# Rebuild the image
docker compose build <service>   # billcraft | supportcraft | taskcraft | pdfcraft | aakasa-digital

# Swap the container with zero downtime (single-replica)
docker compose up -d --no-deps <service>
```

---

## Troubleshooting

**Container exits immediately**
Run `docker compose logs <service>` to see the error. Common causes: missing required env var, wrong `NEXT_PUBLIC_SUPABASE_URL`, or a failed Supabase connection at startup.

**502 Bad Gateway from nginx**
The upstream app container hasn't started yet or crashed. Check `docker compose ps` and `docker compose logs <service>`.

**`NEXT_PUBLIC_*` change not reflected after restart**
These variables are embedded at build time. Run `docker compose build <service>` then `docker compose up -d --no-deps <service>`.

**Port 80 or 443 already in use**
Another process (e.g. a local web server) is occupying the port. Stop it, or change the host port mapping in `docker-compose.yml`:
```yaml
ports:
  - "8080:80"
  - "8443:443"
```
