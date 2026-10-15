# Deployment

Single app, domain `auren.rest`. No environment variables are needed.

## Vercel

Import the repo, framework Next.js, no root-directory change, then add `auren.rest` (and redirect `www`) under Domains. DNS: A/ALIAS to the host Vercel shows.

## Docker / Kubernetes (Traefik)

```bash
docker build -t auren-web .
docker run -p 8080:3000 auren-web
```

Route `Host(`auren.rest`)` to the container's port 3000 with TLS. The Dockerfile has not been test-built yet (the Docker daemon was unavailable); the standalone output it copies (`.next/standalone/server.js`) was verified from a local build.

## Before launch

- Write real Privacy and Terms pages.
- Make sure `hello@auren.rest` receives mail (links currently deliver to `hello@sadeesha.me`).
