<script lang="ts">
 import Toggle from '../../../lib/Toggle.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Toggle component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'label', type: 'string', required: true, defaultValue: '—', description: 'Button label.' },
  { name: 'pressed', type: 'boolean', required: false, defaultValue: 'false', description: 'Bindable pressed state.' },
  { name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: 'Disables control.' },
];
</script>
<ComponentDocs name="Toggle" {summary} {props} usage={'<Toggle label="Pin item" bind:pressed={pinned} />'}>
 {#snippet example()}<Toggle label="Pin item" bind:pressed={pinned} />{/snippet}
</ComponentDocs>
