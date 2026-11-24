<script lang="ts">
 import Dialog from '../../../lib/Dialog.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Dialog component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'open', type: 'boolean', required: false, defaultValue: 'false', description: 'Bindable dialog visibility.' },
  { name: 'trigger', type: 'string | null', required: false, defaultValue: 'Open dialog', description: 'Trigger text; set to null to control the dialog without a built-in trigger.' },
  { name: 'title', type: 'string', required: true, defaultValue: '—', description: 'Dialog title.' },
  { name: 'description', type: 'string', required: false, defaultValue: '—', description: 'Optional description.' },
  { name: 'children', type: 'Snippet', required: false, defaultValue: '—', description: 'Dialog body.' },
];
</script>
<ComponentDocs name="Dialog" {summary} {props} usage='<Dialog title="Details" description="More information">Dialog content.</Dialog>'>
 {#snippet example()}<Dialog title="Details" description="More information">Dialog content.</Dialog>{/snippet}
</ComponentDocs>
