<script lang="ts">
  import * as Select from '$lib/components/ui/select';
  import type { Selected } from 'bits-ui';
  import { locale, locales, _ } from 'svelte-i18n';

  const selectLocales: Selected<string>[] = $locales.map((l) => ({
    value: l,
    label: $_('locales.' + l),
  }));
</script>

<Select.Root
  selected={{
    value: $locale,
    label: $_('locales.' + $locale),
  }}
  items={selectLocales}
  onSelectedChange={(s) => ($locale = s?.value)}>
  <Select.Trigger class="w-[180px] bg-popover nav__locale">
    <Select.Value />
  </Select.Trigger>
  <Select.Content>
    {#each $locales as loc}
      <Select.Item value={loc}>{$_('locales.' + loc)}</Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
