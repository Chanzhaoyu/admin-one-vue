<script setup lang="ts">
import type { MenuItem } from "@/menuAside";
import AsideMenuItem from "@/components/AsideMenuItem.vue";

defineProps<{
  isDropdownList?: boolean;
  menu: MenuItem[];
}>();

const emit = defineEmits<{
  (e: "menu-click", event: MouseEvent, item: MenuItem): void;
}>();

const menuClick = (event: MouseEvent, item: MenuItem) => {
  emit("menu-click", event, item);
};
</script>

<template>
  <ul>
    <AsideMenuItem
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      :is-dropdown-list="isDropdownList"
      @menu-click="menuClick"
    />
  </ul>
</template>
