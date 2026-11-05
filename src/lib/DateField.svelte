<script lang="ts">
	import { DateField as BitsDateField } from 'bits-ui';
	import type { DateValue } from '@internationalized/date';
	let { label = 'Date', value = $bindable() }: { label?: string; value?: DateValue } = $props();
</script>

<div class="date-field">
	<BitsDateField.Root bind:value>
		<BitsDateField.Label class="date-label">{label}</BitsDateField.Label>
		<BitsDateField.Input class="date-input">
			{#snippet children({ segments })}
				{#each segments as { part, value }, index (`${part}-${index}`)}
					<BitsDateField.Segment {part}>{value}</BitsDateField.Segment>
				{/each}
			{/snippet}
		</BitsDateField.Input>
	</BitsDateField.Root>
</div>

<style>
	:global(.date-field) {
		display: grid;
		gap: 0.35rem;
	}
	:global(.date-label) {
		font-weight: 700;
	}
	:global(.date-input) {
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
	:global(.date-input:focus-within) {
		border-style: solid;
		outline: none !important;
		box-shadow: none !important;
	}
	:global(.date-input:focus),
	:global(.date-input:focus-visible) { outline: none !important; box-shadow: none !important; }
	:global(.date-input :focus),
	:global(.date-input :focus-visible) {
		outline: none !important;
		box-shadow: none !important;
		background: var(--background-darker);
		color: var(--white);
		animation: segment-pulse 1.6s ease-in-out infinite;
	}
	:global(.date-input [data-focused]),
	:global(.date-input [data-focused]:focus),
	:global(.date-input [data-focused]:focus-visible) {
		outline: none !important;
		box-shadow: none !important;
		background: var(--background-darker);
		color: var(--white);
		animation: segment-pulse 1.6s ease-in-out infinite;
	}
	@keyframes segment-pulse {
		50% { background: var(--background-darker); color: var(--white); }
	}
</style>
