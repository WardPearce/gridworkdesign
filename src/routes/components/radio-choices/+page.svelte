<script lang="ts">
 import RadioChoices from '../../../lib/RadioChoices.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'RadioChoices component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'choices', type: 'Choice[]', required: true, defaultValue: '—', description: 'Entries contain value, label, optional disabled.' },
  { name: 'value', type: 'string', required: false, defaultValue: "''", description: 'Bindable selection.' },
  { name: 'name', type: 'string', required: false, defaultValue: '—', description: 'Form name.' },
  { name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: 'Disables group.' },
];
</script>
<ComponentDocs name="RadioChoices" {summary} {props} usage={'<RadioChoices choices={choices} bind:value />'}>
 {#snippet example()}<RadioChoices choices={choices} bind:value />{/snippet}
</ComponentDocs>
