<script lang="ts">
 import DateRangeField from '../../../lib/DateRangeField.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'DateRangeField component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'label', type: 'string', required: false, defaultValue: 'Date range', description: 'Field label.' },
  { name: 'value', type: 'DateRange', required: false, defaultValue: 'undefined', description: 'Bindable date range.' },
 ];
</script>
<ComponentDocs name="DateRangeField" {summary} {props} usage={'<DateRangeField />'}>
 {#snippet example()}<DateRangeField />{/snippet}
</ComponentDocs>
