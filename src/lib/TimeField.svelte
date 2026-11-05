<script lang="ts">
	import { TimeField as BitsTimeField } from 'bits-ui';
	import type { Time } from '@internationalized/date';
	let { label = 'Time', value = $bindable() }: { label?: string; value?: Time } = $props();
</script>

<div class="time-field">
	<BitsTimeField.Root bind:value>
		<BitsTimeField.Label class="time-label">{label}</BitsTimeField.Label>
		<BitsTimeField.Input class="time-input" />
	</BitsTimeField.Root>
</div>

<style>
	:global(.time-field) {
		display: grid;
		gap: 0.35rem;
	}
	:global(.time-label) {
		font-weight: 700;
	}
	:global(.time-input) {
		display: flex;
		width: fit-content;
		min-height: 2.75rem;
		align-items: center;
		gap: 0.15rem;
		padding: 0.4rem 0.65rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
	}
	:global(.time-input:focus-within) {
		border-style: dashed;
	}
	:global(.time-input [data-focused]) {
		outline: 1px dashed var(--text);
		background: var(--background-darker);
		color: var(--white);
	}
</style>
