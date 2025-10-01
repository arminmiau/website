<script>
  import ScrollPage from '$lib/components/pages/ScrollPage.svelte';
  import SlideshowPage from '$lib/components/pages/SlideshowPage.svelte';
  import posthog from 'posthog-js';
  import { onMount } from 'svelte';

  let innerWidth = $state(1920);
  let desktop = $derived(innerWidth > 987 ? true : false);

  let isScrollPageEnabled = $state(true);

  onMount(() => {
    isScrollPageEnabled = posthog.isFeatureEnabled('scrollPage') ?? false;
  });
</script>

<svelte:window bind:innerWidth />

{#if isScrollPageEnabled || !desktop}
  <ScrollPage />
{:else}
  <SlideshowPage />
{/if}
