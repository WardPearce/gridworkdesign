<script lang="ts">
 import DatePicker from '../../../lib/DatePicker.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'DatePicker component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'label', type: 'string', required: false, defaultValue: 'Choose date', description: 'Trigger label.' },
  { name: 'value', type: 'DateValue', required: false, defaultValue: 'undefined', description: 'Bindable selected date.' },
 ];
</script>
<ComponentDocs name="DatePicker" {summary} {props} usage={'<DatePicker />'}>
 {#snippet example()}<DatePicker />{/snippet}
</ComponentDocs>
