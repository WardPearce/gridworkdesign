<script lang="ts">
 import NavigationMenu from '../../../lib/NavigationMenu.svelte';
 import ComponentDocs, { type Prop } from "../../../lib/ComponentDocs.svelte";
 let accepted = $state(false); let enabled = $state(true); let pinned = $state(false); let value = $state(''); let sliderValue = $state(40);
 const items = [{ value: 'one', title: 'First section', label: 'First', content: 'First panel content.' }, { value: 'two', title: 'Second section', label: 'Second', content: 'Second panel content.' }];
 const options = [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
 const choices = options;
 let page = $state(1);
 const removeItem = () => {};

 const summary = 'NavigationMenu component with accessible behavior and configurable props';
 const props: Prop[] = [
  { name: 'items', type: 'NavigationItem[]', required: true, defaultValue: '—', description: 'Links with label, href and optional description.' },
 ];
</script>
<ComponentDocs name="NavigationMenu" {summary} {props} usage={'<NavigationMenu items={[{ label: "Docs", href: "/" }, { label: "Components", href: "/components/button" }]} />'}>
  {#snippet example()}<NavigationMenu items={[{ label: "Docs", href: "/" }, { label: "Components", href: "/components/button" }]} />{/snippet}
</ComponentDocs>
