<template lang="pug">
.container.my-4
  NuxtPage
</template>

<script lang="ts">
const eventName =
  typeof document.ontouchend !== "undefined" ? "touchend" : "mouseup";
document.addEventListener(eventName, initAudioContext);
function initAudioContext() {
  document.removeEventListener(eventName, initAudioContext);
  // wake up AudioContext
  useAudioContext().value.resume();
}
</script>

<style lang="scss">
@import "bootstrap";
</style>

<script setup lang="ts">
import "bootstrap";
</script>
