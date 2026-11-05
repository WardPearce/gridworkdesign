<script lang="ts">
	import { RatingGroup as BitsRatingGroup } from 'bits-ui';
	let { value = $bindable(0), max = 5, label = 'Rating' }: { value?: number; max?: number; label?: string } = $props();
</script>

<BitsRatingGroup.Root bind:value {max} aria-label={label} class="rating-group">
	{#each Array.from({ length: max }, (_, index) => index) as index (index)}
		<BitsRatingGroup.Item {index} class="rating-item" aria-label={`${index + 1} ${index === 0 ? 'star' : 'stars'}`}>
			<span aria-hidden="true">★</span>
		</BitsRatingGroup.Item>
	{/each}
</BitsRatingGroup.Root>

<style>
	:global(.rating-group) { display: inline-flex; gap: 0.2rem; }
	:global(.rating-item) { min-width: 2.75rem; min-height: 2.75rem; border: 2px solid var(--text); background: transparent; color: var(--text); font: inherit; cursor: pointer; }
	:global(.rating-item[data-state='active']), :global(.rating-item[data-state='partial']) { background: var(--background-darker); color: var(--white); }
	:global(.rating-item:hover:not(:disabled)) { outline: 1px dashed var(--text); outline-offset: -4px; }
	:global(.rating-item:focus-visible) { outline: 2px dashed var(--text); outline-offset: 2px; }
	:global(.rating-item:disabled) { opacity: 0.55; cursor: not-allowed; }
</style>
