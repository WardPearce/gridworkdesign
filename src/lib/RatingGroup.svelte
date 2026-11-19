<script lang="ts">
	import { RatingGroup as BitsRatingGroup } from 'bits-ui';
	import { Star } from '@lucide/svelte';
	let {
		value = $bindable(0),
		max = 5,
		label = 'Rating'
	}: { value?: number; max?: number; label?: string } = $props();
</script>

<BitsRatingGroup.Root bind:value {max} aria-label={label} class="rating-group">
	{#each Array.from({ length: max }, (_, index) => index) as index (index)}
		<BitsRatingGroup.Item
			{index}
			class="rating-group-item"
			aria-label={`${index + 1} ${index === 0 ? 'star' : 'stars'}`}
		>
			<Star size={18} aria-hidden="true" />
		</BitsRatingGroup.Item>
	{/each}
</BitsRatingGroup.Root>

<style>
	:global(.rating-group) {
		display: inline-flex;
		gap: 0.2rem;
	}
	:global(.rating-group-item) {
		display: inline-flex;
		min-width: 2.75rem;
		min-height: 2.75rem;
		align-items: center;
		justify-content: center;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
	}
	:global(.rating-group-item[data-state='active']),
	:global(.rating-group-item[data-state='partial']) {
		background: var(--background-darker);
		color: var(--white);
		box-shadow:
			inset 0 2px 2px color-mix(in srgb, var(--white) 14%, transparent),
			inset 0 -3px 4px color-mix(in srgb, var(--text) 42%, transparent),
			0 1px 2px color-mix(in srgb, var(--text) 35%, transparent);
	}
	:global(.rating-group-item:hover:not(:disabled)) {
		background: color-mix(in srgb, var(--background-darker) 50%, var(--white));
		color: var(--text);
		border-style: dashed;
	}
	:global(.rating-group-item:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 2px;
	}
	:global(.rating-group-item:disabled) {
		opacity: 0.55;
		cursor: not-allowed;
	}
</style>
