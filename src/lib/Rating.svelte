<script lang="ts">
	import { RatingGroup } from 'bits-ui';
	import { Star } from '@lucide/svelte';
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
		{#each Array.from({ length: max }, (_, index) => index) as index (index)}
			<RatingGroup.Item {index} class="rating-field-item" aria-label={`${index + 1} of ${max}`}>
				<Star size={20} aria-hidden="true" />
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
	:global(.rating-field-item) {
		display: inline-flex;
		min-width: 2.75rem;
		min-height: 2.75rem;
		align-items: center;
		justify-content: center;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		font-size: 1.5rem;
		cursor: pointer;
		box-shadow: var(--shadow-raised);
	}
	:global(.rating-field-item[data-highlighted]),
	:global(.rating-field-item[data-state='active']) {
		background: var(--background-darker);
		color: var(--white);
		box-shadow: var(--shadow-inset);
	}
	:global(
		.rating-field-item:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			):not(:disabled)
	) {
		background: color-mix(in srgb, var(--background-darker) 50%, var(--white));
		color: var(--text);
		box-shadow: var(--shadow-hover);
	}
	:global(
		.rating-field-item[data-highlighted]:hover:not(:disabled):not([data-disabled]):not(
				[aria-disabled='true']
			):not([data-disabled] *):not(:disabled)
	),
	:global(
		.rating-field-item[data-state='active']:hover:not(:disabled):not([data-disabled]):not(
				[aria-disabled='true']
			):not([data-disabled] *):not(:disabled)
	) {
		color: var(--text);
		background: color-mix(in srgb, var(--background-darker) 50%, var(--white));
		box-shadow: var(--shadow-inset);
	}
	:global(.rating-field-item:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	:global(.rating-root[data-disabled]) {
		opacity: 0.55;
	}

	:global(.rating-field-item:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}
</style>
