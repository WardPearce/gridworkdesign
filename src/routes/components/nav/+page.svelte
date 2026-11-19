<script lang="ts">
	import { House, Search, Inbox, Settings } from '@lucide/svelte';
	import Nav from '../../../lib/Nav.svelte';
	import ComponentDocs, { type Prop } from '../../../lib/ComponentDocs.svelte';
	const items = [
		{ label: 'Home', href: '#home', icon: House },
		{ label: 'Discover', href: '#discover', icon: Search },
		{ label: 'Inbox', href: '#inbox', icon: Inbox, badge: 3 },
		{ label: 'Settings', href: '#settings', icon: Settings }
	];
	const props: Prop[] = [
		{
			name: 'items',
			type: 'NavItem[]',
			required: true,
			description:
				'Links with labels, optional Lucide-compatible icons, badges, exact/prefix matching, and selection callbacks.'
		},
		{
			name: 'currentPath',
			type: 'string',
			defaultValue: "''",
			description: 'Active URL path; pass the router pathname for page links.'
		},
		{
			name: 'placement',
			type: "'top' | 'bottom'",
			defaultValue: 'top',
			description: 'Horizontal top bar or stacked bottom navigation.'
		},
		{
			name: 'sticky',
			type: 'boolean',
			defaultValue: 'false',
			description:
				'Stick to the chosen edge within its scroll container. Render a bottom bar after page content.'
		},
		{
			name: 'label',
			type: 'string',
			defaultValue: 'Main navigation',
			description: 'Accessible landmark name; use distinct names for multiple navs.'
		},
		{
			name: 'NavItem.onSelect',
			type: '() => void',
			description: 'Optional callback for selecting a link, useful for local filters and view changes.'
		},
		{ name: 'brand / actions', type: 'Snippet', description: 'Optional branding and action areas.' }
	];
</script>

<ComponentDocs
	name="Nav"
	summary="Top navigation collapses into an accessible mobile dropdown; bottom navigation keeps safe-area spacing."
	{props}
	usage={'<Nav {items} currentPath={page.url.pathname} placement="bottom" sticky />'}
>
	{#snippet example()}
		<div class="examples">
			<h3>Top navigation</h3>
			<Nav {items} currentPath="#home" label="Top navigation example">
				{#snippet brand()}<strong>GRIDWORK</strong>{/snippet}
			</Nav>
			<div class="screen">
				<p>Your content goes here.</p>
				<p>Use the same links in either placement.</p>
			</div>
			<h3>Bottom navigation</h3>
			<Nav {items} currentPath="#inbox" placement="bottom" label="Bottom navigation example" />
		</div>
	{/snippet}
</ComponentDocs>

<style>
	.examples {
		width: 100%;
		min-width: 0;
		display: grid;
		gap: 1rem;
	}
	h3 {
		margin: 0;
		font-size: 0.875rem;
	}
	.screen {
		min-width: 0;
		overflow-wrap: anywhere;
		display: grid;
		place-content: center;
		min-height: 9rem;
		padding: 1rem;
		border: 1px dashed var(--text);
		text-align: center;
	}
	.screen p {
		margin: 0.25rem;
	}
</style>
