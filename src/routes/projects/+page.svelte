<script>
  import { DevImageThumbnail, HometabThumbnail, WebsiteThumbnail } from '$lib/assetUrls';
  import * as Card from '$lib/components/ui/card';
  import { _ } from 'svelte-i18n';
</script>

<svelte:head>
  <title>{$_('nav.projects')} - arminmiau</title>
</svelte:head>

<div class="mt-[10vh] ml-[2vw]">
  <h1 class="text-5xl mb-4">{$_('nav.projects')}</h1>
  <h2 class="mt-5 text-4xl mb-4">{$_('page.projects.webdev.h2')}</h2>
  <div class="flex gap-4 flex-wrap">
    <Card.Root
      class="w-[550px] bg-zinc-950 hover:bg-zinc-900 shadow-[rgba(0,0,0,0.3)_-10px_-10px]">
      <Card.Header>
        <Card.Title>
          <img
            class="w-[500px] border border-gray-500 rounded"
            src={WebsiteThumbnail}
            alt="" />
          <p class="mt-[5px]">{$_('page.projects.webdev.website.title')}</p>
        </Card.Title>
        <Card.Description>arminmiau.vercel.app</Card.Description>
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
      class="w-[550px] bg-zinc-950 hover:bg-zinc-900 shadow-[rgba(0,0,0,0.3)_-10px_-10px]">
      <Card.Header>
        <Card.Title>
          <img
            class="w-[500px] border border-gray-500 rounded"
            src={HometabThumbnail}
            alt="" />
          <p class="mt-[5px]">svelte-hometab</p>
        </Card.Title>
        <Card.Description
          >{$_('page.projects.webdev.hometab.subtitle')}</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>
          {$_('page.projects.webdev.hometab.desc')}
        </p>
      </Card.Content>
      <Card.Footer class="flex justify-between">
        <p>{$_('page.projects.webdev.hometab.date')}</p>
        <a href="https://github.com/arminmiau/svelte-hometab" target="_blank">
          <img class="w-[30px]" src="/img/github-mark-white.svg" alt="" />
        </a>
      </Card.Footer>
    </Card.Root>
  </div>
  <h2 class="mt-5 text-4xl mb-4">{$_('page.projects.images.h2')}</h2>
  <div class="flex gap-4 flex-wrap">
    <Card.Root
      class="w-[550px] bg-zinc-950 hover:bg-zinc-900 shadow-[rgba(0,0,0,0.3)_-10px_-10px]">
      <Card.Header>
        <Card.Title>
          <img
            class="w-[500px] border border-gray-500 rounded"
            src={DevImageThumbnail}
            alt="" />
          <p class="mt-[5px]">dev-image</p>
        </Card.Title>
        <Card.Description>{$_('page.projects.images.dev.subtitle')}</Card.Description>
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
  <h2 class="mt-5 text-4xl mb-4">{$_('page.projects.gamedev.h2')}</h2>
  <div class="flex gap-4 flex-wrap">
    <Card.Root
      class="w-[550px] bg-zinc-950 hover:bg-zinc-900 shadow-[rgba(0,0,0,0.3)_-10px_-10px]">
      <Card.Header>
        <Card.Title>
          <img
            class="w-[500px] border border-gray-500 rounded"
            src="/img/game-thumbnail.png"
            alt="" />
          <p class="mt-[5px]">{$_('page.projects.gamedev.game1.title')}</p>
        </Card.Title>
        <Card.Description>{$_('page.projects.gamedev.game1.subtitle')}</Card.Description>
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
