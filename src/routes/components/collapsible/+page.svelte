<script lang="ts">
 import Collapsible from '../../../lib/Collapsible.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Collapsible component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'title', type: 'string', required: true, defaultValue: '—', description: 'Trigger label.' },
  { name: 'open', type: 'boolean', required: false, defaultValue: 'false', description: 'Bindable open state.' },
  { name: 'children', type: 'Snippet', required: true, defaultValue: '—', description: 'Expandable content.' },
];
</script>
<ComponentDocs name="Collapsible" {summary} {props} usage={'<Collapsible title="Details"><p>Additional information.</p></Collapsible>'}>
 {#snippet example()}<Collapsible title="Details"><p>Additional information.</p></Collapsible>{/snippet}
</ComponentDocs>
