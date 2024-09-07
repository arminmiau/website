<script lang="ts">
  import {
    FeuerwehrmannFoto,
    KaligraphieFoto,
    MaturaballFoto,
    Schulfoto21_22,
    Schulfoto22_23,
  } from '$lib/assetUrls';
  import { Progress } from '$lib/components/ui/progress';
  import { onMount } from 'svelte';
  import { locale, _, json } from 'svelte-i18n';

  const age =
    new Date(Date.now() - new Date('2005-11-29').valueOf()).getFullYear() -
    1970;

  let aboutme2items: string[];
  let aboutme3_1items: string[];
  let aboutme3_2items: string[];

  const translateLists = () => {
    aboutme2items = $json('page.home.aboutme2.ul_items') as string[];
    aboutme3_1items = $json('page.home.aboutme3.ul1_items') as string[];
    aboutme3_2items = $json('page.home.aboutme3.ul2_items') as string[];
  };

  locale.subscribe(translateLists);

  const clickBanner = (id: number) => {
    clearTimeout(lastTimeout);
    clearInterval(progressInterval);
    progressInterval = undefined;
    setOpen(id);
  };

  let openBanner = 0;
  const setOpen = (id: number) => {
    if (id === openBanner) return;

    openBanner = id;

    resizeDiv();
  };

  const defaultHeight = 0;
  let div: HTMLDivElement;
  let height = defaultHeight;
  let children = false;

  const resizeDiv = async () => {
    height = defaultHeight;
    children = false;

    setTimeout(() => {
      height = div.scrollHeight;
      children = true;
    }, 400);
  };

  const decrementBanner = () => {
    if (openBanner > 1) openBanner--;
    else openBanner = 4;
  };

  const incrementBanner = () => {
    if (openBanner < 4) openBanner++;
    else openBanner = 1;
  };

  let innerWidth = 1920;
  $: desktop = innerWidth > 987 ? true : false;
  const mobileEnabled = false;

  const carouselTime = 10000;
  let lastTimeout: NodeJS.Timeout;
  let timeoutProgress = 100;
  let progressInterval: NodeJS.Timeout | undefined;
  onMount(() => {
    lastTimeout = setTimeout(timeout1, 500);
    setTimeout(() => {
      progressInterval = setInterval(() => {
        timeoutProgress -= 0.2;
      }, carouselTime / 500);
    }, 520);
  });

  const timeout1 = () => {
    setOpen(1);
    lastTimeout = setTimeout(timeout2, carouselTime);
    timeoutProgress = 100;
  };

  const timeout2 = () => {
    setOpen(2);
    lastTimeout = setTimeout(timeout3, carouselTime);
    timeoutProgress = 100;
  };

  const timeout3 = () => {
    setOpen(3);
    lastTimeout = setTimeout(timeout4, carouselTime);
    timeoutProgress = 100;
  };

  const timeout4 = () => {
    setOpen(4);
    lastTimeout = setTimeout(timeout1, carouselTime);
    timeoutProgress = 100;
  };
</script>

<svelte:head>
  <title>Armin Bade - arminmiau</title>
</svelte:head>
<svelte:window bind:innerWidth />

{#if desktop}
  <header class="flex justify-center items-end w-screen h-screen">
    <div class="flex w-screen absolute top-0 left-0 banner__bg">
      <button
        on:click={() => clickBanner(1)}
        class="flex justify-center transition-width border-r-2 border-white {openBanner ===
        0
          ? 'w-[25vw]'
          : openBanner === 1
            ? 'w-[79vw] cursor-default'
            : 'w-[7vw] cursor-grab brightness-50'}">
        <img
          on:dragstart={(e) => e.preventDefault()}
          src={MaturaballFoto}
          class="object-cover transition-[object-cover] delay-500 select-none h-screen {openBanner ===
          1
            ? 'object-center w-[70%] h-[90%]'
            : ''}"
          alt="" />
      </button>
      <button
        on:click={() => clickBanner(2)}
        class="flex justify-center transition-width border-r-2 border-white {openBanner ===
        0
          ? 'w-[25vw]'
          : openBanner === 2
            ? 'w-[79vw] cursor-default'
            : 'w-[7vw] cursor-grab brightness-50'}">
        <img
          on:dragstart={(e) => e.preventDefault()}
          src={Schulfoto22_23}
          class="object-cover transition-[object-cover] delay-500 select-none h-screen {openBanner ===
          2
            ? 'object-center w-[70%] h-[90%]'
            : ''}"
          alt="" />
      </button>
      <button
        on:click={() => clickBanner(3)}
        class="flex justify-center transition-width border-white {openBanner !==
        4
          ? 'border-r-2'
          : ''} {openBanner === 0
          ? 'w-[25vw]'
          : openBanner === 3
            ? 'w-[79vw] cursor-default'
            : 'w-[7vw] cursor-grab brightness-50'}">
        <img
          on:dragstart={(e) => e.preventDefault()}
          src={FeuerwehrmannFoto}
          class="object-cover transition-[object-cover] delay-500 select-none h-screen {openBanner ===
          3
            ? 'object-center w-[50%] h-[90%]'
            : ''}"
          alt="" />
      </button>
      <button
        on:click={() => clickBanner(4)}
        class="flex justify-center transition-width border-white {openBanner ===
        0
          ? 'w-[25vw]'
          : openBanner === 4
            ? 'w-[79vw] cursor-default border-l-2'
            : 'w-[7vw] cursor-grab brightness-50'}">
        <img
          on:dragstart={(e) => e.preventDefault()}
          src={KaligraphieFoto}
          class="object-cover transition-[object-cover] delay-500 select-none h-screen {openBanner ===
          4
            ? 'object-center w-[70%] h-[100%]'
            : ''}"
          alt="" />
      </button>
    </div>
    <div
      bind:this={div}
      class="w-[1000px] z-10 mb-16 py-[5px] px-[10px] transition-[height] duration-300 overflow-y-hidden bg-primary-foreground bg-opacity-90 rounded-sm"
      style="height: {height}px;">
      <div class={children ? 'opacity-100' : 'opacity-0'}>
        {#if openBanner === 1}
          <h2 class="text-2xl mt-5 mb-1">{$_('page.home.iam')}</h2>
          <h1 lang="de" class="text-4xl mb-5">
            Armin Bade
            <p class="inline text-xs" aria-hidden="true">[ˈarmiːn ˈbaːdə]</p>
          </h1>
          <p>
            {$_({ id: 'page.home.aboutme1.p', values: { age: age } })}
          </p>
        {/if}
        {#if openBanner === 2}
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
        {/if}
        {#if openBanner === 3}
          <h2 class="text-2xl mt-5 mb-1">{$_('page.home.iam')}</h2>
          <h1 class="text-4xl mb-5">{$_('page.home.aboutme3.h1')}</h1>
          <p>
            {$_('page.home.aboutme3.p')}
          </p>
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
        {#if openBanner === 4}
          <h2 class="text-2xl mt-5 mb-1">{$_('page.home.iam')}</h2>
          <h1 class="text-4xl mb-5">{$_('page.home.aboutme4.h1')}</h1>
          <p>{$_('page.home.aboutme4.p1')}</p>
          <p>{$_('page.home.aboutme4.p2')}</p>
        {/if}
      </div>
    </div>
    {#if progressInterval}
      <Progress value={timeoutProgress} class="fixed rounded-none h-[5px]" />
    {/if}
  </header>
{:else if mobileEnabled}
  <div id="aboutme">
    <button class="button--decrement" on:click={decrementBanner}>&lt;</button>
    {#if openBanner === 1}
      <div class="aboutme aboutme--small">
        <h2>{$_('page.home.iam')}</h2>
        <h1>
          Armin Bade
          <p aria-hidden="true">[ˈarmiːn ˈbaːdə]</p>
        </h1>
        <p>
          {$_({ id: 'page.home.aboutme1.p', values: { age: age } })}
        </p>
        <img
          on:dragstart={(e) => e.preventDefault()}
          src={Schulfoto22_23}
          alt="" />
      </div>
    {/if}
    {#if openBanner === 2}
      <div class="aboutme aboutme--small">
        <h2>{$_('page.home.iam')}</h2>
        <h1>{$_('page.home.aboutme2.h1')}</h1>
        <p>
          {$_('page.home.aboutme2.p1_1')}
          <a href={$_('page.home.aboutme2.href')}
            >{$_('page.home.aboutme2.a')}</a>
          {$_('page.home.aboutme2.p1_2')}
        </p>
        <p>
          {$_('page.home.aboutme2.p2')}
        </p>
        <img
          on:dragstart={(e) => e.preventDefault()}
          src={Schulfoto21_22}
          class="banner__bg__img--adapt"
          alt="" />
      </div>
    {/if}
    {#if openBanner === 3}
      <div class="aboutme aboutme--small">
        <h2>{$_('page.home.iam')}</h2>
        <h1>{$_('page.home.aboutme3.h1')}</h1>
        <p>
          {$_('page.home.aboutme3.p')}
        </p>
        <p>
          {$_('page.home.aboutme3.ul')}
        </p>
        <ul>
          <li>{$_('page.home.aboutme3.li1')}</li>
          <li>{$_('page.home.aboutme3.li2')}</li>
          <li>{$_('page.home.aboutme3.li3')}</li>
        </ul>
        <img
          on:dragstart={(e) => e.preventDefault()}
          src={FeuerwehrmannFoto}
          class="banner__bg__img--adapt"
          alt="" />
      </div>
    {/if}
    {#if openBanner === 4}
      <div class="aboutme aboutme--small">
        <h2>{$_('page.home.iam')}</h2>
        <h1>{$_('page.home.aboutme4.h1')}</h1>
        <p>{$_('page.home.aboutme4.p')}</p>
        <img
          on:dragstart={(e) => e.preventDefault()}
          src={KaligraphieFoto}
          class="banner__bg__img--adapt"
          alt="" />
      </div>
    {/if}
    <button class="button--increment" on:click={incrementBanner}>&gt;</button>
  </div>
{:else}
  <h1 style="color: white;">{$_('misc.mobile')}</h1>
{/if}

<style>
  .aboutme--small {
    margin-top: 30vh;
    padding: 5px 100px;
  }

  .aboutme--small > img {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    z-index: -1;
  }

  .button--decrement {
    all: unset;

    color: white;
    position: fixed;
    margin-top: 40vh;
    top: 0;
    font-size: 6rem;
  }

  .button--increment {
    all: unset;

    color: white;
    position: fixed;
    margin-top: 40vh;
    top: 0;
    right: 0;
    font-size: 6rem;
  }

  @media screen and (min-width: 700px) {
    .banner__bg__img--adapt {
      width: 95vw !important;
      left: 50% !important;
      right: 50%;
      transform: translate(-50%, 0);
    }
  }

  @media screen and (min-width: 750px) {
    .banner__bg__img--adapt {
      width: 90vw !important;
    }
  }

  @media screen and (min-width: 800px) {
    .banner__bg__img--adapt {
      width: 85vw !important;
    }
  }

  @media screen and (min-width: 850px) {
    .banner__bg__img--adapt {
      width: 80vw !important;
    }
  }

  @media screen and (min-width: 900px) {
    .banner__bg__img--adapt {
      width: 75vw !important;
    }
  }

  @media screen and (min-width: 950px) {
    .banner__bg__img--adapt {
      width: 70vw !important;
    }
  }
</style>
