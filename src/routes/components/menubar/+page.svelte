<script lang="ts">
 import Menubar from '../../../lib/Menubar.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Menubar component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'menus', type: 'Menu[]', required: true, defaultValue: '—', description: 'Menus have a label and item list; items support label, disabled, onSelect.' },
 ];
</script>
<ComponentDocs name="Menubar" {summary} {props} usage={'<Menubar menus={[{ label: "File", items: [{ label: "New" }, { label: "Open" }] }]} />'}>
  {#snippet example()}<Menubar menus={[{ label: "File", items: [{ label: "New" }, { label: "Open" }] }]} />{/snippet}
</ComponentDocs>
