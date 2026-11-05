<script lang="ts">
 import Menu from '../../../lib/Menu.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Menu component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'label', type: 'string', required: false, defaultValue: 'Menu', description: 'Trigger label.' },
  { name: 'items', type: 'MenuItem[]', required: true, defaultValue: '—', description: 'Items have label and optional disabled/onSelect.' },
 ];
</script>
<ComponentDocs name="Menu" {summary} {props} usage={'<Menu label="Menu" items={[{ label: "Edit" }, { label: "Share" }]} />'}>
  {#snippet example()}<Menu label="Menu" items={[{ label: "Edit" }, { label: "Share" }]} />{/snippet}
</ComponentDocs>
