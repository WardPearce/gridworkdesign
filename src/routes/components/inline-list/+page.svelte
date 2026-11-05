<script lang="ts">
	import InlineList from '../../../lib/InlineList.svelte';
	import ComponentDocs, { type Prop } from '../../../lib/ComponentDocs.svelte';

	const technologies = ['Svelte', 'TypeScript', 'Vite', 'Bun'];
	const summary = 'Displays a responsive inline list with a configurable separator.';
	const props: Prop[] = [
		{
			name: 'items',
			type: 'readonly T[]',
			required: true,
			defaultValue: '—',
			description: 'Values to display. Items can be text or renderable Svelte content.'
		},
		{
			name: 'separator',
			type: 'string',
			required: false,
			defaultValue: '//',
			description: 'Text placed between adjacent items.'
		}
	];
</script>

<ComponentDocs
	name="InlineList"
	{summary}
	{props}
	usage={`<InlineList items={[${technologies}]} />`}
>
	{#snippet example()}
		<InlineList items={technologies} />
	{/snippet}
</ComponentDocs>
