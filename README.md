# ADTOS v4.5 Vercel Production Package

This package is ready to deploy as a **single Vercel project** that hosts:
- the ADTOS app at `/`
- the production guide at `/guide.html`
- the backend API routes at `/api/*`
- a health route at `/health`

## Included routes
- `GET /health`
- `POST /api/context/build`
- `POST /api/brief/generate`

## Required Vercel environment variables
- `ANTHROPIC_API_KEY` (required for live Claude calls)
- `ANTHROPIC_MODEL` (recommended: `claude-3-5-sonnet-latest`)
- `ANTHROPIC_API_URL` (default: `https://api.anthropic.com/v1/messages`)

## Step-by-step deployment
1. Create a new Git repository with the contents of this folder.
2. Push the repository to GitHub/GitLab/Bitbucket.
3. Import the repository into Vercel.
4. Framework preset: **Other**.
5. Root directory: project root.
6. Add environment variables:
   - `ANTHROPIC_API_KEY`
   - `ANTHROPIC_MODEL=claude-3-5-sonnet-latest`
   - `ANTHROPIC_API_URL=https://api.anthropic.com/v1/messages`
7. Deploy.
8. After deployment, visit `/health` and verify `ok: true`.
9. Open `/` and go to **Settings → Deployment**.
10. Confirm **Backend Base URL** is your Vercel domain. In this package, same-origin hosting is the recommended setup.
11. Click **Test backend**.
12. Run a real Synthesizer session.

## Production checklist
- Verify `/health`
- Verify `/api/context/build`
- Verify `/api/brief/generate`
- Confirm the app can test the backend successfully
- Keep the Anthropic secret only in Vercel environment variables

## Vercel runtime compatibility fix
This package intentionally omits the `functions.runtime` setting in `vercel.json`. Vercel auto-detects the Node runtime for the API files, which avoids the deployment error you hit.
