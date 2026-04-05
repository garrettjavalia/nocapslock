# NoCapslock

NoCapslock is a small multilingual web project about remapping `Caps Lock` to something more useful, such as `Control`, `Command`, or `Escape`.

The site currently aims to provide:

- multilingual content, starting with English and Korean
- operating-system-specific setup guides
- links to official or otherwise reliable sources where possible

This project was built with the help of AI, but it is meant to be reviewed carefully. The goal is not to replace human judgment. The goal is to support human work with something useful, readable, and checked with care.

If you open a PR, please keep that same spirit in mind: changes should try to help other people, and they should be written or reviewed carefully.

New languages, clearer wording, better UI details, better sources, and better setup methods are all welcome.

## Development

```bash
pnpm install
pnpm dev
```

Build:

```bash
pnpm build
```

Run the site locally with Cloudflare Pages Functions:

```bash
pnpm pages:dev
```

## Cloudflare Pages

This project can be deployed on Cloudflare Pages with Pages Functions enabled.

- Locale-specific static pages are generated at build time, such as `/en-US/`, `/ko-KR/`, and `/ja-JP/`.
- The root path `/` is handled by `functions/index.ts`, which reads the browser `Accept-Language` header and redirects to the best supported locale path.
- The client-side redirect remains in place as a fallback when the site is run outside Cloudflare Pages Functions.
