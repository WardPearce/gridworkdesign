<script lang="ts">
	import { NavigationMenu as BitsNav } from 'bits-ui';
	let { items }: { items: { label: string; href: string; description?: string }[] } = $props();
</script>

<BitsNav.Root class="nav-root">
	<BitsNav.List class="nav-list">
		{#each items as item (item.href)}
			<BitsNav.Item>
				<BitsNav.Link class="nav-link" href={item.href}>{item.label}</BitsNav.Link>
			</BitsNav.Item>
		{/each}
	</BitsNav.List>
</BitsNav.Root>

<style>
	:global(.nav-list) {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		margin: 0;
		padding: 0;
		list-style: none;
		border-bottom: 2px solid var(--text);
	}
	:global(.nav-link) {
		display: inline-flex;
		min-height: 2.75rem;
		align-items: center;
		padding: 0.5rem 0.875rem;
		color: var(--text);
		text-underline-offset: 0.2em;
		border: 1px solid var(--text);
		background: var(--background);
		box-shadow: var(--shadow-raised);
	}
	:global(
		.nav-link:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			)
	) {
		box-shadow: var(--shadow-hover);
	}
	:global(.nav-link:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
</style>
