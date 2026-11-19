<script lang="ts">
 /* eslint-disable svelte/no-navigation-without-resolve -- Consumer-owned URLs can be external. */
	import { ChevronLeft, ChevronRight, Menu, Search, X } from '@lucide/svelte';
	let {
		items,
		title = 'Navigation',
		currentPath = '',
		collapsible = true,
		collapsed = $bindable(false),
		hideWhenCollapsed = false,
		searchable = true
	}: {
		items: { label: string; href: string }[];
		title?: string;
		currentPath?: string;
		collapsible?: boolean;
		collapsed?: boolean;
		hideWhenCollapsed?: boolean;
		searchable?: boolean;
	} = $props();
	let query = $state('');
	let mobileOpen = $state(false);
	const navigationId = $props.id();
	const filtered = $derived(
		items.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase()))
	);
	const compact = $derived(collapsible && collapsed);
</script>

<aside class={['sidebar', { compact }]} aria-label={title}>
	<div class="heading">
		<div class="heading-label">
			<span class="indicator" aria-hidden="true"></span><strong>{title}</strong><span class="count"
				>{items.length}</span
			>
		</div>
		{#if collapsible}<button
				class="collapse"
				type="button"
				aria-label={compact ? 'Expand sidebar' : 'Collapse sidebar'}
				aria-expanded={!compact}
				aria-controls={navigationId}
				onclick={() => (collapsed = !collapsed)}
			>
				{#if compact}<ChevronRight size={18} />{:else}<ChevronLeft size={18} />{/if}
			</button>{/if}
		<button
			class="mobile-toggle"
			type="button"
			aria-expanded={mobileOpen}
			aria-controls={navigationId}
			onclick={() => (mobileOpen = !mobileOpen)}><Menu size={18} /> Browse</button
		>
	</div>
	<div
		id={navigationId}
		class={['navigation', { 'mobile-open': mobileOpen, tucked: compact && hideWhenCollapsed }]}
	>
		{#if searchable}<div class="filter">
				<Search size={15} aria-hidden="true" />
				<input
					aria-label={`Filter ${title.toLowerCase()}`}
					type="search"
					placeholder="Find a component…"
					bind:value={query}
				/>
				{#if query}<button type="button" aria-label="Clear filter" onclick={() => (query = '')}
						><X size={14} /></button
					>{/if}
			</div>{/if}
		<nav aria-label={title}>
			{#each filtered as item (item.href)}
				<!-- Library links may be external; callers supply resolved application URLs. -->
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a
					href={item.href}
					aria-current={currentPath === item.href ? 'page' : undefined}
					onclick={() => (mobileOpen = false)}
				>
					<span class="link-light" aria-hidden="true"></span><span>{item.label}</span><ChevronRight
						class="link-arrow"
						size={14}
						aria-hidden="true"
					/>
				</a>
			{:else}<p class="empty" role="status">No matches for “{query}”.</p>{/each}
		</nav>
	</div>
</aside>

<style>
	.sidebar {
		position: sticky;
		top: 0;
		align-self: flex-start;
		display: flex;
		flex-direction: column;
		flex: 0 0 18rem;
		width: 18rem;
		max-height: 100dvh;
		padding: 1rem;
		border-right: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: inset -3px 0 6px color-mix(in srgb, var(--text) 12%, transparent);
	}
	.heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		padding: 0.25rem 0 1rem;
	}
	.heading-label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		min-width: 0;
	}
	.heading strong {
		overflow-wrap: anywhere;
		font-size: 0.95rem;
	}
	.count {
		font-size: 0.7rem;
	}
	.indicator,
	.link-light {
		flex: 0 0 auto;
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 50%;
		background: var(--light);
		box-shadow: var(--shadow-inset);
	}
	.indicator {
		background: var(--text);
	}
	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 2.75rem;
		min-height: 2.75rem;
		padding: 0.5rem;
		border: 2px solid var(--text);
		background: var(--background);
		color: inherit;
		font: inherit;
		cursor: pointer;
		box-shadow: var(--shadow-raised);
	}
	button:active {
		box-shadow: var(--shadow-inset);
	}
	button:hover {
		border-style: dashed;
	}
	button:focus-visible,
	a:focus-visible {
		outline: var(--focus-ring);
		outline-offset: 3px;
	}
	.navigation {
		min-height: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.filter {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.2rem 0.6rem;
		min-height: 2.75rem;
		border: 2px solid var(--text);
		box-shadow: var(--shadow-inset);
	}
	.filter:focus-within {
		outline: var(--focus-ring);
		outline-offset: 3px;
	}
	input {
		width: 100%;
		min-width: 0;
		border: 0;
		outline: 0;
		background: transparent;
		color: inherit;
		font: inherit;
		font-size: 0.8rem;
	}
	input::placeholder {
		color: inherit;
		opacity: 1;
	}
	input::-webkit-search-cancel-button {
		display: none;
	}
	.filter button {
		min-width: 1.5rem;
		min-height: 2rem;
		padding: 0;
		border: 0;
		box-shadow: none;
	}
	nav {
		display: grid;
		gap: 0.5rem;
		min-height: 0;
		overflow-y: auto;
		overscroll-behavior: contain;
		padding: 0.3rem 0.4rem 0.7rem 0.2rem;
		scrollbar-gutter: stable;
	}
	a {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		min-height: 2.75rem;
		padding: 0.6rem 0.7rem;
		border: 1px solid color-mix(in srgb, var(--text) 50%, var(--background));
		background: var(--background);
		color: inherit;
		text-decoration: none;
		font-size: 0.8rem;
		box-shadow: var(--shadow-raised);
	}
	a span:nth-child(2) {
		flex: 1;
		overflow-wrap: anywhere;
	}
	a:hover {
		border-color: var(--text);
		border-style: dashed;
	}
	a[aria-current='page'] {
		background: var(--background-darker);
		color: var(--white);
		border-color: var(--text);
		box-shadow: var(--shadow-inset);
	}
	a[aria-current='page'] .link-light {
		background: var(--white);
		box-shadow: 0 0 5px color-mix(in srgb, var(--white) 45%, transparent);
	}
	.empty {
		margin: 0;
		padding: 1rem 0.25rem;
		font-size: 0.8rem;
		overflow-wrap: anywhere;
	}
	.compact {
		flex-basis: 13rem;
		width: 13rem;
		padding: 0.75rem;
	}
	.compact .heading-label .count,
	.compact .heading-label .indicator {
		display: none;
	}
	.tucked {
		display: none;
	}
	.compact:has(.tucked) {
		flex-basis: 4.5rem;
		width: 4.5rem;
	}
	.compact:has(.tucked) .heading-label {
		display: none;
	}
	.mobile-toggle {
		display: none;
		gap: 0.5rem;
	}
	@media (max-width: 760px) {
		.sidebar,
		.sidebar.compact,
		.sidebar.compact:has(.tucked) {
			position: relative;
			width: 100%;
			flex-basis: auto;
			max-height: none;
			padding: 0.75rem 1rem;
			border-right: 0;
			border-bottom: 2px solid var(--text);
		}
		.heading {
			padding: 0;
		}
		.collapse {
			display: none;
		}
		.mobile-toggle {
			display: inline-flex;
		}
		.compact:has(.tucked) .heading-label {
			display: flex;
		}
		.navigation {
			display: none;
			margin-top: 1rem;
		}
		.navigation.mobile-open {
			display: flex;
		}
		nav {
			max-height: 55dvh;
		}
	}
</style>
