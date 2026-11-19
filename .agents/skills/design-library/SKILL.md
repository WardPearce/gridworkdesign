---
name: design-library
description: Build or update Svelte interfaces with this repository's themed component library. Use when selecting, composing, or styling its exported controls in an app.
---

# Using the design component library

Use the library's components as the default building blocks for interface work in this repository and in apps that depend on this package. It is a Svelte 5 library: its controls expose Svelte props and snippets, and interactive primitives generally wrap Bits UI.

## Find the right component and API

1. Check `package.json` for the current package name and installed version. The package is currently named `design`; use the consuming app's dependency name if it differs.
2. Check [`src/lib/index.ts`](../../../src/lib/index.ts) for the supported public exports. Import components from the package root so the library entry point and its theme stylesheet are included. Avoid importing internal source paths from consuming apps.
3. Read the selected component's source and its showcase page at `src/routes/components/<component>/+page.svelte`. The showcase documents practical composition; the source defines the actual prop types, defaults, snippets, bindings, and native attributes. When the showcase and source disagree, follow the source and treat the mismatch as a documentation issue.
4. Use the component API as implemented. Do not assume components share a common `variant`, `size`, or child API. Many wrappers accept Svelte 5 snippets; some expose bindable `value` props. For unfamiliar APIs, inspect the component instead of guessing.

Example import in a consumer:

```svelte
<script lang="ts">
	import { Button, Field, Input } from 'design';

	let email = $state('');
</script>

<Field label="Email" required>
	{#snippet children({ id, 'aria-describedby': describedBy, 'aria-invalid': invalid })}
		<Input
			bind:value={email}
			{id}
			name="email"
			type="email"
			autocomplete="email"
			aria-describedby={describedBy}
			aria-invalid={invalid}
		/>
	{/snippet}
</Field>

<Button>Continue</Button>
```

Match the exact prop and snippet names to the current source. The example shows the `Field` child snippet contract and `Input`'s bindable value; it is not a template for every control.

## Preserve behavior and semantics

- Prefer the library wrapper over rebuilding an existing control. For dialogs, menus, popovers, tabs, calendars, and similar composites, preserve the Bits UI parts, state, keyboard interaction, focus management, and ARIA relationships.
- Use native HTML attributes the component accepts. Give icon-only actions an accessible name, associate controls with persistent labels, and provide text for errors and status. Do not communicate state through color alone.
- Keep focus indicators visible. For custom composition around a component, ensure keyboard focus, disabled, selected/open, invalid, and loading states remain perceivable and do not shift layout unexpectedly.
- Use `@lucide/svelte` for interface icons, matching the library's existing icon conventions. Mark decorative icons `aria-hidden="true"`; label the control, not the icon.

## Theme and layout

- The package entry point imports `theme.css`. Import components from the package root; avoid separately importing internal stylesheet paths unless the package setup explicitly requires it.
- Keep the active component theme as the source of truth for page and component surfaces. In app layouts, wrap rendered children with `Root` so the full viewport receives `--background`, `--text`, and the library typography; keep the theme variables high enough in the DOM for portaled overlays to inherit them.
- Reuse the semantic color aliases from `theme.css` for custom compositions: `--surface`, `--surface-subtle`, `--surface-muted`, `--surface-inverse`, `--foreground`, `--foreground-muted`, `--foreground-inverse`, `--border`, `--border-subtle`, `--accent`, and `--accent-foreground`. These aliases derive from the five base theme tokens and update with every palette.
- Keep custom page and component colors within those theme aliases. Avoid fixed hex/RGB colors and locally invented palettes, since they stop responding to theme changes. When a reusable color role is missing, add a semantic alias in `theme.css` derived from the base tokens, document its role, and check it across the shipped themes.
- Follow [`docs/design-system.md`](../../../docs/design-system.md) for palette roles, typography, shape, depth, motion, and responsive guidance. Use shared spacing, depth, and shape conventions instead of one-off values.
- Keep controls usable at narrow widths; allow content to wrap or stack and maintain comfortable target sizes.

## Verify changes

When adding or changing UI, inspect the rendered showcase or relevant route and use the repository's available check and lint scripts when verification is requested or appropriate for the change. For component API changes, update the showcase page so its examples and prop descriptions match the implementation. Consult the repository's Svelte documentation tools for Svelte-specific syntax when available.
