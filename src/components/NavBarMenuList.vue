<script setup lang="ts">
import type { MenuItem } from "@/menuNavBar";
import NavBarItem from "@/components/NavBarItem.vue";

defineProps<{
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
  <NavBarItem
    v-for="(item, index) in menu"
    :key="index"
    :item="item"
    @menu-click="menuClick"
  />
</template>
