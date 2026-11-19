<script lang="ts">
 import Button from '../../../lib/Button.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Button component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'variant', type: "'primary' | 'alternate'", required: false, defaultValue: 'primary', description: 'Visual style.' },
  { name: 'children', type: 'Snippet', required: true, defaultValue: '—', description: 'Button contents.' },
];
</script>
<ComponentDocs name="Button" {summary} {props} usage="<Button>Save changes</Button>\n<Button variant=&quot;alternate&quot;>Play</Button>">
 {#snippet example()}
  <div class="button-examples">
   <Button>Save changes</Button>
   <Button variant="alternate">Play</Button>
  </div>
 {/snippet}
</ComponentDocs>

<style>
 .button-examples { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem; }
</style>
