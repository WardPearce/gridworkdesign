<script lang="ts">
 import RatingGroup from '../../../lib/RatingGroup.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40); let ratingValue = $state(0);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'RatingGroup component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'value', type: 'number', required: false, defaultValue: '0', description: 'Bindable selected rating.' },
  { name: 'max', type: 'number', required: false, defaultValue: '5', description: 'Maximum rating.' },
  { name: 'label', type: 'string', required: false, defaultValue: 'Rating', description: 'Accessible label.' },
];
</script>
<ComponentDocs name="RatingGroup" {summary} {props} usage={'<RatingGroup label="Rate this" bind:value={ratingValue} max={5} />'}>
 {#snippet example()}<RatingGroup label="Rate this" bind:value={ratingValue} max={5} />{/snippet}
</ComponentDocs>
