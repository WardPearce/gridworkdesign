<script lang="ts">
	import { Combobox } from 'bits-ui';
	type Option = { value: string; label: string; disabled?: boolean };
	let {
		label,
		options,
		value = $bindable(''),
		placeholder = 'Search options'
	}: { label: string; options: Option[]; value?: string; placeholder?: string } = $props();
</script>

<div class="combo-field">
	<span class="combo-label">{label}</span>
	<Combobox.Root type="single" bind:value>
		<Combobox.Input class="combo-input" {placeholder} aria-label={label} />
		<Combobox.Portal>
			<Combobox.Content class="combo-content" sideOffset={4}>
				<Combobox.Viewport>
					{#each options as option (option.value)}
						<Combobox.Item value={option.value} disabled={option.disabled} class="combo-item"
							>{option.label}</Combobox.Item
						>
					{/each}
				</Combobox.Viewport>
			</Combobox.Content>
		</Combobox.Portal>
	</Combobox.Root>
</div>

<style>
	.combo-field {
		display: grid;
		gap: 0.35rem;
		color: var(--text);
	}
	.combo-label {
		font-weight: 700;
	}
	:global(.combo-input) {
		box-sizing: border-box;
		width: 100%;
		min-height: 2.75rem;
		padding: 0.5rem 0.75rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
	}
	:global(.combo-input:focus-visible) {
		border-style: dotted;
		outline: none;
	}
	:global(.combo-content) {
		z-index: 50;
		min-width: var(--bits-select-anchor-width);
		max-height: min(18rem, var(--bits-select-content-available-height));
		overflow: auto;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: 3px 3px 0 var(--text);
	}
	:global(.combo-item) {
		min-height: 2.75rem;
		padding: 0.6rem 0.75rem;
		cursor: pointer;
	}
	:global(.combo-item[data-highlighted]) {
		outline: 1px dashed var(--text);
		outline-offset: -4px;
	}
	:global(.combo-item[data-disabled]) {
		opacity: 0.55;
		cursor: not-allowed;
	}
</style>
