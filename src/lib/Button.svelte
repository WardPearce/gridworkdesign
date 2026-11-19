<script lang="ts">
	import { Button as BitsButton } from 'bits-ui';
	let {
		variant = 'primary',
		children,
		class: className = '',
		...rest
	}: { variant?: 'primary' | 'alternate'; children: import('svelte').Snippet } & Omit<
		import('svelte/elements').HTMLButtonAttributes,
		'children' | 'child'
	> = $props();
</script>

<BitsButton.Root class={['button', { alternate: variant === 'alternate' }, className]} {...rest}
	>{@render children()}</BitsButton.Root
>

<style>
	:global(.button) {
		display: inline-flex;
		min-height: 2.75rem;
		align-items: center;
		justify-content: center;
		padding: 0.55rem 0.9rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		box-shadow: 3px 3px 0 var(--text);
		font: inherit;
		text-decoration: none;
		cursor: pointer;
	}
	:global(.button.alternate) {
		background: var(--background-darker);
		color: var(--white);
		box-shadow:
			inset 0 2px 2px color-mix(in srgb, var(--white) 18%, transparent),
			inset 0 -3px 4px color-mix(in srgb, var(--text) 42%, transparent),
			0 4px 8px color-mix(in srgb, var(--text) 45%, transparent);
	}
	:global(.button:hover:not(:disabled)) {
		border-style: dashed;
	}
	:global(.button.alternate:hover:not(:disabled)) {
		border-color: var(--background);
	}
	:global(.button:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}
	:global(.button:active:not(:disabled)) {
		transform: translate(2px, 2px);
		box-shadow: 1px 1px 0 var(--text);
	}
	:global(.button.alternate:active:not(:disabled)) {
		box-shadow:
			inset 0 2px 2px color-mix(in srgb, var(--white) 12%, transparent),
			inset 0 -2px 3px color-mix(in srgb, var(--text) 48%, transparent),
			0 1px 2px color-mix(in srgb, var(--text) 38%, transparent);
	}
	:global(.button:disabled) {
		opacity: 0.55;
		cursor: not-allowed;
	}
</style>
