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
	}

	:global(.toggle-group-item[data-state='on']) {
		background: var(--background-darker);
		color: var(--white);
	}

	:global(.toggle-group-item:hover:not(:disabled)) {
		border-style: dotted;
	}

	:global(.toggle-group-item:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}

	:global(.toggle-group-item:disabled) {
		cursor: not-allowed;
		opacity: 0.55;
	}
</style>
