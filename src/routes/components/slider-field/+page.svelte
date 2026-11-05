<script lang="ts">
 import SliderField from '../../../lib/SliderField.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'SliderField component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'label', type: 'string', required: true, defaultValue: '—', description: 'Accessible label.' },
  { name: 'value', type: 'number', required: false, defaultValue: '25', description: 'Bindable number.' },
  { name: 'min', type: 'number', required: false, defaultValue: '0', description: 'Minimum.' },
  { name: 'max', type: 'number', required: false, defaultValue: '100', description: 'Maximum.' },
  { name: 'step', type: 'number', required: false, defaultValue: '1', description: 'Increment.' },
  { name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: 'Disables control.' },
];
</script>
<ComponentDocs name="SliderField" {summary} {props} usage={'<SliderField label="Volume" bind:value={sliderValue} min={0} max={100} step={5} />'}>
 {#snippet example()}<SliderField label="Volume" bind:value={sliderValue} min={0} max={100} step={5} />{/snippet}
</ComponentDocs>
