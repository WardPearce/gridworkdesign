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
		box-shadow: var(--shadow-raised);
	}
	:global(.rating-group-item[data-state='active']),
	:global(.rating-group-item[data-state='partial']) {
		background: var(--background-darker);
		color: var(--white);
		box-shadow: var(--shadow-inset);
	}
	:global(
		.rating-group-item:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			):not(:disabled)
	) {
		background: color-mix(in srgb, var(--background-darker) 50%, var(--white));
		color: var(--text);
		box-shadow: var(--shadow-hover);
	}
	:global(.rating-group-item:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	:global(.rating-group-item:disabled) {
		opacity: 0.55;
		cursor: not-allowed;
	}

	:global(.rating-group-item:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}
</style>
