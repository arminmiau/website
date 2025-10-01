<script lang="ts">
  import * as Select from '$lib/components/ui/select';
  import type { Selected } from 'bits-ui';
  import { locale, locales, _ } from 'svelte-i18n';

  let value = $state($locale ?? '');

  $effect(() => {
    $locale = value;
  });

  const selectLocales: Selected<string>[] = $locales.map((l) => ({
    value: l,
    label: $_('locales.' + l),
  }));

  const triggerContent = $derived(
    selectLocales.find((sL) => sL.value === value)?.label ?? 'Select a locale'
  );
</script>

<Select.Root type="single" bind:value>
  <Select.Trigger class="w-[180px] bg-popover nav__locale">
    {triggerContent}
  </Select.Trigger>
  <Select.Content>
    {#each $locales as loc}
      <Select.Item value={loc}>{$_('locales.' + loc)}</Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
