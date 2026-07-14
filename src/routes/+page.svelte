<script lang="ts">
  import {
    MaturaballFoto,
    Schulfoto22_23,
    FeuerwehrmannFoto,
    KaligraphieFoto,
    preloads,
  } from '$lib/assetUrls';
  import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';

  let innerWidth = $state(1920);
  let desktop = $derived(innerWidth > 987 ? true : false);

  const age =
    new Date(Date.now() - new Date('2005-11-29').valueOf()).getFullYear() -
    1970;

  let aboutme2items = [
    'Java <i>(Command Line, Java Swing/FX, Android)</i>,',
    'C# <i>(WPF, LINQ, ASP.NET)</i>, Docker,',
    'HTML, CSS, JS/TS, Svelte, Angular, Flutter,',
    'networking, database engineering and project management.',
  ];
  let aboutme3_1items = [
    'Youth knowledge test in gold',
    'Youth achievement badge in gold',
    'Radio/communication and tasks in operational control achievement badge in bronze',
    'Fire service achievement badge in silver',
    'Technical assistance achievement badge in bronze',
    'Bavarian firefighter achievement badge in level 1',
    'Medical achievement badge in bronze',
    'Radiation protection achievement badge in bronze',
  ];
  let aboutme3_2items = [
    'Basics course',
    'Radio communication course',
    'Squad leader exam',
    'Portable fire pump operator course',
    'Radiation protection course',
  ];
</script>

<svelte:window bind:innerWidth />

<svelte:head>
  {#each preloads as assetUrl}
    <link rel="preload" as="image" href={assetUrl} />
  {/each}
</svelte:head>

<div class="h-[calc(100vh-300px)] bg-accent">
  <Fullpage>
    <FullpageSection
      style="background: url('{MaturaballFoto}') no-repeat left center">
      <div>
        <div class="p-5 bg-black bg-opacity-50 rounded-lg max-w-[80ch]">
          <h2 class="text-2xl mt-5 mb-1">I am...</h2>
          <h1 lang="de" class="text-4xl mb-5">
            Armin Bade
            <p class="inline text-xs text-nowrap" aria-hidden="true">
              [ˈarmiːn ˈbaːdə]
            </p>
          </h1>
          <p>
            or also known under the nickname "Ayerin". I am {age} years old and from
            Austria. Computertechnologies, software development, emergency assistance
            and video games are my passion.
          </p>
        </div>
      </div>
    </FullpageSection>
    <FullpageSection
      style="background: url('{Schulfoto22_23}') no-repeat right center">
      <div>
        <div class="p-5 bg-black bg-opacity-50 rounded-lg max-w-[80ch]">
          <h2 class="text-2xl mt-5 mb-1">I am...</h2>
          <h1 class="text-4xl mb-5">a graduate</h1>
          <p>
            and received my Matura degree from a
            <a
              href="https://en.wikipedia.org/wiki/H%C3%B6here_Technische_Lehranstalt"
              class="underline">Higher Technical Institute</a>
            in the field of informatics.
          </p>
          <h2 class="m-0 mt-3">At this school I learned...</h2>
          <ul class="list-disc list-inside">
            {#each aboutme2items as item}
              <li>{@html item}</li>
            {/each}
          </ul>
        </div>
      </div>
    </FullpageSection>
    <FullpageSection
      style="background: url('{FeuerwehrmannFoto}') no-repeat left center">
      <div>
        <div class="p-5 bg-black bg-opacity-50 rounded-lg max-w-[80ch]">
          <h2 class="text-2xl mt-5 mb-1">I am...</h2>
          <h1 class="text-4xl mb-5">a firefighter.</h1>
          <p>
            My commitment to the volunteer fire department is driven by the
            opportunity to help people in emergencies directly and effectively.
            Beyond active service, I am fascinated by the complex interplay
            within the rescue chain. I find it extremely exciting to understand
            how the various emergency organizations and first responders work
            together professionally, and I enjoy exploring new ideas and
            approaches on how to further develop these processes for the future.
          </p>
          {#if desktop}
            <div class="flex">
              <div class="w-1/2">
                <h2 class="m-0 mt-3">My badges:</h2>
                <ul class="list-disc list-inside">
                  {#each aboutme3_1items as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
              <div class="w-1/2 ml-10">
                <h2 class="m-0 mt-3">Courses I've taken:</h2>
                <ul class="list-disc list-inside">
                  {#each aboutme3_2items as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </FullpageSection>
    <FullpageSection
      style="background: url('{KaligraphieFoto}') no-repeat right center">
      <div>
        <div class="p-5 bg-black bg-opacity-50 rounded-lg max-w-[80ch]">
          <h2 class="text-2xl mt-5 mb-1">I am...</h2>
          <h1 class="text-4xl mb-5">a hobby game designer</h1>
          <p>and I have been planning my own game for a long time.</p>
          <p>
            However, I haven't made any mentionable progress in the development.
            I want to make a survival craft open world rpg, with a class system
            inspired by games like World of Warcraft, Guild Wars 2 and New
            World.
          </p>
        </div>
      </div>
    </FullpageSection>
  </Fullpage>
</div>
