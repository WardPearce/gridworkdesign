<script lang="ts">
	import { AspectRatio as BitsAspectRatio } from 'bits-ui';
	let { ratio = 16 / 9, children }: { ratio?: number; children: import('svelte').Snippet } = $props();
</script>

<BitsAspectRatio.Root {ratio} class="aspect-ratio">{@render children()}</BitsAspectRatio.Root>

<style>
	:global(.aspect-ratio) { width: 100%; overflow: hidden; border: 2px solid var(--text); }
	:global(.aspect-ratio > *) { width: 100%; height: 100%; object-fit: cover; }
</style>
