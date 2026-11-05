<script lang="ts">
	import { Avatar as BitsAvatar } from 'bits-ui';
	let { src, alt, initials, delayMs = 300 }: { src?: string; alt: string; initials: string; delayMs?: number } = $props();
</script>

<BitsAvatar.Root {delayMs} class="avatar">
	{#if src}<BitsAvatar.Image {src} {alt} class="avatar-image" />{/if}
	<BitsAvatar.Fallback class="avatar-fallback">{initials}</BitsAvatar.Fallback>
</BitsAvatar.Root>

<style>
	:global(.avatar) { display: inline-flex; width: 2.75rem; height: 2.75rem; align-items: center; justify-content: center; overflow: hidden; border: 2px solid var(--text); background: var(--background-darker); color: var(--white); }
	:global(.avatar-image) { width: 100%; height: 100%; object-fit: cover; }
	:global(.avatar-fallback) { font: inherit; font-weight: 700; }
</style>
