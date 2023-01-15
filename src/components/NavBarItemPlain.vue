<script setup lang="ts">
import { useStyleStore } from "@/stores/style";

withDefaults(
  defineProps<{
    display?: string;
    useMargin?: boolean;
  }>(),
  {
    display: "flex",
  }
);

const styleStore = useStyleStore();
</script>

<template>
  <div
    :class="[
      display,
      styleStore.navBarItemLabelStyle,
      styleStore.navBarItemLabelHoverStyle,
      useMargin ? 'my-2 mx-3' : 'py-2 px-3',
    ]"
    class="items-center cursor-pointer dark:text-white dark:hover:text-slate-400"
  >
    <slot />
  </div>
</template>
