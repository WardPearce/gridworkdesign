<script lang="ts">
	import Sidebar from '../../../lib/Sidebar.svelte';
	import ComponentDocs, { type Prop } from '../../../lib/ComponentDocs.svelte';
	const items = [
		{ label: 'Overview', href: '/docs/overview' },
		{ label: 'Getting started', href: '/docs/getting-started' },
		{ label: 'Components', href: '/docs/components' }
	];
	const summary = 'Responsive navigation sidebar with optional desktop collapsing and a compact mobile menu.';
	const props: Prop[] = [
		{ name: 'items', type: '{ label: string; href: string }[]', required: true, description: 'Links displayed in the sidebar.' },
		{ name: 'title', type: 'string', required: false, defaultValue: 'Navigation', description: 'Sidebar heading and mobile menu label.' },
		{ name: 'currentPath', type: 'string', required: false, defaultValue: "''", description: 'Current pathname; matching item receives aria-current="page".' },
		{ name: 'collapsible', type: 'boolean', required: false, defaultValue: 'true', description: 'Show the desktop collapse control.' }
	];
</script>
<ComponentDocs name="Sidebar" {summary} {props} usage={'<Sidebar title="Docs" {items} currentPath="/docs/overview" />'}>
	{#snippet example()}
		<div style="height: 18rem; border: 1px solid var(--text); overflow: auto;">
			<Sidebar title="Docs" {items} currentPath="/docs/overview" />
		</div>
	{/snippet}
</ComponentDocs>
