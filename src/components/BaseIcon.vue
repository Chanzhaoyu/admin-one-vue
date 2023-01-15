<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    path: string;
    w?: string;
    h?: string;
    size?: string | number | null;
  }>(),
  {
    w: "w-6",
    h: "h-6",
    size: null,
  }
);

const spanClass = computed(
  () => `inline-flex justify-center items-center ${props.w} ${props.h}`
);

const iconSize = computed(() => props.size ?? 16);
</script>

<template>
  <span :class="spanClass">
    <svg
      viewBox="0 0 24 24"
      :width="iconSize"
      :height="iconSize"
      class="inline-block"
    >
      <path fill="currentColor" :d="path" />
    </svg>
    <slot />
  </span>
</template>
