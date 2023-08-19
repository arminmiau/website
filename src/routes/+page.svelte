<script lang="ts">
  import { _ } from 'svelte-i18n';

  let age =
    new Date(Date.now() - new Date('2005-11-29').valueOf()).getFullYear() -
    1970;

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
  let mobileEnabled = false;
</script>

<svelte:window bind:innerWidth />

<video autoplay muted loop class="bg__video">
  <source src="/video/cmatrix.mp4" type="video/mp4" />
</video>
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
          src="/img/Schulfoto22-23.png"
          alt="" />
      </button>
      <button
        on:click={() => setOpen(2)}
        class="button--img border__right {openBanner === 2
          ? 'banner__bg--open'
          : 'banner__bg--closed'}">
        <img
          on:dragstart={(e) => e.preventDefault()}
          src="/img/Schulfoto21-22.png"
          alt="" />
      </button>
      <button
        on:click={() => setOpen(3)}
        class="button--img {openBanner !== 4
          ? 'border__right'
          : ''} {openBanner === 3 ? 'banner__bg--open' : 'banner__bg--closed'}">
        <img
          on:dragstart={(e) => e.preventDefault()}
          src="/img/IMG_0989-scaled.png"
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
          src="/img/IMG_20230818_182533.png"
          alt="" />
      </button>
    </div>
    <div>
      {#if openBanner === 1}
        <div class="aboutme">
          <h2>{$_('page.home.iam')}</h2>
          <h1>
            Armin Bade
            <p class="phonetic-spelling" aria-hidden="true">[ˈarmiːn ˈbaːdə]</p>
          </h1>
          <p>
            {$_({ id: 'page.home.aboutme1.p', values: { age: age } })}
          </p>
        </div>
      {/if}
      {#if openBanner === 2}
        <div class="aboutme">
          <h2>{$_('page.home.iam')}</h2>
          <h1>{$_('page.home.aboutme2.h1')}</h1>
          <p>
            {$_('page.home.aboutme2.p1')}
            <a href={$_('page.home.aboutme2.href')}
              >{$_('page.home.aboutme2.a')}</a>
            {$_('page.home.aboutme2.p2')}
          </p>
        </div>
      {/if}
      {#if openBanner === 3}
        <div class="aboutme">
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
        </div>
      {/if}
      {#if openBanner === 4}
        <div class="aboutme">
          <h2>{$_('page.home.iam')}</h2>
          <h1>{$_('page.home.aboutme4.h1')}</h1>
          <p>{$_('page.home.aboutme4.p')}</p>
        </div>
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
          src="/img/Schulfoto22-23.png"
          alt="" />
      </div>
    {/if}
    {#if openBanner === 2}
      <div class="aboutme aboutme--small">
        <h2>{$_('page.home.iam')}</h2>
        <h1>{$_('page.home.aboutme2.h1')}</h1>
        <p>
          {$_('page.home.aboutme2.p1')}
          <a href={$_('page.home.aboutme2.href')}
            >{$_('page.home.aboutme2.a')}</a>
          {$_('page.home.aboutme2.p2')}
        </p>
        <img
          on:dragstart={(e) => e.preventDefault()}
          src="/img/Schulfoto21-22.png"
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
          src="/img/IMG_0989-scaled.png"
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
          src="/img/Schulfoto21-22.png"
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
  }

  .bg__video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
  }

  #banner {
    margin: 35vh 25vw 0 25vw;
  }

  .aboutme {
    color: white;
    background-color: rgba(80, 80, 80, 0.5);
    padding: 5px 10px;
  }

  .aboutme > p {
    font-size: 24px;
  }

  .aboutme > p > a {
    color: white;
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
