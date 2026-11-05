<script lang="ts">
 import Avatar from '../../../lib/Avatar.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'Avatar component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'src', type: 'string', required: false, defaultValue: '—', description: 'Image URL.' },
  { name: 'alt', type: 'string', required: true, defaultValue: '—', description: 'Accessible description.' },
  { name: 'initials', type: 'string', required: true, defaultValue: '—', description: 'Fallback text.' },
  { name: 'delayMs', type: 'number', required: false, defaultValue: '—', description: 'Fallback delay.' },
];
</script>
<ComponentDocs name="Avatar" {summary} {props} usage={'<Avatar alt="Ada Lovelace" initials="AL" />'}>
 {#snippet example()}<Avatar alt="Ada Lovelace" initials="AL" />{/snippet}
</ComponentDocs>
