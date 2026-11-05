<script lang="ts">
 import Label from '../../../lib/Label.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Label component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'children', type: 'Snippet', required: true, defaultValue: '—', description: 'Label contents.' },
  { name: 'for', type: 'string', required: false, defaultValue: '—', description: 'Associated control id; Bits UI label props are also forwarded.' },
 ];
</script>
<ComponentDocs name="Label" {summary} {props} usage={'<Label for="demo-input">Name</Label>'}>
  {#snippet example()}<Label for="demo-input">Name</Label>{/snippet}
</ComponentDocs>
