<script lang="ts">
	import { RatingGroup } from 'bits-ui';
	let {
		label,
		value = $bindable(0),
		max = 5,
		disabled = false
	}: { label: string; value?: number; max?: number; disabled?: boolean } = $props();
</script>

<div class="rating-field">
	<span>{label}</span>
	<RatingGroup.Root bind:value {max} {disabled} aria-label={label} class="rating-root">
		{#each Array.from({ length: max }, (_, index) => index + 1) as index (index)}
			<RatingGroup.Item {index} class="rating-item" aria-label={`${index} of ${max}`}>
				★
			</RatingGroup.Item>
		{/each}
	</RatingGroup.Root>
</div>

<style>
	.rating-field {
		display: grid;
		gap: 0.4rem;
		color: var(--text);
	}
	:global(.rating-root) {
		display: flex;
		gap: 0.25rem;
	}
	:global(.rating-item) {
		min-width: 2.75rem;
		min-height: 2.75rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		font-size: 1.5rem;
		cursor: pointer;
	}
	:global(.rating-item[data-highlighted]),
	:global(.rating-item[data-state='active']) {
		color: var(--background-darker);
	}
	:global(.rating-item:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 2px;
	}
	:global(.rating-root[data-disabled]) {
		opacity: 0.55;
	}
</style>
