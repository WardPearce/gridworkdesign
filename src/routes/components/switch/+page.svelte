<script lang="ts">
 import Switch from '../../../lib/Switch.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let soundEnabled = $state(false); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Switch component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'label', type: 'string', required: true, defaultValue: '—', description: 'Visible label.' },
  { name: 'checked', type: 'boolean', required: false, defaultValue: 'false', description: 'Bindable state.' },
  { name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: 'Disables control.' },
  { name: 'name', type: 'string', required: false, defaultValue: '—', description: 'Form name.' },
];
</script>
<ComponentDocs name="Switch" {summary} {props} usage={'<Switch label="Notifications" bind:checked={enabled} />\n<Switch label="Sound effects" bind:checked={soundEnabled} />'}>
 {#snippet example()}
  <div class="switch-examples">
   <Switch label="Notifications" bind:checked={enabled} />
   <Switch label="Sound effects" bind:checked={soundEnabled} />
  </div>
 {/snippet}
</ComponentDocs>

<style>
 .switch-examples { display: grid; width: min(100%, 24rem); gap: 0.25rem; }
</style>
