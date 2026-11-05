<script lang="ts">
	import { Collapsible as BitsCollapsible } from 'bits-ui';
	import { Minus, Plus } from '@lucide/svelte';
	let {
		title,
		children,
		open = $bindable(false)
	}: { title: string; children: import('svelte').Snippet; open?: boolean } = $props();
</script>

<BitsCollapsible.Root bind:open class="collapsible">
	<BitsCollapsible.Trigger class="collapsible-trigger">
		<span>{title}</span>
		<span aria-hidden="true"
			>{#if open}<Minus size={18} />{:else}<Plus size={18} />{/if}</span
		>
	</BitsCollapsible.Trigger>
	<BitsCollapsible.Content class="collapsible-content">{@render children()}</BitsCollapsible.Content
	>
</BitsCollapsible.Root>

<style>
	:global(.collapsible) {
		border: 2px solid var(--text);
	}
	:global(.collapsible-trigger) {
		display: flex;
		width: 100%;
		min-height: 3rem;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.65rem 0.9rem;
		border: 0;
		background: transparent;
		color: var(--text);
		font: inherit;
		font-weight: 700;
		text-align: left;
		cursor: pointer;
	}
	:global(.collapsible:has(.collapsible-trigger:hover)) {
		border-style: dashed;
	}
	:global(.collapsible-trigger:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: -5px;
	}
	:global(.collapsible-content) {
		padding: 0 0.9rem 0.9rem;
	}
</style>
