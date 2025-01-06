<script lang="ts">
  import '../app.css';
  import '$lib/i18n';
  import Maintenance from '$lib/components/Maintenance.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import { preloads } from '../assetUrls';
  import { app } from '$lib/firebase';
  import { _ } from 'svelte-i18n';

  let innerWidth = 1920;
  $: desktop = innerWidth > 987 ? true : false;
  const mobileEnabled = false;

  app();
  const isPublic = true;
</script>

<svelte:window bind:innerWidth />

<svelte:head>
  {#each preloads as assetUrl}
    <link rel="preload" as="image" href={assetUrl} />
  {/each}
</svelte:head>

{#if desktop || mobileEnabled}
  {#if isPublic}
    <Navigation />
    <slot />
  {:else}
    <Maintenance />
  {/if}
{:else}
  <h1 style="color: white;">{$_('misc.mobile')}</h1>
{/if}
