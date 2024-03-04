<script lang="ts">
  import {
    FeuerwehrmannFoto,
    KaligraphieFoto,
    Schulfoto21_22,
    Schulfoto22_23,
  } from '$lib/assetUrls';
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

  let openBanner = 1;
  const setOpen = (id: number) => {
    openBanner = id;
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
</script>

<svelte:window bind:innerWidth />

{#if desktop}
  <header id="banner">
    <div class="banner__bg">
      <button
        on:click={() => setOpen(1)}
        class="button--img border__right {openBanner === 1
          ? 'banner__bg--open'
          : 'banner__bg--closed'}">
        <img
          on:dragstart={(e) => e.preventDefault()}
          src={Schulfoto22_23}
          alt="" />
      </button>
      <button
        on:click={() => setOpen(2)}
        class="button--img border__right {openBanner === 2
          ? 'banner__bg--open'
          : 'banner__bg--closed'}">
        <img
          on:dragstart={(e) => e.preventDefault()}
          src={Schulfoto21_22}
          alt="" />
      </button>
      <button
        on:click={() => setOpen(3)}
        class="button--img {openBanner !== 4
          ? 'border__right'
          : ''} {openBanner === 3 ? 'banner__bg--open' : 'banner__bg--closed'}">
        <img
          on:dragstart={(e) => e.preventDefault()}
          src={FeuerwehrmannFoto}
          id="banner__bg__img3"
          alt="" />
      </button>
      <button
        on:click={() => setOpen(4)}
        class="button--img {openBanner === 4
          ? 'banner__bg--open border__left'
          : 'banner__bg--closed'}">
        <img
          on:dragstart={(e) => e.preventDefault()}
          src={KaligraphieFoto}
          alt="" />
      </button>
    </div>
    <div class="aboutme">
      {#if openBanner === 1}
        <h2>{$_('page.home.iam')}</h2>
        <h1 lang="de">
          Armin Bade
          <p class="phonetic-spelling" aria-hidden="true">[ˈarmiːn ˈbaːdə]</p>
        </h1>
        <p>
          {$_({ id: 'page.home.aboutme1.p1', values: { age: age } })}
        </p>
        <p>{$_('page.home.aboutme1.p2')}</p>
        <p>{$_('page.home.aboutme1.p3')}</p>
      {/if}
      {#if openBanner === 2}
        <h2>{$_('page.home.iam')}</h2>
        <h1>{$_('page.home.aboutme2.h1')}</h1>
        <p>
          {$_('page.home.aboutme2.p1_1')}
          <a href={$_('page.home.aboutme2.href')}
            >{$_('page.home.aboutme2.a')}</a>
          {$_('page.home.aboutme2.p1_2')}
        </p>
        <h2 class="ul__heading">
          {$_('page.home.aboutme2.ul_heading')}
        </h2>
        <ul class="list-disc list-inside">
          {#each aboutme2items as item}
            <li>{@html item}</li>
          {/each}
        </ul>
      {/if}
      {#if openBanner === 3}
        <h2>{$_('page.home.iam')}</h2>
        <h1>{$_('page.home.aboutme3.h1')}</h1>
        <p>
          {$_('page.home.aboutme3.p')}
        </p>
        <div class="flex">
          <div class="w-1/2">
            <h2 class="ul__heading">
              {$_('page.home.aboutme3.ul1_heading')}
            </h2>
            <ul class="list-disc list-inside">
              {#each aboutme3_1items as item}
                <li>{item}</li>
              {/each}
            </ul>
          </div>
          <div class="w-1/2 ml-10">
            <h2 class="ul__heading">
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
        <h2>{$_('page.home.iam')}</h2>
        <h1>{$_('page.home.aboutme4.h1')}</h1>
        <p>{$_('page.home.aboutme4.p1')}</p>
        <p>{$_('page.home.aboutme4.p2')}</p>
      {/if}
    </div>
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

<svelte:head>
  <title>arminmiau</title>
</svelte:head>

<style>
  :global(body) {
    overflow: hidden;
    z-index: -2;
  }

  #banner {
    margin: 35vh 25vw 0 25vw;
  }

  .aboutme {
    color: white;
    padding: 5px 10px;

    width: 1000px;
  }

  .aboutme > p {
    font-size: 24px;
    max-width: 80ch;
  }

  .aboutme > .ul__heading {
    margin-block: 0;
    margin-top: 20px;
  }

  .aboutme > p > a {
    color: white;
    text-decoration: underline;
  }

  .phonetic-spelling {
    font-size: 20px;
    display: inline;
  }

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

  .banner__bg {
    --_closed-size: 7vw;
    display: flex;
    width: 100vw;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  }

  .button--img {
    all: unset;
    display: flex;
    justify-content: center;
  }

  .banner__bg > .button--img {
    transition: width 400ms;
  }

  .banner__bg > .button--img > img {
    transition: object-fit 400ms;
    height: 100vh;
    user-select: none;
  }

  .border__right {
    border-right: 2px white solid;
  }

  .border__left {
    border-left: 2px white solid;
  }

  .banner__bg--closed img {
    max-width: var(--_closed-size);
    object-fit: cover;
  }

  .banner__bg--open {
    width: calc(100vw - (var(--_closed-size) * 3));
  }

  .banner__bg--open > img {
    object-position: center 10%;
    object-fit: cover;
    width: 70%;
  }

  .banner__bg--closed {
    width: var(--_closed-size);
    cursor: grab;
    filter: brightness(50%);
  }

  .banner__bg--open > #banner__bg__img3 {
    width: 50%;
  }

  @media screen and (max-width: 1430px) {
    .banner__bg--open > img {
      width: 90% !important;
    }
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
