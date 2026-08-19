# Aakasa Digital

[![License: PolyForm Noncommercial 1.0.0](https://img.shields.io/badge/License-PolyForm%20Noncommercial%201.0.0-orange.svg)](LICENSE.md)

The central landing platform and product hub for the **Aakasa Digital** product family.

## Overview

Aakasa Digital serves as the main entry point (`https://aakasa.dev`) and authentication/dashboard layer for all Aakasa products:

*   **PDFCraft** — PDF tools (merge, split, compress, sign, organize, convert)
*   **BillCraft** — Invoicing & billing automation
*   **MeetingCraft** — Meeting notes & action items
*   **SupportCraft** — Customer support ticketing
*   **TaskCraft** — Project & task management

## Architecture

*   **Framework:** Next.js 15+ (App Router) + TypeScript
*   **Styling:** Tailwind CSS + shadcn/ui
*   **Authentication:** NextAuth.js (Credentials, Google OAuth, Magic Links)
*   **Database:** PostgreSQL (Neon) via Prisma ORM
*   **Deployment:** Docker (production), Vercel (preview/staging)

## License

**Non-Commercial Only:** This repository is source-available for personal, educational, research, and evaluation purposes under the **PolyForm Noncommercial License 1.0.0**.

**Commercial use requires a paid license.** See [COMMERCIAL_LICENSE.md](COMMERCIAL_LICENSE.md) or contact [licenses@aakasa.dev](mailto:licenses@aakasa.dev).

## Project Structure

```text
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/             # Login, register, password reset
│   ├── (dashboard)/        # Protected dashboard routes
│   ├── (landing)/          # Public landing page
│   └── api/                # API routes (webhooks, auth callbacks)
├── components/             # Shared React components
├── lib/                    # Core utilities (auth, db, email, etc.)
├── features/               # Feature-specific code (auth, billing, etc.)
└── types/                  # TypeScript definitions
```

## Development

```bash
# Install dependencies
npm install

# Set up environment variables (see .env.example)
cp .env.example .env.local

# Run database migrations
npx prisma migrate dev

# Start development server (port 3001)
npm run dev
```

## Deployment

### Docker (Production)
```bash
docker build -t aakasa-digital .
docker run -p 3001:3001 aakasa-digital
```

### Vercel (Preview)
Connect the repository to Vercel. Ensure `NEXT_PUBLIC_APP_URL` is set in Environment Variables.