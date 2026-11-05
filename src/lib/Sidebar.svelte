<script lang="ts">
	import { ChevronLeft, ChevronRight, Menu } from '@lucide/svelte';
	let collapsed = $state(false);
	let {
		items,
		title = 'Navigation',
		currentPath = '',
		collapsible = true,
		hideWhenCollapsed = false
	}: {
		items: { label: string; href: string }[];
		title?: string;
		currentPath?: string;
		collapsible?: boolean;
		hideWhenCollapsed?: boolean;
	} = $props();
</script>

<aside class="docs-sidebar" class:collapsed={collapsed && collapsible} class:hidden={collapsed && collapsible && hideWhenCollapsed}>
	<div class="sidebar-heading">
		<span class="sidebar-title">{title}</span>
		{#if collapsible}<button
				class="collapse-toggle"
				type="button"
				aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
				onclick={() => (collapsed = !collapsed)}
			>
				{#if collapsed}<ChevronRight size={18} />{:else}<ChevronLeft size={18} />{/if}
			</button>{/if}
	</div>
	<details class="mobile-nav">
		<summary><Menu size={16} /> Browse {title.toLowerCase()}</summary>
		<nav aria-label="Component documentation">
			{#each items as item (item.href)}
				<a href={item.href} aria-current={currentPath === item.href ? 'page' : undefined}
					>{item.label}</a
				>
			{/each}
		</nav>
	</details>
	<nav class="desktop-nav" aria-label="Component documentation">
		{#each items as item (item.href)}
			<a
				href={item.href}
				aria-current={currentPath === item.href ? 'page' : undefined}
				title={collapsed ? item.label : undefined}>{item.label}</a
			>
		{/each}
	</nav>
</aside>

<style>
	.docs-sidebar {
		box-sizing: border-box;
		flex: 0 0 15rem;
		width: 15rem;
		padding: 1rem;
		border-right: 2px solid var(--text);
		color: var(--text);
		transition:
			width 160ms ease,
			flex-basis 160ms ease;
	}
	.sidebar-heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}
	.sidebar-title {
		color: inherit;
		font-size: 1.1rem;
		font-weight: 700;
		text-decoration: none;
	}
	.collapse-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 2.25rem;
		min-height: 2.25rem;
		border: 1px solid var(--text);
		background: transparent;
		color: inherit;
		cursor: pointer;
	}
	.desktop-nav {
		display: grid;
		gap: 0.15rem;
	}
	.desktop-nav a,
	.mobile-nav nav a {
		display: block;
		padding: 0.5rem 0.6rem;
		color: inherit;
		text-decoration: none;
	}
	.desktop-nav a:hover,
	.mobile-nav nav a:hover {
		text-decoration: underline;
	}
	.desktop-nav a[aria-current='page'],
	.mobile-nav nav a[aria-current='page'] {
		background: var(--background-darker);
		color: var(--white);
	}
	.mobile-nav {
		display: none;
	}
	.collapsed {
		flex-basis: 4rem;
		width: 4rem;
		padding-inline: 0.5rem;
	}
	.collapsed .sidebar-heading {
		justify-content: center;
	}
	.collapsed .sidebar-title {
		display: none;
	}
	.collapsed .desktop-nav a {
		overflow: hidden;
		padding-inline: 0.55rem;
		white-space: nowrap;
		font-size: 0;
	}
	.collapsed .desktop-nav a::first-letter {
		font-size: 1rem;
	}
	@media (max-width: 760px) {
		.docs-sidebar {
			width: 100%;
			flex-basis: auto;
			padding: 0.5rem 1rem;
			border-right: 0;
			border-bottom: 2px solid var(--text);
		}
		.sidebar-heading,
		.desktop-nav {
			display: none;
		}
		.mobile-nav {
			display: block;
		}
		.mobile-nav summary {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			min-height: 2.5rem;
			cursor: pointer;
			font-weight: 700;
			list-style: none;
		}
		.mobile-nav summary::-webkit-details-marker {
			display: none;
		}
		.mobile-nav nav {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
			max-height: 55vh;
			overflow: auto;
			padding-block: 0.5rem;
		}
	}
</style>
