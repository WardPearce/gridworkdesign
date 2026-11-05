<script lang="ts">
 import Calendar from '../../../lib/Calendar.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Calendar component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'value', type: 'DateValue', required: false, defaultValue: 'undefined', description: 'Bindable selected date.' },
  { name: 'label', type: 'string', required: false, defaultValue: 'Choose a date', description: 'Accessible label.' },
 ];
</script>
<ComponentDocs name="Calendar" {summary} {props} usage={'<Calendar />'}>
 {#snippet example()}<Calendar />{/snippet}
</ComponentDocs>
