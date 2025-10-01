<script lang="ts">
  import {
    MaturaballFoto,
    Schulfoto22_23,
    FeuerwehrmannFoto,
    KaligraphieFoto,
  } from '$lib/assetUrls';
  import posthog from 'posthog-js';
  import { onMount } from 'svelte';
  import { locale, _, json } from 'svelte-i18n';
  import { navigating } from '$app/stores';

  let innerWidth = $state(1920);
  let desktop = $derived(innerWidth > 987 ? true : false);

  const age =
    new Date(Date.now() - new Date('2005-11-29').valueOf()).getFullYear() -
    1970;

  let aboutme2items: string[] = $state();
  let aboutme3_1items: string[] = $state();
  let aboutme3_2items: string[] = $state();

  const translateLists = () => {
    aboutme2items = $json('page.home.aboutme2.ul_items') as string[];
    aboutme3_1items = $json('page.home.aboutme3.ul1_items') as string[];
    aboutme3_2items = $json('page.home.aboutme3.ul2_items') as string[];
  };

  locale.subscribe(translateLists);

  onMount(() => {
    if ($navigating) {
      posthog.capture('$feature_view', { feature_flag: 'scrollPage' });
    }
  });
</script>

<svelte:window bind:innerWidth />

<main class="overflow-x-hidden">
  <header class="relative w-screen h-screen">
    <div class="flex justify-center {desktop && 'w-[60vw]'}">
      <img
        ondragstart={(e) => e.preventDefault()}
        src={MaturaballFoto}
        class="absolute select-none {desktop
          ? 'h-screen'
          : 'h-[90vh] bottom-0'}  {!desktop &&
          'w-screen max-w-[100vw]'} object-cover"
        alt="" />
    </div>
    <div
      class="absolute top-0 h-screen flex justify-center items-center {desktop
        ? 'w-[120vw]'
        : 'w-[100vw]'}">
      <div
        class="{desktop
          ? 'w-[40vw]'
          : 'w-[80vw]'} p-5 bg-black bg-opacity-50 rounded-lg">
        <h2 class="text-2xl mt-5 mb-1">{$_('page.home.iam')}</h2>
        <h1 lang="de" class="text-4xl mb-5">
          Armin Bade
          <p class="inline text-xs text-nowrap" aria-hidden="true">
            [ˈarmiːn ˈbaːdə]
          </p>
        </h1>
        <p>
          {$_({ id: 'page.home.aboutme1.p', values: { age: age } })}
        </p>
      </div>
    </div>
  </header>
  <div class="relative w-screen h-screen bg-primary-foreground">
    <div class="flex justify-center {desktop && 'w-[120vw]'}">
      <img
        ondragstart={(e) => e.preventDefault()}
        src={Schulfoto22_23}
        class="absolute select-none {desktop
          ? 'h-screen'
          : 'h-[90vh] bottom-0'} {!desktop &&
          'w-screen max-w-[100vw]'} object-cover"
        alt="" />
    </div>
    <div
      class="absolute top-0 h-screen flex justify-center items-center {desktop
        ? 'w-[60vw]'
        : 'w-[100vw]'}">
      <div
        class="{desktop
          ? 'w-[30vw]'
          : 'w-[80vw]'} p-5 bg-black bg-opacity-50 rounded-lg">
        <h2 class="text-2xl mt-5 mb-1">{$_('page.home.iam')}</h2>
        <h1 class="text-4xl mb-5">{$_('page.home.aboutme2.h1')}</h1>
        <p>
          {$_('page.home.aboutme2.p1_1')}
          <a href={$_('page.home.aboutme2.href')} class="underline"
            >{$_('page.home.aboutme2.a')}</a>
          {$_('page.home.aboutme2.p1_2')}
        </p>
        <h2 class="m-0 mt-3">
          {$_('page.home.aboutme2.ul_heading')}
        </h2>
        <ul class="list-disc list-inside">
          {#each aboutme2items as item}
            <li>{@html item}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
  <div class="relative w-screen h-screen">
    <div class="flex justify-center {desktop && 'w-[60vw]'}">
      <img
        ondragstart={(e) => e.preventDefault()}
        src={FeuerwehrmannFoto}
        class="absolute select-none {desktop
          ? 'h-screen'
          : 'h-[90vh] bottom-0'} {!desktop &&
          'w-screen max-w-[100vw]'} object-cover"
        alt="" />
    </div>
    <div
      class="absolute top-0 h-screen flex justify-center items-center {desktop
        ? 'w-[120vw]'
        : 'w-[100vw]'}">
      <div
        class="{desktop
          ? 'w-[50vw]'
          : 'w-[80vw]'} p-5 bg-black bg-opacity-50 rounded-lg">
        <h2 class="text-2xl mt-5 mb-1">{$_('page.home.iam')}</h2>
        <h1 class="text-4xl mb-5">{$_('page.home.aboutme3.h1')}</h1>
        <p>
          {$_('page.home.aboutme3.p')}
        </p>
        {#if desktop}
          <div class="flex">
            <div class="w-1/2">
              <h2 class="m-0 mt-3">
                {$_('page.home.aboutme3.ul1_heading')}
              </h2>
              <ul class="list-disc list-inside">
                {#each aboutme3_1items as item}
                  <li>{item}</li>
                {/each}
              </ul>
            </div>
            <div class="w-1/2 ml-10">
              <h2 class="m-0 mt-3">
                {$_('page.home.aboutme3.ul2_heading')}
              </h2>
              <ul class="list-disc list-inside">
                {#each aboutme3_2items as item}
                  <li>{item}</li>
                {/each}
              </ul>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="relative w-screen h-screen bg-primary-foreground">
    <div class="flex justify-center {desktop && 'w-[120vw]'}">
      <img
        ondragstart={(e) => e.preventDefault()}
        src={KaligraphieFoto}
        class="absolute select-none {desktop
          ? 'h-screen'
          : 'h-[90vh] bottom-0'} {!desktop &&
          'w-screen max-w-[100vw]'} object-cover"
        alt="" />
    </div>
    <div
      class="absolute top-0 h-screen flex justify-center items-center {desktop
        ? 'w-[60vw]'
        : 'w-[100vw]'}">
      <div
        class="{desktop
          ? 'w-[40vw]'
          : 'w-[80vw]'} p-5 bg-black bg-opacity-50 rounded-lg">
        <h2 class="text-2xl mt-5 mb-1">{$_('page.home.iam')}</h2>
        <h1 class="text-4xl mb-5">{$_('page.home.aboutme4.h1')}</h1>
        <p>{$_('page.home.aboutme4.p1')}</p>
        <p>{$_('page.home.aboutme4.p2')}</p>
      </div>
    </div>
  </div>
</main>
