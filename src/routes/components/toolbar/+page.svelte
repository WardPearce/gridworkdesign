<script lang="ts">
 import Toolbar from '../../../lib/Toolbar.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Toolbar component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'actions', type: 'ToolbarAction[]', required: true, defaultValue: '—', description: 'Actions contain label and optional disabled, pressed and onClick.' },
 ];
</script>
<ComponentDocs name="Toolbar" {summary} {props} usage={'<Toolbar actions={[{ label: "Bold" }, { label: "Italic" }]} />'}>
  {#snippet example()}<Toolbar actions={[{ label: "Bold" }, { label: "Italic" }]} />{/snippet}
</ComponentDocs>
