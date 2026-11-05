<script lang="ts">
	import { ScrollArea as BitsScrollArea } from 'bits-ui';
	import type { Snippet } from 'svelte';
	let {
		children,
		maxHeight = '16rem',
		label = 'Scrollable content'
	}: { children?: Snippet; maxHeight?: string; label?: string } = $props();
</script>

<BitsScrollArea.Root class="scroll-root" style={`--scroll-max-height: ${maxHeight}`}>
	<BitsScrollArea.Viewport class="scroll-viewport" aria-label={label}>
		{@render children?.()}
	</BitsScrollArea.Viewport>
	<BitsScrollArea.Scrollbar class="scrollbar" orientation="vertical">
		<BitsScrollArea.Thumb class="scroll-thumb" />
	</BitsScrollArea.Scrollbar>
	<BitsScrollArea.Scrollbar class="scrollbar" orientation="horizontal">
		<BitsScrollArea.Thumb class="scroll-thumb" />
	</BitsScrollArea.Scrollbar>
	<BitsScrollArea.Corner class="scroll-corner" />
</BitsScrollArea.Root>

<style>
	:global(.scroll-root) {
		position: relative;
		max-height: var(--scroll-max-height);
		overflow: hidden;
		border: 2px solid var(--text);
	}
	:global(.scroll-viewport) {
		width: 100%;
		height: 100%;
	}
	:global(.scrollbar) {
		display: flex;
		touch-action: none;
		user-select: none;
		padding: 2px;
		background: var(--light);
	}
	:global(.scrollbar[data-orientation='vertical']) {
		width: 0.875rem;
	}
	:global(.scrollbar[data-orientation='horizontal']) {
		height: 0.875rem;
		flex-direction: column;
	}
	:global(.scroll-thumb) {
		position: relative;
		flex: 1;
		background: var(--text);
	}
	:global(.scroll-corner) {
		background: var(--light);
	}
</style>
