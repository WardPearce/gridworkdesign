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
		min-height: var(--control-height);
		gap: 0.5rem;
		align-items: center;
		justify-content: center;
		padding: 0.55rem 0.9rem;
		border: var(--border-width) solid var(--text);
		background: transparent;
		color: var(--text);
		box-shadow: var(--shadow-raised);
		font: inherit;
		font-size: var(--type-small);
		line-height: 1.35;
		white-space: nowrap;
		transition:
			box-shadow 140ms ease-out,
			transform 140ms ease-out;
		text-decoration: none;
		cursor: pointer;
	}
	:global(.button.alternate) {
		background: var(--background-darker);
		color: var(--white);
		box-shadow: var(--shadow-raised);
	}
	:global(
		.button:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			):not(:disabled)
	) {
		box-shadow: var(--shadow-hover);
		transform: translate(-1px, -1px);
	}
	:global(
		.button.alternate:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			):not(:disabled)
	) {
		border-color: var(--background);
	}
	:global(.button:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	:global(.button:active:not(:disabled)) {
		transform: translate(1px, 1px);
		box-shadow: var(--shadow-inset);
	}
	:global(.button.alternate:active:not(:disabled)) {
		box-shadow: var(--shadow-inset);
	}
	:global(.button:disabled) {
		opacity: 0.55;
		cursor: not-allowed;
	}
	@media (prefers-reduced-motion: reduce) {
		:global(.button) {
			transition: none;
		}
		:global(.button:hover:not(:disabled)),
		:global(.button:active:not(:disabled)) {
			transform: none;
		}
	}
</style>
