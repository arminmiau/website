<script lang="ts">
  import '../app.pcss';
  import '$lib/i18n';
  import Maintenance from '$lib/components/Maintenance.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import { assetUrls } from '$lib/assetUrls';
  import { app } from '$lib/firebase';

  app();
  const isPublic = true;
</script>

<svelte:head>
  {#each assetUrls as assetUrl}
    <link rel="preload" as="image" href={assetUrl} />
  {/each}
</svelte:head>

{#if isPublic}
  <Navigation />
  <slot />
{:else}
  <Maintenance />
{/if}
