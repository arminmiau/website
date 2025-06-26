<script lang="ts">
  import '../app.css';
  import '$lib/i18n';
  import Maintenance from '$lib/components/Maintenance.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import { preloads } from '$lib/assetUrls';
  import { initFirebase } from '$lib/firebase';
  import { _ } from 'svelte-i18n';
  import { onMount } from 'svelte';
  import { initPosthog } from '$lib/posthog';
  import posthog from 'posthog-js';

  let innerWidth = 1920;
  $: desktop = innerWidth > 987 ? true : false;
  let mobileEnabled = false;

  onMount(() => {
    initFirebase();
    initPosthog();

    posthog.onFeatureFlags(() => {
      mobileEnabled = posthog.isFeatureEnabled('mobileEnabled') ?? false;
    });
  });

  const isPublic = true;
</script>

<svelte:window bind:innerWidth />

<svelte:head>
  {#each preloads as assetUrl}
    <link rel="preload" as="image" href={assetUrl} />
  {/each}
</svelte:head>

{#if desktop || true}
  {#if isPublic}
    <Navigation />
    <slot />
  {:else}
    <Maintenance />
  {/if}
{:else}
  <h1 class="text-white">{$_('misc.mobile')}</h1>
{/if}
