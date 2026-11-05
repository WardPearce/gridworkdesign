<script lang="ts">
 import AlertDialog from '../../../lib/AlertDialog.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'AlertDialog component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'trigger', type: 'string', required: false, defaultValue: 'Delete item', description: 'Trigger text.' },
  { name: 'title', type: 'string', required: false, defaultValue: 'Confirm action', description: 'Heading.' },
  { name: 'description', type: 'string', required: true, defaultValue: '—', description: 'Confirmation details.' },
  { name: 'confirmLabel', type: 'string', required: false, defaultValue: 'Continue', description: 'Action label.' },
  { name: 'onConfirm', type: '() => void', required: false, defaultValue: '—', description: 'Confirmation callback.' },
];
</script>
<ComponentDocs name="AlertDialog" {summary} {props} usage={'<AlertDialog description="This cannot be undone." onConfirm={removeItem} />'}>
 {#snippet example()}<AlertDialog description="This cannot be undone." onConfirm={removeItem} />{/snippet}
</ComponentDocs>
