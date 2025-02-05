<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { _ } from 'svelte-i18n';
  import { ElaborationAtomicImagesBlueBuild } from '$lib/assetUrls/docs';
</script>

<div class="mt-[10vh] ml-[2vw]">
  <h1 class="text-5xl mb-4 shadow-[rgba(0,0,0,0.5)_0px_5px] w-fit">
    {$_('nav.docs')}
  </h1>
  <div class="w-fit">
    <h2
      class="p-1 mt-5 text-4xl shadow-[rgba(0,0,0,0.3)_-3px_-3px] border-2 border-[rgba(0,0,0,0.5)] rounded">
      {$_('page.docs.atomic.h2')}
    </h2>
    <div class="p-5">
      <Card.Root
        class="w-[600px] bg-primary-background shadow-[rgba(0,0,0,0.3)_-10px_-10px] border-2 border-[rgba(0,0,0,0.3)]">
        <Card.Header>
          <Card.Title>
            <p class="mt-[5px] text-2xl">{$_('page.docs.atomic.doc1.title')}</p>
          </Card.Title>
          <Card.Description>
            <a href={ElaborationAtomicImagesBlueBuild} target="_blank">
              {$_('page.docs.open')}
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
            {$_('page.docs.atomic.doc1.desc')}
          </p>
        </Card.Content>
        <Card.Footer class="flex justify-between">
          <p>{$_('page.docs.atomic.doc1.date')}</p>
          <p>{$_('page.docs.atomic.doc1.lang')}</p>
        </Card.Footer>
      </Card.Root>
    </div>
  </div>
</div>
