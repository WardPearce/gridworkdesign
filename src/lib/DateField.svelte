<script lang="ts">
	import { DateField as BitsDateField } from 'bits-ui';
	import type { DateValue } from '@internationalized/date';
	let { label = 'Date', value = $bindable() }: { label?: string; value?: DateValue } = $props();
</script>

<div class="date-field">
	<BitsDateField.Root bind:value>
		<BitsDateField.Label class="date-label">{label}</BitsDateField.Label>
		<BitsDateField.Input class="date-input" />
	</BitsDateField.Root>
</div>

<style>
	:global(.date-field) { display: grid; gap: 0.35rem; }
	:global(.date-label) { font-weight: 700; }
	:global(.date-input) { display: flex; width: fit-content; min-height: 2.75rem; align-items: center; gap: 0.15rem; padding: 0.4rem 0.65rem; border: 2px solid var(--text); background: transparent; color: var(--text); font: inherit; }
	:global(.date-input:focus-visible) { outline: 2px dashed var(--text); outline-offset: 3px; }
	:global(.date-input [data-focused]) { outline: 1px dashed var(--text); background: var(--background-darker); color: var(--white); }
</style>
