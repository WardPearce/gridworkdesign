<script module lang="ts">
	import type { Component } from 'svelte';
	export type NavItem = {
		label: string;
		href: string;
		icon?: Component<{ size?: number; 'aria-hidden'?: boolean | 'true' | 'false' }>;
		badge?: string | number;
		match?: 'exact' | 'prefix';
		onSelect?: () => void;
	};
</script>

<script lang="ts">
	import { Menu, X } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	let {
		items,
		currentPath = '',
		placement = 'top',
		sticky = false,
		label = 'Main navigation',
		brand,
		actions,
		class: className,
		...rest
	}: {
		items: NavItem[];
		currentPath?: string;
		placement?: 'top' | 'bottom';
		sticky?: boolean;
		label?: string;
		brand?: Snippet;
		actions?: Snippet;
	} & Omit<HTMLAttributes<HTMLElement>, 'children'> = $props();
	const navigationId = $props.id();
	const menuToggleId = `${navigationId}-toggle`;
	let menuOpen = $state(false);
	function handleWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && menuOpen) {
			menuOpen = false;
			document.getElementById(menuToggleId)?.focus();
		}
	}
	function active(item: NavItem) {
		const path = currentPath.replace(/\/$/, '') || '/';
		const href = item.href.replace(/\/$/, '') || '/';
		return (
			path === href || (item.match === 'prefix' && href !== '/' && path.startsWith(`${href}/`))
		);
	}
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<nav class={['navigation-bar', placement, { sticky }, className]} aria-label={label} {...rest}>
	{#if brand}<div class="brand">{@render brand()}</div>{/if}
	{#if placement === 'top'}
		<button
			id={menuToggleId}
			class="menu-toggle"
			type="button"
			aria-label={`${menuOpen ? 'Close' : 'Open'} ${label.toLowerCase()}`}
			aria-controls={navigationId}
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			{#if menuOpen}<X size={20} aria-hidden="true" />{:else}<Menu size={20} aria-hidden="true" />{/if}
		</button>
	{/if}
	<ul id={navigationId} class={{ open: menuOpen }}>
		{#each items as item (item.label)}
			<li>
				<!-- URLs belong to the consuming app and may be external. -->
				<a
					href={item.href}
					aria-current={active(item) ? 'page' : undefined}
					onclick={() => {
						item.onSelect?.();
						menuOpen = false;
					}}
				>
					{#if item.icon}<item.icon size={19} aria-hidden="true" />{/if}
					<span class="label">{item.label}</span>
					{#if item.badge !== undefined}<span class="badge">{item.badge}</span>{/if}
					<span class="indicator" aria-hidden="true"></span>
				</a>
			</li>
		{/each}
	</ul>
	{#if actions}<div class="actions">{@render actions()}</div>{/if}
</nav>

<style>
	.navigation-bar {
		min-width: 0;
		max-width: 100%;
		display: flex;
		align-items: center;
		gap: clamp(1rem, 3vw, 2.5rem);
		padding: 0.5rem clamp(1rem, 2vw, 1.5rem);
		background: var(--background);
		color: var(--text);
		border-bottom: 1px solid var(--border-subtle);
	}
	.sticky {
		position: sticky;
		z-index: 10;
	}
	.top.sticky {
		top: 0;
	}
	.bottom.sticky {
		bottom: 0;
	}
	.bottom {
		padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
	}
	.top {
		padding-top: max(0.75rem, env(safe-area-inset-top));
	}
	.brand,
	.actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex: 0 0 auto;
	}
	.brand {
		white-space: nowrap;
	}
	ul {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		gap: clamp(0.25rem, 1vw, 0.75rem);
		min-width: 0;
		margin: 0;
		padding: 0;
		overflow-x: auto;
		list-style: none;
		scrollbar-width: thin;
	}
	li {
		display: flex;
		flex: 0 0 auto;
	}
	a {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		min-height: 2.5rem;
		padding: 0.55rem 0.75rem;
		border: 1px solid transparent;
		color: inherit;
		background: transparent;
		font: inherit;
		font-size: 0.875rem;
		text-decoration: none;
		white-space: nowrap;
		transition:
			background-color 140ms ease,
			color 140ms ease;
	}
	a:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not([data-disabled] *) {
		background: var(--surface-subtle);
	}
	a:focus-visible {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	a[aria-current='page'] {
		color: var(--foreground);
		font-weight: 700;
	}
	.indicator {
		position: absolute;
		inset-inline: 0.75rem;
		bottom: 0.1rem;
		height: 2px;
		background: currentColor;
		transform: scaleX(0);
		transition: transform 140ms ease;
	}
	a[aria-current='page'] .indicator {
		transform: scaleX(1);
	}
	.badge {
		padding: 0.1rem 0.3rem;
		border: 1px solid currentColor;
		font-size: 0.7rem;
		box-shadow: var(--shadow-raised);
	}
	.menu-toggle {
		display: none;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		min-height: 2.75rem;
		padding: 0.5rem;
		border: 1px solid var(--text);
		background: var(--background);
		color: inherit;
		box-shadow: var(--shadow-raised);
		cursor: pointer;
	}
	.menu-toggle:hover {
		box-shadow: var(--shadow-hover);
	}
	.menu-toggle:active {
		box-shadow: var(--shadow-inset);
	}
	.menu-toggle:focus-visible {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	.bottom ul {
		justify-content: space-evenly;
	}
	.bottom li {
		flex: 1 0 auto;
	}
	.bottom a {
		flex: 1;
		flex-direction: column;
		gap: 0.3rem;
	}
	.bottom .indicator {
		position: absolute;
		top: 0.25rem;
		right: 0.3rem;
		inset-inline: auto;
		bottom: auto;
		width: 0.3rem;
		height: 0.3rem;
		border-radius: 50%;
		transform: none;
	}
	.bottom .badge {
		position: absolute;
		top: 0.2rem;
		right: 0.6rem;
	}
	@media (max-width: 760px) {
		.navigation-bar.top {
			position: relative;
			z-index: 11;
			flex-wrap: nowrap;
			gap: 0.5rem;
			padding-inline: 0.75rem;
		}
		.top .brand {
			order: 0;
		}
		.top .actions {
			order: 1;
			margin-left: auto;
		}
		.top .menu-toggle {
			display: inline-flex;
			order: 2;
			flex: 0 0 auto;
		}
		.top ul {
			position: absolute;
			top: 100%;
			left: 0;
			z-index: 12;
			display: none;
			flex-direction: column;
			align-items: stretch;
			gap: 0.25rem;
			width: 100%;
			max-height: min(70dvh, 24rem);
			margin: 0;
			padding: 0.5rem;
			overflow-y: auto;
			border: 2px solid var(--text);
			background: var(--background);
			box-shadow: var(--shadow-raised);
		}
		.top ul.open {
			display: flex;
		}
		.top li {
			flex: 0 0 auto;
			width: 100%;
		}
		.top a {
			width: 100%;
			padding-inline: 0.65rem;
			font-size: 0.75rem;
			justify-content: flex-start;
			white-space: normal;
		}
		.top .indicator {
			inset-inline: auto 0.65rem;
			bottom: 0.7rem;
			width: 2px;
			height: auto;
			transform: scaleY(0);
		}
		.top a[aria-current='page'] .indicator {
			transform: scaleY(1);
		}
	}
	@media (max-width: 600px) {
		.navigation-bar.bottom {
			gap: 0.25rem;
			padding-inline: 0.5rem;
		}
		.bottom ul {
			flex-basis: 100%;
		}
		.bottom a {
			font-size: 0.75rem;
			padding-inline: 0.5rem;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		a,
		.indicator {
			transition: none;
		}
	}
</style>
