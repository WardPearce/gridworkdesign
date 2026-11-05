<script lang="ts">
	import { TimeRangeField as BitsField } from 'bits-ui';
	import type { TimeRange } from 'bits-ui';
	import type { Time } from '@internationalized/date';
	let { label = 'Time range', value = $bindable() }: { label?: string; value?: TimeRange<Time> } = $props();
</script>

<BitsField.Root bind:value>
	<BitsField.Label class="range-label">{label}</BitsField.Label>
	<BitsField.Input type="start" class="range-input">
		{#snippet children({ segments })}
			{#each segments as { part }, index (index)}
				<BitsField.Segment {part} />
			{/each}
		{/snippet}
	</BitsField.Input>
	<BitsField.Input type="end" class="range-input" />
</BitsField.Root>

<style>
	:global(.range-label) { display: block; margin-bottom: 0.35rem; color: var(--text); font-weight: 700; }
	:global(.range-input) { display: flex; flex-wrap: wrap; width: fit-content; min-height: 2.75rem; align-items: center; gap: 0.15rem; padding: 0.4rem 0.65rem; border: 2px solid var(--text); background: transparent; color: var(--text); font: inherit; }
	:global(.range-input:focus-visible) { outline: 2px dashed var(--text); outline-offset: 3px; }
	:global(.range-input [data-focused]) { outline: 1px dashed var(--text); background: var(--background-darker); color: var(--white); }
</style>
