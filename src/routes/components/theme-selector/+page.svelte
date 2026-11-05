<script lang="ts">
 import ThemeSelector from '../../../lib/ThemeSelector.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'ThemeSelector component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'value', type: 'Theme', required: false, defaultValue: 'Gridwork', description: 'Bindable theme choice.' },
  { name: 'name', type: 'string', required: false, defaultValue: '—', description: 'Form name.' },
];
</script>
<ComponentDocs name="ThemeSelector" {summary} {props} usage={'<ThemeSelector />'}>
 {#snippet example()}<ThemeSelector />{/snippet}
</ComponentDocs>
