# NoCapslock

NoCapslock is a small multilingual web project about a very opinionated idea: `Caps Lock` is often one of the most valuable keys on the keyboard, and many people are better served by turning it into something more useful such as `Control`, `Command`, or `Escape`.

This site exists to explain that idea clearly, let people feel the difference in the browser, and point them toward practical setup guides for Windows, macOS, and Linux.

## Why this project exists

Many people barely use `Caps Lock`, but reach for `Control`, `Command`, or `Escape` all day. Moving one of those actions closer to the home row can make everyday shortcuts feel more comfortable and reduce unnecessary hand movement.

The goal of this project is not to insist on one “correct” keyboard layout. The goal is to make the tradeoffs easy to understand, easy to try, and easy to set up.

## Project goals

- Explain why remapping `Caps Lock` can be useful.
- Provide a clean, searchable, multilingual landing page.
- Offer practical setup guides for major operating systems.
- Keep the writing approachable, accurate, and easy to verify.
- Present the idea with care, not just with enthusiasm.

## Built with care

This website was built with the help of AI during design, writing, and implementation work. Even so, the intent is not to publish AI-shaped output without review.

The project tries to treat both information and presentation seriously:

- Setup guidance should be grounded in official or otherwise reliable sources.
- Copy should be short, polite, and natural in each supported language.
- UI details should be reviewed so the site feels intentional and visually clean.

In short, the standard here is not “generated quickly.” The standard is “checked carefully.”

## Contributions

Pull requests are welcome, especially when they make the project:

- more accurate
- easier to understand
- more beautiful
- more useful across operating systems and keyboard layouts
- easier to translate into additional languages

New tools, better workflows, clearer setup methods, and corrections to existing guidance are all valuable contributions.

If you open a PR, please aim for the same standard this project is trying to keep:

- prefer reliable sources over guesswork
- prefer clear writing over clever writing
- prefer deliberate UI improvements over noisy changes
- prefer reviewed details over fast but shaky output

## Development

```bash
npm install
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the built output:

```bash
npm run serve
```

## Tech stack

- React
- Vite
- `vite-react-ssg`
- `vanilla-extract`

## Languages

The project currently ships with:

- English
- Korean

The i18n structure is split by locale so more languages can be added later without keeping all copy in one large file.
