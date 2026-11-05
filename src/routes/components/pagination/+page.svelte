<script lang="ts">
 import Pagination from '../../../lib/Pagination.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Pagination component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'count', type: 'number', required: true, defaultValue: '—', description: 'Total item count.' },
  { name: 'perPage', type: 'number', required: false, defaultValue: '10', description: 'Items per page.' },
  { name: 'page', type: 'number', required: false, defaultValue: '1', description: 'Bindable current page.' },
];
</script>
<ComponentDocs name="Pagination" {summary} {props} usage={'<Pagination count={120} perPage={10} bind:page />'}>
 {#snippet example()}<Pagination count={120} perPage={10} bind:page />{/snippet}
</ComponentDocs>
