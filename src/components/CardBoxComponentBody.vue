<script setup lang="ts">
defineProps<{
  noPadding?: boolean;
}>();
</script>

<template>
  <div class="flex-1" :class="{ 'p-6': !noPadding }">
    <slot />
  </div>
</template>
