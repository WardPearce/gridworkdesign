<script lang="ts">
 import PinInput from '../../../lib/PinInput.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'PinInput component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'label', type: 'string', required: true, defaultValue: '—', description: 'Field label.' },
  { name: 'value', type: 'string', required: false, defaultValue: "''", description: 'Bindable entered value.' },
  { name: 'length', type: 'number', required: false, defaultValue: '4', description: 'Character count.' },
  { name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: 'Disables input.' },
  { name: 'onComplete', type: '(value: string) => void', required: false, defaultValue: '—', description: 'Called when entry is complete.' },
 ];
</script>
<ComponentDocs name="PinInput" {summary} {props} usage={'<PinInput label="Verification code" />'}>
  {#snippet example()}<PinInput label="Verification code" />{/snippet}
</ComponentDocs>
