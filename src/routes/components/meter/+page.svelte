<script lang="ts">
 import Meter from '../../../lib/Meter.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Meter component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'value', type: 'number', required: true, defaultValue: '—', description: 'Current measurement.' },
  { name: 'max', type: 'number', required: false, defaultValue: '100', description: 'Maximum measurement.' },
  { name: 'label', type: 'string', required: false, defaultValue: 'Meter', description: 'Accessible label.' },
 ];
</script>
<ComponentDocs name="Meter" {summary} {props} usage={'<Meter value={72} max={100} label="Storage used" />'}>
  {#snippet example()}<Meter value={72} max={100} label="Storage used" />{/snippet}
</ComponentDocs>
