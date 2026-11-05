<script lang="ts">
 import Rating from '../../../lib/Rating.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40); let ratingValue = $state(0);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Rating component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'label', type: 'string', required: true, defaultValue: '—', description: 'Accessible label.' },
  { name: 'value', type: 'number', required: false, defaultValue: '0', description: 'Bindable selected rating.' },
  { name: 'max', type: 'number', required: false, defaultValue: '5', description: 'Maximum rating.' },
  { name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: 'Disables input.' },
];
</script>
<ComponentDocs name="Rating" {summary} {props} usage={'<Rating label="Rate this" bind:value={ratingValue} max={5} />'}>
 {#snippet example()}<Rating label="Rate this" bind:value={ratingValue} max={5} />{/snippet}
</ComponentDocs>
