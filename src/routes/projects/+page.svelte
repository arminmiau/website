<script>
  import * as Card from '$lib/components/ui/card';
</script>

<svelte:head>
  <title>Projects - arminmiau</title>
</svelte:head>

<div class="mt-[10vh] ml-[2vw]">
  <h1 class="text-5xl mb-4">Projects</h1>
  <div class="flex gap-4 flex-wrap">
    <Card.Root
      class="w-[550px] bg-zinc-950 hover:bg-zinc-900 shadow-[rgba(0,0,0,0.3)_-10px_-10px]">
      <Card.Header>
        <Card.Title>
          <img
            class="w-[500px] border border-gray-500 rounded"
            src="/img/website-thumbnail.png"
            alt="" />
          <p class="mt-[5px]">arminmiau website</p>
        </Card.Title>
        <Card.Description>arminmiau.vercel.app</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>
          My website that you are currently on right now. Built with
          <a class="underline" href="https://kit.svelte.dev/"> Svelte(Kit)</a>
          and deployed to
          <a class="underline" href="https://vercel.com/"> Vercel</a>.
          Components from
          <a class="underline" href="https://www.shadcn-svelte.com/">
            shadcn-svelte</a
          >.
        </p>
      </Card.Content>
      <Card.Footer class="flex justify-between">
        <p>published 69th Quacktember, 1948</p>
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
            src="/img/hometab-thumbnail.png"
            alt="" />
          <p class="mt-[5px]">svelte-hometab</p>
        </Card.Title>
        <Card.Description>locally hosted</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>
          My hometab for shortcuts and email inboxes. Previously written as a
          plain JS SPA, now rewritten in Svelte.
        </p>
      </Card.Content>
      <Card.Footer class="flex justify-between">
        <p>on GitHub since 22nd July, 2023</p>
        <a href="https://github.com/arminmiau/svelte-hometab" target="_blank">
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
            src="/img/game-thumbnail.png"
            alt="" />
          <p class="mt-[5px]">Unannounced game</p>
        </Card.Title>
        <Card.Description>using Unity</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>
          A survival craft open world rpg, with a class system inspired by games
          like World of Warcraft, Guild Wars 2 and New World, that I have been
          planning to develop.
        </p>
      </Card.Content>
      <Card.Footer class="flex justify-between">
        <p>more TBA</p>
      </Card.Footer>
    </Card.Root>
  </div>
</div>
