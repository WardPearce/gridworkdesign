<script lang="ts">
	import ComponentDocs, { type Prop } from '../../../lib/ComponentDocs.svelte';
	import { Card, Grid } from '../../../lib/index';

	const summary =
		'A responsive CSS grid for arranging content with a minimum column width and consistent spacing.';
	const props: Prop[] = [
		{
			name: 'children',
			type: 'Snippet',
			required: true,
			description: 'Grid items.'
		},
		{
			name: 'minColumnWidth',
			type: 'string',
			required: false,
			defaultValue: "'17rem'",
			description: 'Minimum width for each column before the grid wraps.'
		},
		{
			name: 'gap',
			type: "'sm' | 'md' | 'lg'",
			required: false,
			defaultValue: "'md'",
			description: 'Spacing between grid items.'
		},
		{
			name: 'class',
			type: 'string',
			required: false,
			defaultValue: "''",
			description: 'Additional class name for the grid container.'
		}
	];
</script>

<ComponentDocs
	name="Grid"
	{summary}
	{props}
	usage={`<Grid minColumnWidth="14rem" gap="md">
  <Card><p>First item</p></Card>
  <Card><p>Second item</p></Card>
  <Card><p>Third item</p></Card>
</Grid>`}
>
	{#snippet example()}
		<Grid minColumnWidth="12rem">
			<Card><p>First item</p></Card>
			<Card><p>Second item</p></Card>
			<Card><p>Third item</p></Card>
		</Grid>
	{/snippet}
</ComponentDocs>
