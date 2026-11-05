<script lang="ts">
 import Tooltip from '../../../lib/Tooltip.svelte';
 import Button from '../../../lib/Button.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Tooltip component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'label', type: 'string', required: true, defaultValue: '—', description: 'Tooltip content.' },
  { name: 'children', type: 'Snippet', required: true, defaultValue: '—', description: 'Trigger contents.' },
];
</script>
<ComponentDocs name="Tooltip" {summary} {props} usage={'<Tooltip label="More information"><Button>Help</Button></Tooltip>'}>
 {#snippet example()}<Tooltip label="More information"><Button>Help</Button></Tooltip>{/snippet}
</ComponentDocs>
