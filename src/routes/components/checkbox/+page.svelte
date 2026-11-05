<script lang="ts">
 import Checkbox from '../../../lib/Checkbox.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Checkbox component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'label', type: 'string', required: true, defaultValue: '—', description: 'Visible label.' },
  { name: 'checked', type: 'boolean', required: false, defaultValue: 'false', description: 'Bindable checked state.' },
  { name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: 'Disables input.' },
  { name: 'name', type: 'string', required: false, defaultValue: '—', description: 'Form name.' },
  { name: 'value', type: 'string', required: false, defaultValue: 'on', description: 'Submitted value.' },
];
</script>
<ComponentDocs name="Checkbox" {summary} {props} usage={'<Checkbox label="Accept terms" bind:checked={accepted} />'}>
 {#snippet example()}<Checkbox label="Accept terms" bind:checked={accepted} />{/snippet}
</ComponentDocs>
