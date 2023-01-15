<script setup lang="ts">
import type { ColorKey } from "@/colors";
import { colorsText, colorsBgLight } from "@/colors";
import BaseIcon from "@/components/BaseIcon.vue";

withDefaults(
  defineProps<{
    icon: string;
    color: ColorKey;
    w?: string;
    h?: string;
    bg?: boolean;
  }>(),
  {
    w: "w-12",
    h: "h-12",
  }
);
</script>

<template>
  <BaseIcon
    :path="icon"
    :w="w"
    :h="h"
    size="24"
    class="rounded-full"
    :class="
      bg
        ? colorsBgLight[color]
        : [colorsText[color], 'bg-gray-50 dark:bg-slate-800']
    "
  />
</template>
