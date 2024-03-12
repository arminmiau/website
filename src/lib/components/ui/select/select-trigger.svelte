<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import CaretSort from 'svelte-radix/CaretSort.svelte';
  import { cn } from '$lib/utils';

  type $$Props = SelectPrimitive.TriggerProps;
  type $$Events = SelectPrimitive.TriggerEvents;

  let className: $$Props['class'] = undefined;
  export { className as class };
</script>

<SelectPrimitive.Trigger
  class={cn(
    'flex h-7 w-full items-center justify-between whitespace-nowrap rounded-md border border-input px-2 py-1 text-[14px] shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
    className
  )}
  {...$$restProps}>
  <slot />
  <div>
    <CaretSort class="h-3 w-3 opacity-50" />
  </div>
</SelectPrimitive.Trigger>
