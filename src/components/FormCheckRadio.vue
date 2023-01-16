<script setup lang="ts">
import { computed } from "vue";

type ModelValue = any[] | string | number | boolean;

const props = withDefaults(
  defineProps<{
    name: string;
    type?: "checkbox" | "radio" | "switch";
    label?: string;
    modelValue?: ModelValue;
    inputValue: string | number | boolean;
  }>(),
  {
    type: "checkbox",
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value?: ModelValue): void;
}>();

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const inputType = computed(() =>
  props.type === "radio" ? "radio" : "checkbox"
);
</script>

<template>
  <label :class="type">
    <input v-model="computedValue" :type="inputType" :name="name" />
    <span class="check" />
    <span class="pl-2">{{ label }}</span>
  </label>
</template>
