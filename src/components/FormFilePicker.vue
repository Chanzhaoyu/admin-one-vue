<script setup lang="ts">
import { mdiUpload } from "@mdi/js";
import { computed, ref, watch } from "vue";
import BaseButton from "@/components/BaseButton.vue";

const props = defineProps({
  modelValue: {
    type: [Object, File, Array],
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: mdiUpload,
  },
  accept: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: "info",
  },
  isRoundIcon: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const root = ref<HTMLInputElement | null>(null);

const file = ref(props.modelValue);

const showFilename = computed(() => !props.isRoundIcon && file.value);

const modelValueProps = computed(() => props.modelValue);

watch(modelValueProps, (value) => {
  file.value = value;

  if (!value) {
    (root.value as any).input.value = null;
  }
});

const upload = (event: Event) => {
  const value =
    (event.target as HTMLInputElement).files ||
    (event as InputEvent)?.dataTransfer?.files;

  file.value = value![0];

  emit("update:modelValue", value![0]);
};
</script>

<template>
  <div class="flex items-stretch justify-start relative">
    <label class="inline-flex">
      <BaseButton
        as="a"
        :class="{ 'w-12 h-12': isRoundIcon, 'rounded-r-none': showFilename }"
        :icon-size="isRoundIcon ? 24 : undefined"
        :label="isRoundIcon ? '' : label"
        :icon="icon"
        :color="color"
        :rounded-full="isRoundIcon"
      />
      <input
        ref="root"
        type="file"
        class="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1"
        :accept="accept"
        @input="upload"
      />
    </label>
    <div
      v-if="showFilename"
      class="px-4 py-2 bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded-r"
    >
      <span class="text-ellipsis line-clamp-1">
        {{ typeof file === "object" && "name" in file ? file.name : "" }}
      </span>
    </div>
  </div>
</template>
