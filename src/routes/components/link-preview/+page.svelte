<script lang="ts">
 import LinkPreview from '../../../lib/LinkPreview.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'LinkPreview component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'href', type: 'string', required: true, defaultValue: '—', description: 'Destination URL.' },
  { name: 'title', type: 'string', required: true, defaultValue: '—', description: 'Preview heading.' },
  { name: 'label', type: 'string', required: false, defaultValue: 'title', description: 'Link text, defaults to title.' },
  { name: 'description', type: 'string', required: false, defaultValue: '—', description: 'Preview summary.' },
  { name: 'openDelay', type: 'number', required: false, defaultValue: '500', description: 'Delay before preview opens, in milliseconds.' },
 ];
</script>
<ComponentDocs name="LinkPreview" {summary} {props} usage={'<LinkPreview href="https://example.com" title="Example site" description="A sample destination." />'}>
  {#snippet example()}<LinkPreview href="https://example.com" title="Example site" description="A sample destination." />{/snippet}
</ComponentDocs>
