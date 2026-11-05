<script lang="ts">
 import ContextMenu from '../../../lib/ContextMenu.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'ContextMenu component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'items', type: 'MenuItem[]', required: true, defaultValue: '—', description: 'Items have label and optional disabled/onSelect.' },
  { name: 'children', type: 'Snippet', required: false, defaultValue: '—', description: 'Context menu trigger content.' },
 ];
</script>
<ComponentDocs name="ContextMenu" {summary} {props} usage={'<ContextMenu items={[{ label: "Copy" }, { label: "Paste" }]}><button>Right click here</button></ContextMenu>'}>
  {#snippet example()}<ContextMenu items={[{ label: "Copy" }, { label: "Paste" }]}><button>Right click here</button></ContextMenu>{/snippet}
</ComponentDocs>
