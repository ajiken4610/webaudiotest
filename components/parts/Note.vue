<template lang="pug">
.input-group
  select.form-select(
    :value="data.option",
    @change="updateModelValueEvent('option', $event)",
    :disabled="!data.on"
  )
    option(v-for="option in options", :value="option") {{ option.toUpperCase() }}
  select.form-select(
    :value="data.height",
    @change="updateModelValueEvent('height', $event)",
    :disabled="!data.on"
  )
    option(v-for="height in heights") {{ height }}
  select.form-select(
    :value="data.snf",
    @change="updateModelValueEvent('snf', $event)",
    :disabled="!data.on"
  )
    option(v-for="snf in snfs") {{ snf }}
  button.btn.btn-outline-secondary(@click="updateModelValue('on', !data.on)") {{ data.on ? data.option.toUpperCase() + data.height + data.snf : "X" }}
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
const options = "cdefgab";
const heights = "0123456789";
const snfs = "#N";
const data = reactive({
  option: props.modelValue.charAt(0),
  height: props.modelValue.charAt(1),
  snf: props.modelValue.charAt(2) === "_" ? "#" : "N",
  on: props.modelValue.charAt(3) !== "x",
});
const updateModelValueEvent = (name: string, value: Event) => {
  data[name] = (value.target as HTMLSelectElement).value;
  emit(
    "update:modelValue",
    data.option + data.height + (data.snf === "#" ? "_" : " ")
  );
};
const updateModelValue = (name: string, value: any) => {
  data[name] = value;
  emit(
    "update:modelValue",
    data.option +
      data.height +
      (data.snf === "#" ? "_" : " ") +
      (data.on ? "" : "x")
  );
};
</script>
