<script lang="ts">
	import { Select } from 'bits-ui';

	type Option = { value: string; label: string; disabled?: boolean };
	let {
		label,
		options,
		value = $bindable(''),
		placeholder = 'Choose an option',
		name
	}: {
		label: string;
		options: Option[];
		value?: string;
		placeholder?: string;
		name?: string;
	} = $props();
</script>

<div class="select-field">
	<span class="select-label">{label}</span>
	<Select.Root type="single" bind:value {name}>
		<Select.Trigger class="select-trigger" aria-label={label}>
			<Select.Value {placeholder} />
			<span aria-hidden="true">⌄</span>
		</Select.Trigger>
		<Select.Portal>
			<Select.Content class="select-content" sideOffset={4}>
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
		border-style: dotted;
	}

	:global(.select-content) {
		z-index: 50;
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
		outline: 1px dashed var(--text);
		outline-offset: -4px;
	}

	:global(.select-item[data-disabled]) {
		cursor: not-allowed;
		opacity: 0.55;
	}
</style>
