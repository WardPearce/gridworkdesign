<script lang="ts">
	import { DateRangeField as BitsField } from 'bits-ui';
	import type { DateRange } from 'bits-ui';
	let { label = 'Date range', value = $bindable() }: { label?: string; value?: DateRange } =
		$props();
</script>

<BitsField.Root bind:value>
	<BitsField.Label class="range-label">{label}</BitsField.Label>
	<BitsField.Input type="start" class="range-input">
		{#snippet children({ segments })}
			{#each segments as { part, value }, index (`${part}-${index}`)}
				<BitsField.Segment {part}>{value}</BitsField.Segment>
			{/each}
		{/snippet}
	</BitsField.Input>
	<BitsField.Input type="end" class="range-input">
		{#snippet children({ segments })}
			{#each segments as { part, value }, index (`${part}-${index}`)}
				<BitsField.Segment {part}>{value}</BitsField.Segment>
			{/each}
		{/snippet}
	</BitsField.Input>
</BitsField.Root>

<style>
	:global(.range-label) {
		display: block;
		margin-bottom: 0.35rem;
		color: var(--text);
		font-weight: 700;
	}
	:global(.range-input) {
		display: flex;
		flex-wrap: wrap;
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
	:global(.range-input:focus-within) {
		border-style: solid;
		outline: none !important;
		box-shadow: none !important;
	}
	:global(.range-input:focus),
	:global(.range-input:focus-visible) { outline: none !important; box-shadow: none !important; }
	:global(.range-input :focus),
	:global(.range-input :focus-visible) {
		outline: none !important;
		box-shadow: none !important;
		background: var(--background-darker);
		color: var(--white);
	}
	:global(.range-input [data-focused]),
	:global(.range-input [data-focused]:focus),
	:global(.range-input [data-focused]:focus-visible) {
		outline: none !important;
		box-shadow: none !important;
		background: var(--background-darker);
		color: var(--white);
	}
</style>
