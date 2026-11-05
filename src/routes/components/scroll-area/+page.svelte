<script lang="ts">
 import ScrollArea from '../../../lib/ScrollArea.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'ScrollArea component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'children', type: 'Snippet', required: false, defaultValue: '—', description: 'Scrollable contents.' },
  { name: 'maxHeight', type: 'string', required: false, defaultValue: '16rem', description: 'Maximum viewport height.' },
  { name: 'label', type: 'string', required: false, defaultValue: 'Scrollable content', description: 'Accessible viewport label.' },
 ];
</script>
<ComponentDocs name="ScrollArea" {summary} {props} usage={'<ScrollArea />'}>
 {#snippet example()}<ScrollArea />{/snippet}
</ComponentDocs>
