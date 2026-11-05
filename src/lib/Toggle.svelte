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
	}

	:global(.toggle[data-state='on']) {
		background: var(--background-darker);
		color: var(--white);
	}

	:global(.toggle:hover:not(:disabled)) {
		border-style: dashed;
	}

	:global(.toggle:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}

	:global(.toggle:disabled) {
		cursor: not-allowed;
		opacity: 0.55;
	}
</style>
