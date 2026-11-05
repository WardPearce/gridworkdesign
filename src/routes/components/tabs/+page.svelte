<script lang="ts">
 import Tabs from '../../../lib/Tabs.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Tabs component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'items', type: 'TabItem[]', required: true, defaultValue: '—', description: 'Entries contain value, label, content and optional disabled.' },
  { name: 'value', type: 'string', required: false, defaultValue: 'First item', description: 'Bindable active tab.' },
];
</script>
<ComponentDocs name="Tabs" {summary} {props} usage={'<Tabs items={items} bind:value />'}>
 {#snippet example()}<Tabs items={items} bind:value />{/snippet}
</ComponentDocs>
