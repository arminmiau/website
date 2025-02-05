<script lang="ts">
  import { locale, locales, _ } from 'svelte-i18n';
  import LanguageSelector from './LanguageSelector.svelte';
  import { SquareMenu } from 'lucide-svelte';

  let smallNav = false;
  const toggleSmallNav = () => {
    smallNav = !smallNav;
  };

  let innerWidth = 1920;
  $: desktop = innerWidth > 987 ? true : false;
</script>

<svelte:window bind:innerWidth />

{#if desktop}
  <nav class="fixed z-50">
    <div class="nav__links bg-primary-foreground border border-input">
      <a href="/" class="nav__link">{$_('nav.home')}</a>
      <a href="/technologies" class="nav__link">{$_('nav.technologies')}</a>

      <a href="/projects" class="nav__link">{$_('nav.projects')}</a>
      <a href="/docs" class="nav__link">{$_('nav.docs')}</a>
      <a href="/contact" class="nav__link">{$_('nav.contact')}</a>
    </div>
    <LanguageSelector />
  </nav>
{:else}
  <nav>
    {#if smallNav}
      <ul class="nav__links--small z-50">
        <li>
          <a href="/" on:click={toggleSmallNav} class="nav__link"
            >{$_('nav.home')}</a>
        </li>
        <li>
          <a href="/technologies" on:click={toggleSmallNav} class="nav__link"
            >{$_('nav.technologies')}</a>
        </li>
        <li>
          <a href="/projects" on:click={toggleSmallNav} class="nav__link"
            >{$_('nav.projects')}</a>
        </li>
        <li>
          <a href="/docs" on:click={toggleSmallNav} class="nav__link"
            >{$_('nav.docs')}</a>
        </li>
        <li>
          <a href="/contact" on:click={toggleSmallNav} class="nav__link"
            >{$_('nav.contact')}</a>
        </li>
        <li>
          <select class="nav__locale--small" bind:value={$locale}>
            {#each $locales as loc}
              <option value={loc} selected={loc === $locale}>
                {$_('locales.' + loc)}
              </option>
            {/each}
          </select>
        </li>
      </ul>
    {/if}
    <button
      on:click={toggleSmallNav}
      class="fixed top-1 right-1 last-element-row z-50">
      <SquareMenu size={64} />
    </button>
  </nav>
{/if}

<style>
  :root {
    --nav_height: 50px;
  }

  .nav__links {
    --_gap: 2rem;

    margin: 0;
    padding: 0 5px;

    display: flex;
    justify-content: flex-start !important;

    position: fixed;
    left: 50%;
    translate: -50% 0;
    height: var(--nav_height);
    top: 0;

    border-radius: 0 0 7px 7px;
  }

  .nav__locale--small {
    position: absolute;
    bottom: 0;
    right: 2px;
    border-radius: 7px 0 7px 7px;
    height: var(--nav_height);
    color: #a1a1a1;
    font-size: 18px;
    border: none;

    background-color: #222222;
    background-image: url('/img/dropdown-darkened.svg');
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 20px;

    padding: 0 20px 0 7px;
    appearance: none;
  }

  .nav__link {
    text-decoration: none;
    color: #eeeeee;
    font-weight: 500;
    opacity: 0.7;
  }

  .nav__link:hover {
    opacity: 1;
  }

  .nav__links a {
    overflow: hidden;
    padding: 12px calc(var(--_gap) / 2);
    position: relative;
  }

  .nav__links a:hover {
    background: rgba(255, 255, 255, 0.05);
    --_scale-width: 1;
  }

  .nav__links a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: #0f0;
    border-radius: 2px;

    translate: var(--_translate, 0);
    scale: var(--_scale-width, 0) 1;
    transition:
      scale 400ms var(--_scale-delay, 0ms),
      translate 250ms var(--_translate_delay, 0ms);
  }

  @supports selector(:has(h1)) {
    .nav__links > li:hover + li,
    .nav__links li:has(+ :hover) {
      --_scale-delay: 0ms;
      --_translate-delay: 1000ms;
    }

    .nav__links > li:hover + li {
      --_translate: -100%;
    }

    .nav__links li:has(+ :hover) {
      --_translate: 100%;
    }
  }

  .nav__links--small {
    list-style: none;
    position: fixed;
    margin: 0;
    background: #222222;
    width: 100vw;
  }

  .nav__links--small .nav__link {
    font-size: 48px;
    line-height: 1.5em;
  }

  @media screen and (max-width: 938px) {
    :root {
      --nav_height: 70px;
    }
  }
</style>
