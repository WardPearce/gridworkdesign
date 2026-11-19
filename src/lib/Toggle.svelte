<script lang="ts">
	import { Toggle as BitsToggle } from 'bits-ui';

	let {
		label,
		pressed = $bindable(false),
		disabled = false
	}: { label: string; pressed?: boolean; disabled?: boolean } = $props();
</script>

<BitsToggle.Root bind:pressed {disabled} class="toggle">
	{label}
</BitsToggle.Root>

<style>
	:global(.toggle) {
		min-height: 2.75rem;
		padding: 0.5rem 0.9rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
		box-shadow: var(--shadow-raised);
	}

	:global(.toggle[data-state='on']) {
		background: var(--background-darker);
		color: var(--white);
		box-shadow: var(--shadow-inset);
	}

	:global(
		.toggle:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			):not(:disabled)
	) {
		box-shadow: var(--shadow-hover);
	}

	:global(.toggle:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}

	:global(.toggle:disabled) {
		cursor: not-allowed;
		opacity: 0.55;
	}

	:global(.toggle:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}
</style>
