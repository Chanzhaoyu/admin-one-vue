<script setup lang="ts">
import type { ColorKey } from "@/colors";
import { computed } from "vue";
import { mdiTrendingDown, mdiTrendingUp, mdiTrendingNeutral } from "@mdi/js";
import CardBox from "@/components/CardBox.vue";
import BaseLevel from "@/components/BaseLevel";
import PillTag from "@/components/PillTag.vue";
import UserAvatar from "@/components/UserAvatar.vue";

const props = withDefaults(
  defineProps<{
    name: string;
    login: string;
    date: string;
    progress?: number;
    text?: string;
    type?: ColorKey;
  }>(),
  { progress: 0 }
);

const pillType = computed<ColorKey | string>(() => {
  if (props.type) {
    return props.type;
  }

  if (props.progress) {
    if (props.progress >= 60) {
      return "success";
    }
    if (props.progress >= 40) {
      return "warning";
    }

    return "danger";
  }

  return "info";
});

const pillIcon = computed(() => {
  return {
    success: mdiTrendingUp,
    warning: mdiTrendingNeutral,
    danger: mdiTrendingDown,
    info: null,
  }[pillType.value];
});

const pillText = computed(() => props.text ?? `${props.progress}%`);
</script>

<template>
  <CardBox class="mb-6 last:mb-0" is-hoverable>
    <BaseLevel>
      <BaseLevel type="justify-start">
        <UserAvatar class="w-12 h-12 mr-6" :username="name" />
        <div class="text-center md:text-left overflow-hidden">
          <h4 class="text-xl text-ellipsis">
            {{ name }}
          </h4>
          <p class="text-gray-500 dark:text-slate-400">
            {{ date }} @ {{ login }}
          </p>
        </div>
      </BaseLevel>
      <PillTag
        :color="(pillType as ColorKey)"
        :label="pillText"
        :icon="(pillIcon as string)"
      />
    </BaseLevel>
  </CardBox>
</template>
