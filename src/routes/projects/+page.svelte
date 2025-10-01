<script>
  import {
    DevImageThumbnail,
    HometabThumbnail,
    WebsiteThumbnail,
  } from '$lib/assetUrls';
  import { Forza1Thumbnail } from '$lib/assetUrls/';
  import { XAPXThumbnail } from '$lib/assetUrls/';
  import * as Card from '$lib/components/ui/card';
  import Globe from '@lucide/svelte/icons/globe';
  import { _ } from 'svelte-i18n';

  let innerWidth = $state(1920);
  let desktop = $derived(innerWidth > 622 ? true : false);
</script>

<svelte:window bind:innerWidth />

<svelte:head>
  <title>{$_('nav.projects')} - arminmiau</title>
</svelte:head>

<div class="mt-[10vh] ml-[2vw]">
  <h1 class="p-1 text-5xl mb-4 shadow-[rgba(0,0,0,0.5)_0px_5px] w-fit">
    {$_('nav.projects')}
  </h1>
  <div class="w-fit">
    <h2
      class="{!desktop &&
        'w-[95vw]'} p-2 mt-5 text-4xl border-2 border-[rgba(0,0,0,0.5)] rounded">
      {$_('page.projects.webdev.h2')}
    </h2>
    <div class="ml-5 mt-5">
      <Card.Root
        class="inline-block align-top mr-4 mb-4 {desktop
          ? 'w-[550px]'
          : 'w-[90vw]'} bg-primary-background  border-2 border-[rgba(0,0,0,0.3)]">
        <Card.Header>
          <Card.Title>
            <img
              class="w-[500px] border border-gray-500 rounded"
              src={WebsiteThumbnail}
              alt="" />
            <p class="mt-[5px]">arminmiau.vercel.app</p>
          </Card.Title>
          <Card.Description
            ><p class="mt-[5px]">
              {$_('page.projects.webdev.website.subtitle')}
            </p></Card.Description>
        </Card.Header>
        <Card.Content>
          <p>
            {$_('page.projects.webdev.website.desc1')}
            <a class="underline" href="https://kit.svelte.dev/"> Svelte(Kit)</a>
            {$_('page.projects.webdev.website.desc2')}
            <a class="underline" href="https://vercel.com/"> Vercel</a>.
            {$_('page.projects.webdev.website.desc3')}
            <a class="underline" href="https://www.shadcn-svelte.com/">
              shadcn-svelte</a
            >.
          </p>
        </Card.Content>
        <Card.Footer class="flex justify-between">
          <p>{$_('page.projects.webdev.website.date')}</p>
          <a href="https://github.com/arminmiau/website" target="_blank">
            <img class="w-[30px]" src="/img/github-mark-white.svg" alt="" />
          </a>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        class="inline-block align-top mr-4 mb-4 {desktop
          ? 'w-[550px]'
          : 'w-[90vw]'} bg-primary-background  border-2 border-[rgba(0,0,0,0.3)]">
        <Card.Header>
          <Card.Title>
            <img
              class="w-[500px] border border-gray-500 rounded"
              src={Forza1Thumbnail}
              alt="" />
            <p class="mt-[5px]">{$_('page.projects.webdev.forza1.title')}</p>
          </Card.Title>
          <Card.Description
            >{$_('page.projects.webdev.forza1.subtitle')}</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>
            {$_('page.projects.webdev.forza1.desc')}
          </p>
        </Card.Content>
        <Card.Footer class="flex justify-between">
          <p>{$_('page.projects.webdev.forza1.date')}</p>
          <a href="https://forza1.ayerin.de" target="_blank"><Globe /></a>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        class="inline-block align-top mr-4 mb-4 {desktop
          ? 'w-[550px]'
          : 'w-[90vw]'} bg-primary-background  border-2 border-[rgba(0,0,0,0.3)]">
        <Card.Header>
          <Card.Title>
            <img
              class="w-[500px] border border-gray-500 rounded"
              src={XAPXThumbnail}
              alt="" />
            <p class="mt-[5px]">{$_('page.projects.webdev.xapx.title')}</p>
          </Card.Title>
          <Card.Description
            >{$_('page.projects.webdev.xapx.subtitle')}</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>
            {$_('page.projects.webdev.xapx.desc')}
          </p>
        </Card.Content>
        <Card.Footer class="flex justify-between">
          <p>{$_('page.projects.webdev.xapx.date')}</p>
          <a href="https://xapx.ayerin.de" target="_blank"><Globe /></a>
        </Card.Footer>
      </Card.Root>
    </div>
  </div>
  <div class="w-fit">
    <h2
      class="{!desktop &&
        'w-[95vw]'} p-2 mt-5 text-4xl border-2 border-[rgba(0,0,0,0.5)] rounded">
      {$_('page.projects.images.h2')}
    </h2>
    <div class="p-5">
      <Card.Root
        class="inline-block align-top mr-4 mb-4 {desktop
          ? 'w-[550px]'
          : 'w-[90vw]'} bg-primary-background border-2 border-[rgba(0,0,0,0.3)]">
        <Card.Header>
          <Card.Title>
            <img
              class="w-[500px] border border-gray-500 rounded"
              src={DevImageThumbnail}
              alt="" />
            <p class="mt-[5px]">dev-image</p>
          </Card.Title>
          <Card.Description
            >{$_('page.projects.images.dev.subtitle')}</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>
            {$_('page.projects.images.dev.desc1')}
            <a class="underline" href="https://universal-blue.org/">
              Universal Blue
            </a>
            <a class="underline" href="https://getaurora.dev/">Aurora</a>
            {$_('page.projects.images.dev.desc2')}
            <a class="underline" href="https://blue-build.org">bluebuild</a>{$_(
              'page.projects.images.dev.desc3'
            )}
            <a
              class="underline"
              href="https://github.com/JasonN3/build-container-installer">
              build-container-installer</a
            >.
          </p>
        </Card.Content>
        <Card.Footer class="flex justify-between">
          <p>{$_('page.projects.images.dev.date')}</p>
          <a href="https://github.com/arminmiau/dev-image" target="_blank">
            <img class="w-[30px]" src="/img/github-mark-white.svg" alt="" />
          </a>
        </Card.Footer>
      </Card.Root>
    </div>
  </div>
  <div class="w-fit">
    <h2
      class="{!desktop &&
        'w-[95vw]'} p-2 mt-5 text-4xl border-2 border-[rgba(0,0,0,0.5)] rounded">
      {$_('page.projects.gamedev.h2')}
    </h2>
    <div class="p-5">
      <Card.Root
        class="inline-block align-top mr-4 mb-4 {desktop
          ? 'w-[550px]'
          : 'w-[90vw]'} bg-primary-background  border-2 border-[rgba(0,0,0,0.3)]">
        <Card.Header>
          <Card.Title>
            <img
              class="w-[500px] border border-gray-500 rounded"
              src="/img/game-thumbnail.png"
              alt="" />
            <p class="mt-[5px]">{$_('page.projects.gamedev.game1.title')}</p>
          </Card.Title>
          <Card.Description
            >{$_('page.projects.gamedev.game1.subtitle')}</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>
            {$_('page.projects.gamedev.game1.desc')}
          </p>
        </Card.Content>
        <Card.Footer class="flex justify-between">
          <p>{$_('page.projects.gamedev.game1.date')}</p>
        </Card.Footer>
      </Card.Root>
    </div>
  </div>
</div>
