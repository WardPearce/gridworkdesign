# Gridworkdesign

Gridworkdesign is a Svelte 5 component library and design system for building practical, accessible interfaces. It pairs Bits UI interaction primitives with a distinctive visual language: monospace typography, square outlines, tactile surfaces, and a set of switchable color themes.

The repository also includes a SvelteKit component gallery with examples and API notes. Browse it locally with `bun run dev`.

## Highlights

- A broad set of composable controls, navigation, overlays, date and time inputs, and layout components.
- Accessible keyboard, focus, and ARIA behavior built on Bits UI where applicable.
- Six built-in themes: Gridwork, NewsPaper, BurntWood, Hacker, PurpleDaydream, and BloodRed.
- Shared CSS custom properties for colors, typography, focus rings, and depth.
- Svelte 5 components with TypeScript definitions.

## Install

Gridworkdesign requires Svelte 5. Once the package is published, install it and its peer dependency with your package manager:

**Bun**

```sh
bun add gridworkdesign svelte
```

**npm**

```sh
npm install gridworkdesign svelte
```

**pnpm**

```sh
pnpm add gridworkdesign svelte
```

**Yarn**

```sh
yarn add gridworkdesign svelte
```

For a checkout, clone the repository and follow the development steps below. Bits UI and Lucide Svelte are installed as dependencies.

## Use a component

Import components from the package entry point. The entry point includes the library theme stylesheet.

```svelte
<script lang="ts">
	import { Button, Checkbox } from 'gridworkdesign';

	let accepted = $state(false);
</script>

<Button>Save changes</Button>
<Button variant="alternate">Continue</Button>
<Checkbox label="I agree to the terms" bind:checked={accepted} />
```

Components accept their documented props and preserve the underlying HTML or Bits UI behavior. See the component gallery for examples and API details.

## Themes and styling

Gridworkdesign applies the Gridwork theme by default. Set `data-theme` on the document root to use another built-in palette:

```html
<html lang="en" data-theme="Hacker">
```

Available values are `Gridwork`, `NewsPaper`, `BurntWood`, `Hacker`, `PurpleDaydream`, and `BloodRed`. You can also override the CSS custom properties on `:root` or a theme container to create a custom palette. The main tokens are `--background`, `--text`, `--white`, `--light`, and `--background-darker`; semantic aliases such as `--surface`, `--foreground`, and `--border` are provided for custom compositions.

The package entry point imports `theme.css`, so importing components from `gridworkdesign` includes the default tokens and fonts.

## Components

The library includes buttons, inputs and fields, checkboxes, switches, toggles, selection controls, menus, dialogs, popovers, tabs, accordions, toolbars, calendars, date and time pickers, rating controls, navigation, cards, and utility components such as alerts, badges, progress, skeletons, and empty states.

The gallery in the repository documents component usage and props. Start the local site with `bun run dev`, then open the Components index.

## Development

Requires Bun. Clone the repository, install dependencies, then start the local gallery:

```sh
bun install
bun run dev
```

Useful project scripts:

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Vite/SvelteKit development server. |
| `bun run check` | Run Svelte and TypeScript checks. |
| `bun run lint` | Check formatting and lint the project. |
| `bun run test:unit` | Run unit and component tests with Vitest. |
| `bun run test:e2e` | Run browser tests with Playwright. |
| `bun run build` | Build the gallery and package. |
| `bun run prepack` | Package the library and check package output. |

Reusable library components live in [`src/lib`](src/lib/). The gallery routes live in [`src/routes`](src/routes/), and the design system guidance is in [`docs/design-system.md`](docs/design-system.md).

## Contributing

When adding or updating components, follow the shared tokens and accessibility guidance in [`docs/design-system.md`](docs/design-system.md). Keep components themeable, keyboard operable, and responsive, and document their props and examples in the component gallery.

## License

No project-level license file is currently included. Check with the maintainers before redistributing this package.
