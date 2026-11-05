<script lang="ts">
 import Accordion from '../../../lib/Accordion.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Accordion component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'items', type: 'AccordionItem[]', required: true, defaultValue: '—', description: 'Rows with value, title, content and optional disabled.' },
  { name: 'type', type: "'single' | 'multiple'", required: false, defaultValue: 'single', description: 'How many rows can be open.' },
];
</script>
<ComponentDocs name="Accordion" {summary} {props} usage={'<Accordion items={items} type="multiple" />'}>
 {#snippet example()}<Accordion items={items} type="multiple" />{/snippet}
</ComponentDocs>
