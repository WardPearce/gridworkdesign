<script lang="ts">
 import DateRangePicker from '../../../lib/DateRangePicker.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'DateRangePicker component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'label', type: 'string', required: false, defaultValue: 'Choose dates', description: 'Trigger label.' },
  { name: 'value', type: 'DateRange', required: false, defaultValue: 'undefined', description: 'Bindable date range.' },
 ];
</script>
<ComponentDocs name="DateRangePicker" {summary} {props} usage={'<DateRangePicker />'}>
 {#snippet example()}<DateRangePicker />{/snippet}
</ComponentDocs>
