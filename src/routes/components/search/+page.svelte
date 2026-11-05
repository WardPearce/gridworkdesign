<script lang="ts">
	import Search from '../../../lib/Search.svelte';
	import ComponentDocs, { type Prop } from '../../../lib/ComponentDocs.svelte';
	let query = $state('');
	const summary = 'Search input built on Input, with optional native suggestion autofill.';
	const props: Prop[] = [
		{ name: 'suggestions', type: 'string[]', required: false, defaultValue: '—', description: 'Optional native datalist suggestions shown as the user types.' },
		{ name: '...attributes', type: 'HTMLInputAttributes', required: false, defaultValue: '—', description: 'Native search input attributes such as value, placeholder, name, and autocomplete.' }
	];
</script>
<ComponentDocs name="Search" {summary} {props} usage={'<Search bind:value={query} placeholder="Search" suggestions={["Calendar", "Combobox"]} />'}>
	{#snippet example()}
		<Search bind:value={query} placeholder="Search components" suggestions={['Calendar', 'Combobox field', 'Date picker', 'Input']} />
	{/snippet}
</ComponentDocs>
