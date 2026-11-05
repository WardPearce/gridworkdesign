<script lang="ts">
 import ToggleGroup from '../../../lib/ToggleGroup.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'ToggleGroup component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'options', type: 'Option[]', required: true, defaultValue: '—', description: 'Entries contain value, label and optional disabled.' },
  { name: 'value', type: 'string', required: false, defaultValue: "''", description: 'Bindable selection.' },
  { name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: 'Disables group.' },
];
</script>
<ComponentDocs name="ToggleGroup" {summary} {props} usage={'<ToggleGroup options={options} bind:value />'}>
 {#snippet example()}<ToggleGroup options={options} bind:value />{/snippet}
</ComponentDocs>
