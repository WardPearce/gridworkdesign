<script lang="ts">
	import { Select } from 'bits-ui';
	import { ChevronDown } from '@lucide/svelte';

	type Option = { value: string; label: string; disabled?: boolean };
	let {
		label,
		options,
		value = $bindable(''),
		placeholder = 'Choose an option',
		name,
		disabled = false,
		required = false
	}: {
		label: string;
		options: Option[];
		value?: string;
		placeholder?: string;
		name?: string;
		disabled?: boolean;
		required?: boolean;
	} = $props();
</script>

<div class="select-field">
	<span class="select-label">{label}</span>
	<Select.Root type="single" bind:value {name} {disabled} {required}>
		<Select.Trigger class="select-trigger" aria-label={label}>
			<Select.Value {placeholder} />
			<ChevronDown size={16} aria-hidden="true" />
		</Select.Trigger>
		<Select.Portal>
			<Select.Content class="select-content ui-motion-enter" sideOffset={4}>
				<Select.Viewport>
					{#each options as option (option.value)}
						<Select.Item value={option.value} disabled={option.disabled} class="select-item">
							{option.label}
						</Select.Item>
					{/each}
				</Select.Viewport>
			</Select.Content>
		</Select.Portal>
	</Select.Root>
</div>

<style>
	.select-field {
		display: grid;
		gap: 0.35rem;
		color: var(--text);
	}

	.select-label {
		font-weight: 700;
	}

	:global(.select-trigger) {
		display: flex;
		min-height: 2.75rem;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.5rem 0.75rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		text-align: left;
		cursor: pointer;
	}

	:global(.select-trigger:focus-visible) {
		border-style: dashed;
	}

	:global(.select-content) {
		z-index: var(--layer-popup);
		min-width: var(--bits-select-anchor-width);
		max-height: min(18rem, var(--bits-select-content-available-height));
		overflow: auto;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: 3px 3px 0 var(--text);
	}

	:global(.select-item) {
		min-height: 2.75rem;
		padding: 0.6rem 0.75rem;
		cursor: pointer;
	}

	:global(.select-item[data-highlighted]) {
		background: var(--background-darker);
		color: var(--white);
	}

	:global(.select-item[data-disabled]) {
		cursor: not-allowed;
		opacity: 0.55;
	}
</style>
