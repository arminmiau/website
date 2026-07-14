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

  let innerWidth = $state(1920);
  let desktop = $derived(innerWidth > 622 ? true : false);
</script>

<svelte:window bind:innerWidth />

<svelte:head>
  <title>Projects - ayerin.at</title>
</svelte:head>

<div class="container flex flex-col gap-6 py-6 lg:gap-8 lg:py-8">
  <h1 class="p-1 text-5xl shadow-[rgba(0,0,0,0.5)_0px_5px] w-fit">Projects</h1>
  <div class="w-fit">
    <h2
      class="{!desktop &&
        'w-[95vw]'} p-2 text-4xl border-2 border-[rgba(0,0,0,0.5)] rounded">
      Web dev
    </h2>
    <div class="ml-5 mt-5">
      <Card.Root
        class="inline-block align-top mr-4 mb-4 {desktop
          ? 'w-137.5'
          : 'w-[90vw]'} bg-primary-background  border-2 border-[rgba(0,0,0,0.3)]">
        <Card.Header>
          <Card.Title>
            <img
              class="w-125 border border-gray-500 rounded"
              src={WebsiteThumbnail}
              alt="" />
            <p class="mt-1.25">ayerin.at</p>
          </Card.Title>
          <Card.Description>personal website</Card.Description>
        </Card.Header>
        <Card.Content>
          <p class="my-2">
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
          <p>published 7th September, 2024</p>
          <a href="https://github.com/arminmiau/website" target="_blank">
            <img class="w-7.5" src="/img/github-mark-white.svg" alt="" />
          </a>
        </Card.Footer>
      </Card.Root>
    </div>
  </div>
  <div class="w-fit">
    <h2
      class="{!desktop &&
        'w-[95vw]'} p-2 mt-5 text-4xl border-2 border-[rgba(0,0,0,0.5)] rounded">
      Custom images
    </h2>
    <div class="p-5">
      <Card.Root
        class="inline-block align-top mr-4 mb-4 {desktop
          ? 'w-137.5'
          : 'w-[90vw]'} bg-primary-background border-2 border-[rgba(0,0,0,0.3)]">
        <Card.Header>
          <Card.Title>
            <img
              class="w-125 border border-gray-500 rounded"
              src={DevImageThumbnail}
              alt="" />
            <p class="mt-1.25">dev-image</p>
          </Card.Title>
          <Card.Description
            >available as OCI image and ISO file</Card.Description>
        </Card.Header>
        <Card.Content>
          <p class="my-2">
            A custom
            <a class="underline" href="https://universal-blue.org/">
              Universal Blue
            </a>
            <a class="underline" href="https://getaurora.dev/">Aurora</a>
            image with more dev tools like Rider and nodejs preinstalled. OCI image
            built using
            <a class="underline" href="https://blue-build.org">bluebuild</a>,
            ISO built using JasonN3’s
            <a
              class="underline"
              href="https://github.com/JasonN3/build-container-installer">
              build-container-installer</a
            >.
          </p>
        </Card.Content>
        <Card.Footer class="flex justify-between">
          <p>on GitHub since 6th September, 2024</p>
          <a href="https://github.com/arminmiau/dev-image" target="_blank">
            <img class="w-7.5" src="/img/github-mark-white.svg" alt="" />
          </a>
        </Card.Footer>
      </Card.Root>
    </div>
  </div>
  <div class="w-fit">
    <h2
      class="{!desktop &&
        'w-[95vw]'} p-2 mt-5 text-4xl border-2 border-[rgba(0,0,0,0.5)] rounded">
      Game dev
    </h2>
    <div class="p-5">
      <Card.Root
        class="inline-block align-top mr-4 mb-4 {desktop
          ? 'w-137.5'
          : 'w-[90vw]'} bg-primary-background  border-2 border-[rgba(0,0,0,0.3)]">
        <Card.Header>
          <Card.Title>
            <img
              class="w-125 border border-gray-500 rounded"
              src="/img/game-thumbnail.png"
              alt="" />
            <p class="mt-1.25">Game in concept phase</p>
          </Card.Title>
          <Card.Description>using Godot</Card.Description>
        </Card.Header>
        <Card.Content>
          <p class="my-2">
            A survival craft open world rpg, with a class system inspired by
            games like World of Warcraft, Guild Wars 2 and New World, that I
            have been planning to develop.
          </p>
        </Card.Content>
        <Card.Footer class="flex justify-between">
          <p>more TBA</p>
        </Card.Footer>
      </Card.Root>
    </div>
  </div>
  <div class="w-fit">
    <h2
      class="{!desktop &&
        'w-[95vw]'} p-2 mt-5 text-4xl border-2 border-[rgba(0,0,0,0.5)] rounded">
      Racing game telemetry
    </h2>
    <div class="p-5">
      <Card.Root
        class="inline-block align-top mr-4 mb-4 {desktop
          ? 'w-137.5'
          : 'w-[90vw]'} bg-primary-background  border-2 border-[rgba(0,0,0,0.3)]">
        <Card.Header>
          <Card.Title>
            <img
              class="w-125 border border-gray-500 rounded"
              src={Forza1Thumbnail}
              alt="" />
            <p class="mt-1.25">Forza 1</p>
          </Card.Title>
          <Card.Description>private drivers' championship</Card.Description>
        </Card.Header>
        <Card.Content>
          <p class="my-2">
            This was the project around a private drivers' championship which
            ended in the idea of Cross The Apex.
          </p>
        </Card.Content>
        <Card.Footer class="flex justify-between">
          <p>Awards ceremony held on 30th Aug 2025</p>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        class="inline-block align-top mr-4 mb-4 {desktop
          ? 'w-137.5'
          : 'w-[90vw]'} bg-primary-background  border-2 border-[rgba(0,0,0,0.3)]">
        <Card.Header>
          <Card.Title>
            <img
              class="w-125 border border-gray-500 rounded"
              src={XAPXThumbnail}
              alt="" />
            <p class="mt-1.25">Cross The Apex</p>
          </Card.Title>
          <Card.Description>Race Tracking Platform</Card.Description>
        </Card.Header>
        <Card.Content>
          <p class="my-2">
            A platform for creating championships, races and other racing
            events. Integration with Forza Horizon 5 telemetry using the desktop
            app and Asseto Corsa using a server plugin.
          </p>
        </Card.Content>
        <Card.Footer class="flex justify-between">
          <p>Going into Beta sometime</p>
          <a href="https://xapx.ayerin.at" target="_blank"><Globe /></a>
        </Card.Footer>
      </Card.Root>
    </div>
  </div>
</div>
