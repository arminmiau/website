<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { ElaborationAtomicImagesBlueBuild } from '$lib/assetUrls/docs';

  let innerWidth = $state(1920);
  let desktop = $derived(innerWidth > 987 ? true : false);
</script>

<svelte:window bind:innerWidth />

<div class="container flex flex-col gap-6 py-6 lg:gap-8 lg:py-8">
  <h1 class="text-5xl shadow-[rgba(0,0,0,0.5)_0px_5px] w-fit">Documents</h1>
  <div class="w-fit">
    <h2
      class="{!desktop &&
        'w-[95vw]'} p-2 text-4xl border-2 border-[rgba(0,0,0,0.5)] rounded">
      Atomic Images
    </h2>
    <div class="p-5">
      <Card.Root
        class="{desktop
          ? 'w-150'
          : 'w-[90vw]'} bg-primary-background border-2 border-[rgba(0,0,0,0.3)]">
        <Card.Header>
          <Card.Title>
            <p class="mt-1.25 text-2xl">
              Elaboration on Atomic Images and BlueBuild
            </p>
          </Card.Title>
          <Card.Description>
            <a href={ElaborationAtomicImagesBlueBuild} target="_blank">
              Open
              <svg
                class="inline"
                width="16px"
                height="16px"
                viewBox="0 0 512 512">
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd">
                  <g
                    id="icon"
                    fill="#94a3b8"
                    transform="translate(85.333333, 64.000000)">
                    <path
                      d="M128,63.999444 L128,106.666444 L42.6666667,106.666667 L42.6666667,320 L256,320 L256,234.666444 L298.666,234.666444 L298.666667,362.666667 L4.26325641e-14,362.666667 L4.26325641e-14,64 L128,63.999444 Z M362.666667,1.42108547e-14 L362.666667,170.666667 L320,170.666667 L320,72.835 L143.084945,249.751611 L112.915055,219.581722 L289.83,42.666 L192,42.6666667 L192,1.42108547e-14 L362.666667,1.42108547e-14 Z">
                    </path>
                  </g>
                </g>
              </svg>
            </a>
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <p>
            In this document I explain what Atomic Images (Linux) are and how to
            use BlueBuild to create your own custom image, including a demo.
            Originally created for my Lighting Talk in class at HTL
            Grieskirchen.
          </p>
        </Card.Content>
        <Card.Footer class="flex justify-between">
          <p>published 6th January, 2025</p>
          <p>English only</p>
        </Card.Footer>
      </Card.Root>
    </div>
  </div>
</div>
