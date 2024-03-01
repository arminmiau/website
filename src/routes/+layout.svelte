<script lang="ts">
  import '../app.pcss';
  import '$lib/i18n';
  import Maintenance from '$lib/components/Maintenance.svelte';
  import Navigation from '$lib/components/Navigation.svelte';

  const isPublic = true;
</script>

{#if isPublic}
  <Navigation />
  <slot />
{:else}
  <Maintenance />
{/if}
