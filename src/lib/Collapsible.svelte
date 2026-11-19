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
		box-shadow: var(--shadow-raised);
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
		box-shadow: var(--shadow-raised);
	}
	:global(
		.collapsible:has(
			.collapsible-trigger:hover:not(:disabled):not([data-disabled]):not(
					[aria-disabled='true']
				):not([data-disabled] *)
		)
	) {
		box-shadow: var(--shadow-hover);
	}
	:global(.collapsible-trigger:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	:global(.collapsible-content) {
		padding: 0 0.9rem 0.9rem;
	}

	:global(.collapsible-trigger:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}
</style>
