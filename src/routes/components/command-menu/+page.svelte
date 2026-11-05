<script lang="ts">
 import CommandMenu from '../../../lib/CommandMenu.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'CommandMenu component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'items', type: 'Item[]', required: true, defaultValue: '—', description: 'Items have value, label, optional keywords and disabled.' },
  { name: 'label', type: 'string', required: false, defaultValue: 'Command menu', description: 'Accessible label.' },
  { name: 'value', type: 'string', required: false, defaultValue: "''", description: 'Bindable selected value.' },
 ];
</script>
<ComponentDocs name="CommandMenu" {summary} {props} usage={'<CommandMenu items={[{ value: "new", label: "Create file" }, { value: "open", label: "Open file" }]} />'}>
  {#snippet example()}<CommandMenu items={[{ value: "new", label: "Create file" }, { value: "open", label: "Open file" }]} />{/snippet}
</ComponentDocs>
