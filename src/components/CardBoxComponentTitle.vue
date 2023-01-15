<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="flex items-center justify-between mb-3">
    <h1 class="text-2xl">
      {{ title }}
    </h1>
    <slot />
  </div>
</template>
