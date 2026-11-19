<script lang="ts">
	import { ToggleGroup as BitsToggleGroup } from 'bits-ui';

	type Option = { value: string; label: string; disabled?: boolean };
	let {
		options,
		value = $bindable(''),
		disabled = false
	}: { options: Option[]; value?: string; disabled?: boolean } = $props();
</script>

<BitsToggleGroup.Root
	type="single"
	bind:value
	{disabled}
	class="toggle-group"
	aria-label="Choose an option"
>
	{#each options as option (option.value)}
		<BitsToggleGroup.Item value={option.value} disabled={option.disabled} class="toggle-group-item">
			{option.label}
		</BitsToggleGroup.Item>
	{/each}
</BitsToggleGroup.Root>

<style>
	:global(.toggle-group) {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	:global(.toggle-group-item) {
		min-height: 2.75rem;
		padding: 0.5rem 0.9rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
		box-shadow: var(--shadow-raised);
	}

	:global(.toggle-group-item[data-state='on']) {
		background: var(--background-darker);
		color: var(--white);
		box-shadow: var(--shadow-inset);
	}

	:global(
		.toggle-group-item:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			):not(:disabled)
	) {
		box-shadow: var(--shadow-hover);
	}

	:global(.toggle-group-item:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}

	:global(.toggle-group-item:disabled) {
		cursor: not-allowed;
		opacity: 0.55;
	}

	:global(.toggle-group-item:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}
</style>
