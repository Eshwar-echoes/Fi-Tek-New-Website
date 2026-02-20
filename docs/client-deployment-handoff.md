# Client Deployment Handoff (Remove Demo Password Protection)

This project includes demo-only password protection using `middleware.ts`.

## Demo deployment on our Vercel (password ON)

1. Go to Vercel Project: `Settings` -> `Environment Variables`.
2. Add these variables for `Preview` and/or `Production`:
   - `DEMO_AUTH_ENABLED=true`
   - `DEMO_USER=<username>`
   - `DEMO_PASS=<strong-password>`
3. Redeploy the project after saving env vars.
4. Share with client:
   - Demo URL
   - Username
   - Password

## Local test (before deploy)

1. Create `.env.local` in project root.
2. Copy values from `docs/demo-auth.env.example`.
3. Run `npm run dev` and open the site.
4. Browser should ask for username/password.

## If you want password protection OFF on client deployment

1. In hosting environment variables, set:
   - `DEMO_AUTH_ENABLED=false`
2. Remove demo credentials if present:
   - `DEMO_USER`
   - `DEMO_PASS`

That is enough. No code change is required.

## If you want to remove it fully from code

1. Delete `middleware.ts` from the project root.
2. Remove these environment variables if they exist:
   - `DEMO_AUTH_ENABLED`
   - `DEMO_USER`
   - `DEMO_PASS`
