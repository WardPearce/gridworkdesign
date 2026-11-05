<script lang="ts">
 import DropdownMenu from '../../../lib/DropdownMenu.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'DropdownMenu component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'label', type: 'string', required: false, defaultValue: 'Actions', description: 'Trigger label.' },
  { name: 'items', type: 'MenuItem[]', required: true, defaultValue: '—', description: 'Items have label and optional disabled/onSelect.' },
 ];
</script>
<ComponentDocs name="DropdownMenu" {summary} {props} usage={'<DropdownMenu label="Actions" items={[{ label: "Edit" }, { label: "Archive" }]} />'}>
  {#snippet example()}<DropdownMenu label="Actions" items={[{ label: "Edit" }, { label: "Archive" }]} />{/snippet}
</ComponentDocs>
