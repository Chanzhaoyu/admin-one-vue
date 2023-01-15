<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import menuAside from "@/menuAside";
import { useMainStore } from "@/stores/main";
import { useStyleStore } from "@/stores/style";
import AsideMenu from "@/components/AsideMenu.vue";
import FooterBar from "@/components/FooterBar.vue";

useMainStore().setUser({
  name: "ZhaoYu Chan",
  email: "chenzhaoyu1994@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/24789441?v=4",
});

const layoutAsidePadding = "xl:pl-60";

const styleStore = useStyleStore();

const router = useRouter();

const isAsideMobileExpanded = ref(false);
const isAsideLgActive = ref(false);

router.beforeEach(() => {
  isAsideMobileExpanded.value = false;
  isAsideLgActive.value = false;
});

const menuClick = () => {};
</script>

<template>
  <div
    :class="{
      dark: styleStore.darkMode,
      'overflow-hidden lg:overflow-visible': isAsideMobileExpanded,
    }"
  >
    <div
      :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
      class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
    >
      <div>Navbar</div>
      <AsideMenu
        :is-aside-mobile-expanded="isAsideMobileExpanded"
        :is-aside-lg-active="isAsideLgActive"
        :menu="menuAside"
        @menu-click="menuClick"
        @aside-lg-close-click="isAsideLgActive = false"
      />
      <slot />
      <FooterBar>
        Get
        <a
          href="https://github.com/Chanzhaoyu/admin-one-vue"
          target="_blank"
          class="text-blue-600"
        >
          Github
        </a>
      </FooterBar>
    </div>
  </div>
</template>
