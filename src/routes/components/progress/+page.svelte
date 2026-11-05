<script lang="ts">
 import Progress from '../../../lib/Progress.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Progress component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'value', type: 'number', required: true, defaultValue: '—', description: 'Current progress.' },
  { name: 'max', type: 'number', required: false, defaultValue: '100', description: 'Maximum value.' },
  { name: 'label', type: 'string', required: false, defaultValue: 'Progress', description: 'Accessible label.' },
];
</script>
<ComponentDocs name="Progress" {summary} {props} usage={'<Progress label="Upload" value={64} max={100} />'}>
 {#snippet example()}<Progress label="Upload" value={64} max={100} />{/snippet}
</ComponentDocs>
