<script lang="ts">
	import { Combobox } from 'bits-ui';
	type Option = { value: string; label: string; disabled?: boolean };
	let {
		label,
		options,
		value = $bindable(''),
		placeholder = 'Search options',
		name,
		disabled = false,
		required = false
	}: { label: string; options: Option[]; value?: string; placeholder?: string; name?: string; disabled?: boolean; required?: boolean } = $props();
</script>

<div class="combo-field">
	<span class="combo-label">{label}</span>
	<Combobox.Root type="single" bind:value {name} {disabled} {required}>
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
		border-style: dashed;
		outline: none;
	}
	:global(.combo-content) {
		z-index: var(--layer-popup);
		width: var(--bits-combobox-anchor-width);
		min-width: var(--bits-combobox-anchor-width);
		max-height: min(18rem, var(--bits-combobox-content-available-height));
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
		background: var(--background-darker);
		color: var(--white);
	}
	:global(.combo-item[data-disabled]) {
		opacity: 0.55;
		cursor: not-allowed;
	}
</style>
