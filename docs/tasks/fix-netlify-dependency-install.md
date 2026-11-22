# Fix Netlify dependency installation

## Intent and acceptance

Make the production dependency install reproducible from a public npm registry so Netlify can build the application without access to Allegro's private Artifactory.

The change is accepted when `npm ci` succeeds without the private registry, no `artifactory.allegrogroup.com` URL remains in `package-lock.json`, and `npm run build` completes after a clean install. The package versions, integrity hashes, package scripts and Netlify build settings remain unchanged.

## Change

Replaced the private registry host in `package-lock.json` with `https://registry.npmjs.org/` for the affected resolved package URLs. The package versions and integrity hashes were preserved. No `package.json` or build command change is required.

## Verification

- Confirmed the affected packages retain their existing integrity hashes.
- `npm ci --no-audit --no-fund`
- `npm run build`
- `git diff --check`
