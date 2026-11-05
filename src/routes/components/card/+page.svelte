<script lang="ts">
	import Card from '../../../lib/Card.svelte';
	import ComponentDocs, { type Prop } from '../../../lib/ComponentDocs.svelte';

	const summary = 'A flat, outlined content panel with composable header, body, and footer snippets.';
	const props: Prop[] = [
		{ name: 'children', type: 'Snippet', required: true, description: 'Card body content.' },
		{ name: 'header', type: 'Snippet', required: false, description: 'Optional header content.' },
		{ name: 'footer', type: 'Snippet', required: false, description: 'Optional footer content.' },
		{ name: 'alternate', type: 'boolean', required: false, defaultValue: 'false', description: 'Uses the dark alternate surface with inverse text.' },
		{ name: 'class', type: 'string', required: false, defaultValue: "''", description: 'Additional class name for the card.' }
	];
</script>

<ComponentDocs
	name="Card"
	{summary}
	{props}
	usage={`<Card>\n  {#snippet header()}Profile{/snippet}\n  <p>Account details and settings.</p>\n  {#snippet footer()}Last updated today{/snippet}\n</Card>`}
>
	{#snippet example()}
		<Card alternate>
			{#snippet header()}Profile{/snippet}
			<p>Account details and settings.</p>
			{#snippet footer()}Last updated today{/snippet}
		</Card>
	{/snippet}
</ComponentDocs>
