<script lang="ts">
  import Menu from '@lucide/svelte/icons/menu';
  import { Button } from '$lib/components/ui/button/index.js';
  import { afterNavigate } from '$app/navigation';
  import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
  import { initPosthog } from '$lib/posthog';
  import { onMount } from 'svelte';
  import { dev } from '$app/environment';
  import '../app.css';

  let { children } = $props();

  let innerWidth = $state(0);
  let desktop = $derived(innerWidth > 1023 ? true : false);
  let hamburgerOpen = $state(false);

  onMount(() => {
    if (!dev) {
      initPosthog();
    }
  });

  $effect(() => {
    if (desktop) {
      hamburgerOpen = false;
    }

    if (hamburgerOpen) {
      document.querySelector('body')?.classList.add('overflow-hidden');
    } else {
      document.querySelector('body')?.classList.remove('overflow-hidden');
    }
  });

  afterNavigate(() => (hamburgerOpen = false));
</script>

<svelte:window bind:innerWidth />

<header>
  <div
    class="container hidden min-h-11 items-center justify-between gap-1 min-[970px]:flex">
    <div class="flex items-center gap-4"></div>
  </div>
  <div class="bg-background sticky top-0 z-50 border-b border-b-[#303037]">
    <div class="relative">
      <div class="container">
        <div class="flex min-h-14 items-stretch md:min-h-16 lg:min-h-18">
          <div
            class="z-30 flex w-full max-w-full items-center justify-between gap-8">
            <Button href="/" variant="link" class="p-0"
              ><img
                class="h-14 w-auto max-w-max rounded-2xl"
                src="https://assets.ayerin.at/logos/ayerin-wordmark_green.svg"
                alt="Ayerin Logo" /></Button>
            <div class="h-full grow">
              <NavigationMenu.Root class="h-full" viewport={false}>
                <NavigationMenu.List class="gap-8">
                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="/technologies" class="text-lg"
                      >Technologies</NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="/projects" class="text-lg"
                      >Projects</NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="/docs" class="text-lg"
                      >Documents</NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="/contact" class="text-lg"
                      >Contact</NavigationMenu.Link>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Root>
            </div>
            <span class="w-9 min-[970px]:hidden"
              ><span class="flex"
                ><Button
                  onclick={() => (hamburgerOpen = true)}
                  variant="ghost"
                  class="inline-flex cursor-pointer items-center rounded-full border-0 bg-transparent p-0 text-white"
                  ><span
                    aria-hidden="false"
                    class="relative inline-flex items-center"
                    ><span
                      class="inline-flex overflow-clip border-2 border-transparent p-1.5"
                      ><Menu /></span
                    ></span
                  ></Button
                ></span
              ></span>
            {#if hamburgerOpen}
              <div
                class="fixed top-0 right-0 left-0 z-50 max-h-screen overflow-y-scroll">
                <div
                  class="relative z-10 overflow-x-clip border-b border-b-[#303037]">
                  <div class="bg-background block w-full text-white">
                    <div class="container">
                      <div
                        class="absolute inset-0 z-20"
                        style="background:linear-gradient(180deg, rgb(from #15151e r g b / 0) 0%, rgb(from #15151e r g b / 1) 100%)">
                      </div>
                      <div
                        class="flex min-h-14 items-stretch md:min-h-16 lg:min-h-18">
                        <div
                          class="z-30 flex w-full max-w-full items-center justify-between gap-8 text-white">
                          <span></span><Button
                            onclick={() => (hamburgerOpen = false)}
                            variant="ghost"
                            class="inline-flex cursor-pointer items-center rounded-full border-0 bg-transparent p-0 text-white"
                            ><span
                              aria-hidden="false"
                              class="relative inline-flex items-center"
                              ><span
                                class="inline-flex overflow-clip border-2 border-transparent p-1.5"
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  role="img"
                                  class="size-5"
                                  ><title>Close</title><path
                                    fill="currentColor"
                                    d="M13.48 12 19 17.52 17.52 19 12 13.48 6.48 19 5 17.52 10.52 12 5 6.48 6.48 5 12 10.52 17.52 5 19 6.48z"
                                  ></path
                                  ></svg
                                ></span
                              ></span
                            ></Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-background overflow-y-scroll pb-5">
                  <div class="container flex flex-col py-5">
                    <div
                      class="container flex flex-col items-stretch justify-center gap-5 py-5">
                      <div class="flex flex-col items-stretch gap-2"></div>
                      <div class="h-0.5 w-full bg-[#303037]"></div>
                    </div>
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<main class:opacity-50={hamburgerOpen}>{@render children()}</main>
<footer class="flex flex-col">
  <div class="container flex flex-col gap-6 py-10">
    <nav class="flex flex-col items-start justify-between gap-2 md:flex-row">
      <Button
        size="none"
        href="/technologies"
        variant="link"
        class="titillium-web-bold text-[1.0625rem] leading-6"
        >Technologies</Button>
      <Button
        size="none"
        href="/projects"
        variant="link"
        class="titillium-web-bold text-[1.0625rem] leading-6">Projects</Button>
      <Button
        size="none"
        href="/docs"
        variant="link"
        class="titillium-web-bold text-[1.0625rem] leading-6">Documents</Button>
      <Button
        size="none"
        href="/contact"
        variant="link"
        class="titillium-web-bold text-[1.0625rem] leading-6">Contact</Button>
    </nav>
    <div class="flex items-center justify-between gap-5">
      <Button
        href="https://xapx.ayerin.at"
        target="_blank"
        variant="ghost"
        class="h-12"
        ><img
          class="h-12"
          src="https://xapx-assets.ayerin.at/xapx_logo.png"
          alt="XAPX logo" />
      </Button>
    </div>
  </div>
</footer>
