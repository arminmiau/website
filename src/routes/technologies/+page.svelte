<script lang="ts">
  import { _ } from 'svelte-i18n';
  import {
    CSharp,
    Fedora,
    Firebase,
    Git,
    Github,
    Godot,
    Java,
    Python,
    React,
    Svelte,
    TS,
    Ubuntu,
    Unity,
    Vercel,
    DotNet,
    NextJS,
    Rust,
    Convex,
    Tauri,
    Arch,
    Clerk,
    Spacetime,
    Postgres,
    Sqlite,
    Portainer,
  } from '$lib/assetUrls';
  import ChevronsUpDownIcon from '@lucide/svelte/icons/chevrons-up-down';
  import * as Collapsible from '$lib/components/ui/collapsible/index.js';
  import { buttonVariants } from '$lib/components/ui/button/index.js';

  let innerHeight = $state(1920);
  let largeScreen = $derived(innerHeight >= 1400 ? true : false);

  let plOpen = $state(false);
  let frmOpen = $state(false);
  let infOpen = $state(false);
  let dbOpen = $state(false);
  let geOpen = $state(false);

  $effect(() => {
    if (largeScreen) {
      if (!plOpen) plOpen = true;
      if (!frmOpen) frmOpen = true;
      if (!infOpen) infOpen = true;
      if (!dbOpen) dbOpen = true;
      if (!geOpen) geOpen = true;
    }
  });
</script>

<svelte:window bind:innerHeight />

<svelte:head>
  <title>Technologies - arminmiau</title>
</svelte:head>

<div class="mt-[10vh] ml-[2vw] w-full">
  <h1 class="text-5xl mb-4 shadow-[rgba(0,0,0,0.5)_0px_5px] w-fit">
    {$_('page.technologies.h1')}
  </h1>
  <div class="flex w-[95vw] min-h-[80vh] justify-center items-center">
    <div
      class="flex flex-col justify-center p-6 items-center w-full lg:w-[50vw] h-full">
      <div class="flex justify-around w-full max-sm:flex-col">
        <Collapsible.Root class="w-[350px] py-6 space-y-2" bind:open={plOpen}>
          <div class="flex items-center justify-between space-x-4 px-4">
            <h4 class="text-lg font-bold">{$_('page.technologies.pl')}</h4>
            <Collapsible.Trigger
              class={buttonVariants({
                variant: 'ghost',
                size: 'sm',
                class: 'w-9 p-0',
              })}>
              <ChevronsUpDownIcon class={{ hidden: largeScreen }} />
              <span class="sr-only">Toggle</span>
            </Collapsible.Trigger>
          </div>
          <div class="flex gap-2 items-center">
            <div class="px-4 py-3">
              <img
                src={CSharp}
                alt=""
                class="size-24 object-contain"
                title="C#" />
            </div>
            <div class="px-4 py-3">
              <img
                src={TS}
                alt=""
                class="size-24 object-contain"
                title="TypeScript" />
            </div>
          </div>
          <Collapsible.Content class="space-y-2">
            <div class="flex gap-2 items-center flex-wrap">
              <div class="px-4 py-3">
                <img
                  src={Rust}
                  alt=""
                  class="size-16 object-contain"
                  title="Rust" />
              </div>
              <div class="px-4 py-3">
                <img
                  src={Java}
                  alt=""
                  class="size-16 object-contain"
                  title="Java" />
              </div>
              <div class="px-4 py-3">
                <img
                  src={Python}
                  alt=""
                  class="size-16 object-contain"
                  title="Python" />
              </div>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
        <Collapsible.Root class="w-[350px] py-6 space-y-2" bind:open={frmOpen}>
          <div class="flex items-center justify-between space-x-4 px-4">
            <h4 class="text-lg font-bold">{$_('page.technologies.frm')}</h4>
            <Collapsible.Trigger
              class={buttonVariants({
                variant: 'ghost',
                size: 'sm',
                class: 'w-9 p-0',
              })}>
              <ChevronsUpDownIcon class={{ hidden: largeScreen }} />
              <span class="sr-only">Toggle</span>
            </Collapsible.Trigger>
          </div>
          <div class="flex gap-2 items-center">
            <div class="px-4 py-3">
              <img
                src={DotNet}
                alt=""
                class="size-24 object-contain"
                title=".NET/ASP.NET" />
            </div>
            <div class="px-4 py-3">
              <img
                src={Svelte}
                alt=""
                class="size-24 object-contain"
                title="Svelte" />
            </div>
          </div>
          <Collapsible.Content class="space-y-2">
            <div class="flex gap-2 items-center flex-wrap">
              <div class="px-4 py-3">
                <img
                  src={Tauri}
                  alt=""
                  class="size-16 object-contain"
                  title="Tauri" />
              </div>
              <div class="px-4 py-3">
                <img
                  src={React}
                  alt=""
                  class="size-16 object-contain"
                  title="React" />
              </div>
              <div class="px-4 py-3">
                <img
                  src={NextJS}
                  alt=""
                  class="size-16 object-contain"
                  title="Next.js" />
              </div>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>
      <div class="flex justify-around w-full max-sm:flex-col">
        <Collapsible.Root class="w-[350px] py-6 space-y-2" bind:open={infOpen}>
          <div class="flex items-center justify-between space-x-4 px-4">
            <h4 class="text-lg font-bold">{$_('page.technologies.inf')}</h4>
            <Collapsible.Trigger
              class={buttonVariants({
                variant: 'ghost',
                size: 'sm',
                class: 'w-9 p-0',
              })}>
              <ChevronsUpDownIcon class={{ hidden: largeScreen }} />
              <span class="sr-only">Toggle</span>
            </Collapsible.Trigger>
          </div>
          <div class="flex gap-2 items-center">
            <div class="px-4 py-3">
              <img
                src={Vercel}
                alt=""
                class="size-24 object-contain"
                title="Vercel" />
            </div>
            <div class="px-4 py-3">
              <img
                src={Clerk}
                alt=""
                class="size-24 object-contain"
                title="Clerk" />
            </div>
          </div>
          <Collapsible.Content class="space-y-2">
            <div class="flex gap-2 items-center flex-wrap">
              <div class="px-4 py-3">
                <img
                  src={Portainer}
                  alt=""
                  class="size-16 object-contain"
                  title="Portainer" />
              </div>
              <div class="px-4 py-3">
                <img
                  src={Firebase}
                  alt=""
                  class="size-16 object-contain"
                  title="Firebase" />
              </div>
              <div class="px-4 py-3">
                <img
                  src={Git}
                  alt=""
                  class="size-16 object-contain"
                  title="Git" />
              </div>
              <div class="px-4 py-3">
                <img
                  src={Github}
                  alt=""
                  class="size-16 object-contain"
                  title="Github" />
              </div>
              <div class="px-4 py-3">
                <img
                  src={Ubuntu}
                  alt=""
                  class="size-16 object-contain"
                  title="Ubuntu" />
              </div>
              <div class="px-4 py-3">
                <img
                  src={Fedora}
                  alt=""
                  class="size-16 object-contain"
                  title="Fedora" />
              </div>
              <div class="px-4 py-3">
                <img
                  src={Arch}
                  alt=""
                  class="size-16 object-contain"
                  title="Arch" />
              </div>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
        <Collapsible.Root class="w-[350px] py-6 space-y-2" bind:open={dbOpen}>
          <div class="flex items-center justify-between space-x-4 px-4">
            <h4 class="text-lg font-bold">{$_('page.technologies.db')}</h4>
            <Collapsible.Trigger
              class={buttonVariants({
                variant: 'ghost',
                size: 'sm',
                class: 'w-9 p-0',
              })}>
              <ChevronsUpDownIcon class={{ hidden: largeScreen }} />
              <span class="sr-only">Toggle</span>
            </Collapsible.Trigger>
          </div>
          <div class="flex gap-2 items-center">
            <div class="px-4 py-3">
              <img
                src={Convex}
                alt=""
                class="size-24 object-contain"
                title="Convex" />
            </div>
            <div class="px-4 py-3">
              <img
                src={Spacetime}
                alt=""
                class="size-24 object-contain"
                title="SpacetimeDB" />
            </div>
          </div>
          <Collapsible.Content class="space-y-2">
            <div class="flex gap-2 items-center flex-wrap">
              <div class="px-4 py-3">
                <img
                  src={Postgres}
                  alt=""
                  class="size-16 object-contain"
                  title="Postgres" />
              </div>
              <div class="px-4 py-3">
                <img
                  src={Sqlite}
                  alt=""
                  class="size-16 object-contain"
                  title="Sqlite" />
              </div>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>
      <div class="flex justify-around w-full max-sm:flex-col">
        <Collapsible.Root class="w-[350px] py-6 space-y-2" bind:open={geOpen}>
          <div class="flex items-center justify-between space-x-4 px-4">
            <h4 class="text-lg font-bold">{$_('page.technologies.ge')}</h4>
            <Collapsible.Trigger
              class={buttonVariants({
                variant: 'ghost',
                size: 'sm',
                class: 'w-9 p-0',
              })}>
              <ChevronsUpDownIcon class={{ hidden: largeScreen }} />
              <span class="sr-only">Toggle</span>
            </Collapsible.Trigger>
          </div>
          <div class="flex gap-2 items-center">
            <div class="px-4 py-3">
              <img
                src={Godot}
                alt=""
                class="size-24 object-contain"
                title="Godot" />
            </div>
          </div>
          <Collapsible.Content class="space-y-2">
            <div class="flex gap-2 items-center flex-wrap">
              <div class="px-4 py-3">
                <img
                  src={Unity}
                  alt=""
                  class="size-16 object-contain"
                  title="Unity" />
              </div>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>
    </div>
  </div>
</div>
