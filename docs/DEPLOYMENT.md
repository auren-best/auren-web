# Deployment

Single app, domain `auren.rest`. `NEXT_PUBLIC_*` variables are inlined at build time, so set them before building.

## Vercel

Import the repo, framework Next.js, no root-directory change. Set env vars from `.env.example`, then add `auren.rest` (and redirect `www`) under Domains. DNS: A/ALIAS to the host Vercel shows.

## Docker / Kubernetes (Traefik)

```bash
docker build -t auren-web .
docker run -p 8080:3000 auren-web
```

Pass `--build-arg NEXT_PUBLIC_ZENT_URL=...` etc. to override defaults. Route `Host(`auren.rest`)` to the container's port 3000 with TLS. The Dockerfile has not been test-built yet (the Docker daemon was unavailable); the standalone output it copies (`.next/standalone/server.js`) was verified from a local build.

## Before launch

- Replace `hello@auren.rest` with a real, monitored mailbox.
- Write real Privacy and Terms pages.
