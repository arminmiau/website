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
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let innerWidth = $state(1920);
  let desktop = $derived(innerWidth > 987 ? true : false);
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
    {@render children?.()}
  {:else}
    <Maintenance />
  {/if}
{:else}
  <h1 class="text-white">{$_('misc.mobile')}</h1>
{/if}
