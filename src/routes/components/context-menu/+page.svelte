<script lang="ts">
	import Button from '../../../lib/Button.svelte';
	import ContextMenu from '../../../lib/ContextMenu.svelte';
	import ComponentDocs, { type Prop } from '../../../lib/ComponentDocs.svelte';
	const summary = 'ContextMenu component with accessible behavior and configurable props';
	const props: Prop[] = [
		{
			name: 'items',
			type: 'MenuItem[]',
			required: true,
			defaultValue: '—',
			description: 'Items have label and optional disabled/onSelect.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '—',
			description: 'Context menu trigger content.'
		}
	];
</script>

<ComponentDocs
	name="ContextMenu"
	{summary}
	{props}
	usage={'<ContextMenu items={[{ label: "Copy" }, { label: "Paste" }]}><Button>Right click here</Button></ContextMenu>'}
>
	{#snippet example()}<ContextMenu items={[{ label: 'Copy' }, { label: 'Paste' }]}
			><Button>Right click here</Button></ContextMenu
		>{/snippet}
</ComponentDocs>
