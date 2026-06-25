# Final Vercel Production Deployment Instructions

## Required files
- `index.html`
- `guide.html`
- `api/_lib.js`
- `api/health.js`
- `api/context/build.js`
- `api/brief/generate.js`
- `lib/core.js`
- `package.json`
- `vercel.json`
- `.env.example`

## Required environment variables
- `ANTHROPIC_API_KEY`
- `ANTHROPIC_MODEL=claude-3-5-sonnet-latest`
- `ANTHROPIC_API_URL=https://api.anthropic.com/v1/messages`

## Deployment steps
1. Upload this package to a Git repository.
2. In Vercel, click **Add New Project**.
3. Import the repository.
4. Keep the project root as-is.
5. Set environment variables:
   - `ANTHROPIC_API_KEY`
   - `ANTHROPIC_MODEL`
   - `ANTHROPIC_API_URL`
6. Deploy the project.
7. Open `https://YOUR-PROJECT.vercel.app/health`.
8. Confirm the response contains `ok: true`.
9. Open `https://YOUR-PROJECT.vercel.app/`.
10. Open **Settings → Deployment**.
11. Confirm Backend Base URL is the same Vercel origin.
12. Click **Test backend**.
13. Run a production smoke test through the Synthesizer.

## Smoke test payload
Use a simple intake like:
- Client Name: Acme Renewables
- Company Name: Acme Renewables SAOC
- Industry: Renewable Energy
- Department: Business Development
- Domain: Utility-scale Solar Expansion
- Region: OM
- Scope: Help us expand into utility-scale solar and align with national investment priorities.

## Expected results
- `/health` returns 200
- context build returns `ok: true`
- brief generate returns `ok: true`
- the app shows backend connected

## Vercel runtime compatibility fix
This package intentionally omits the `functions.runtime` setting in `vercel.json`. Vercel auto-detects the Node runtime for the API files, which avoids the deployment error you hit.
