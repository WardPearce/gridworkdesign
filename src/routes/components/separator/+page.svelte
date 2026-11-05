<script lang="ts">
 import Separator from '../../../lib/Separator.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Separator component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'orientation', type: "'horizontal' | 'vertical'", required: false, defaultValue: 'horizontal', description: 'Divider direction.' },
  { name: 'decorative', type: 'boolean', required: false, defaultValue: 'true', description: 'Whether decorative.' },
];
</script>
<ComponentDocs name="Separator" {summary} {props} usage={'<Separator orientation="horizontal" />'}>
 {#snippet example()}<Separator orientation="horizontal" />{/snippet}
</ComponentDocs>
