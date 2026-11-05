<script lang="ts">
 import AspectRatio from '../../../lib/AspectRatio.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'AspectRatio component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'ratio', type: 'number', required: false, defaultValue: '16 / 9', description: 'Width to height ratio.' },
  { name: 'children', type: 'Snippet', required: true, defaultValue: '—', description: 'Constrained contents.' },
];
</script>
<ComponentDocs name="AspectRatio" {summary} {props} usage={'<AspectRatio ratio={16 / 9}><img src="/image.jpg" alt="Landscape" /></AspectRatio>'}>
 {#snippet example()}<AspectRatio ratio={16 / 9}><img src="/image.jpg" alt="Landscape" /></AspectRatio>{/snippet}
</ComponentDocs>
