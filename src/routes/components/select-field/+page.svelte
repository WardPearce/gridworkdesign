<script lang="ts">
 import SelectField from '../../../lib/SelectField.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'SelectField component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'label', type: 'string', required: true, defaultValue: '—', description: 'Field label.' },
  { name: 'options', type: 'Option[]', required: true, defaultValue: '—', description: 'Entries contain value, label, optional disabled.' },
  { name: 'value', type: 'string', required: false, defaultValue: "''", description: 'Bindable selection.' },
  { name: 'placeholder', type: 'string', required: false, defaultValue: 'Choose an option', description: 'Empty state.' },
  { name: 'name', type: 'string', required: false, defaultValue: '—', description: 'Form name.' },
];
</script>
<ComponentDocs name="SelectField" {summary} {props} usage={'<SelectField label="Region" options={options} bind:value />'}>
 {#snippet example()}<SelectField label="Region" options={options} bind:value />{/snippet}
</ComponentDocs>
