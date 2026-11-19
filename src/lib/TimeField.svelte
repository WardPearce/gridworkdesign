<script lang="ts">
	import { TimeField as BitsTimeField } from 'bits-ui';
	import type { Time } from '@internationalized/date';
	let { label = 'Time', value = $bindable() }: { label?: string; value?: Time } = $props();
</script>

<div class="time-field">
	<BitsTimeField.Root bind:value>
		<BitsTimeField.Label class="time-label">{label}</BitsTimeField.Label>
		<BitsTimeField.Input class="time-input">
			{#snippet children({ segments })}
				{#each segments as { part, value }, index (`${part}-${index}`)}
					<BitsTimeField.Segment {part}>{value}</BitsTimeField.Segment>
				{/each}
			{/snippet}
		</BitsTimeField.Input>
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
		box-shadow: var(--shadow-inset);
	}
	:global(.time-input:focus-within) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
		box-shadow: var(--shadow-inset);
	}
	:global(.time-input :focus),
	:global(.time-input :focus-visible) {
		outline: none !important;
		box-shadow: none !important;
		background: var(--background-darker);
		color: var(--white);
	}
	:global(.time-input [data-focused]),
	:global(.time-input [data-focused]:focus),
	:global(.time-input [data-focused]:focus-visible) {
		outline: none !important;
		box-shadow: none !important;
		background: var(--background-darker);
		color: var(--white);
	}
</style>
