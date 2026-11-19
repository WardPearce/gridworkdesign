<script lang="ts">
	import { LinkPreview as BitsPreview } from 'bits-ui';
	let {
		href,
		label,
		title,
		description,
		openDelay = 500
	}: {
		href: string;
		label?: string;
		title: string;
		description?: string;
		openDelay?: number;
	} = $props();
</script>

<BitsPreview.Root {openDelay}>
	<BitsPreview.Trigger class="preview-link" {href}>{label ?? title}</BitsPreview.Trigger>
	<BitsPreview.Portal>
		<BitsPreview.Content class="preview-content" sideOffset={8}>
			<strong>{title}</strong>
			{#if description}<p>{description}</p>{/if}
			<BitsPreview.Arrow class="preview-arrow" />
		</BitsPreview.Content>
	</BitsPreview.Portal>
</BitsPreview.Root>

<style>
	:global(.preview-link) {
		color: var(--text);
		text-underline-offset: 0.2em;
	}
	:global(
		.preview-link:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			)
	) {
		text-decoration-style: solid;
	}
	:global(.preview-link:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	:global(.preview-content) {
		z-index: var(--layer-popup);
		width: min(20rem, calc(100vw - 2rem));
		padding: 1rem;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: var(--shadow-floating);
	}
	:global(.preview-content p) {
		margin: 0.375rem 0 0;
	}
	:global(.preview-arrow) {
		fill: var(--background);
		stroke: var(--text);
	}
</style>
