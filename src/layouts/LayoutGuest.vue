<script setup lang="ts">
import { useStyleStore } from "@/stores/style";

const styleStore = useStyleStore();
</script>

<template>
  <div :class="{ dark: styleStore.darkMode }">
    <div class="dark:bg-slate-800 dark:text-slate-100">
      <slot />
    </div>
  </div>
</template>
