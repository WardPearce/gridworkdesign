<script lang="ts">
 import Popover from '../../../lib/Popover.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Popover component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'trigger', type: 'string', required: false, defaultValue: 'Show details', description: 'Trigger label.' },
  { name: 'children', type: 'Snippet', required: false, defaultValue: '—', description: 'Popover contents.' },
 ];
</script>
<ComponentDocs name="Popover" {summary} {props} usage={'<Popover />'}>
 {#snippet example()}<Popover />{/snippet}
</ComponentDocs>
