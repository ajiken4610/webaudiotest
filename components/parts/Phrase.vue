<template lang="pug">
.row
  .col-lg-12.col-xl-3(v-for="(note,index) of modelValue")
    PartsNote(:modelValue="note", @update:modelValue="update(index, $event)")
</template>
<script setup lang="ts">
const props = defineProps<{ modelValue: string[] }>();
const emit = defineEmits<{ (e: "update:modelValue", value: string[]): void }>();
const update = (index, value) => {
  const copied = [...props.modelValue];
  copied[index] = value;
  emit("update:modelValue", copied);
};
</script>
