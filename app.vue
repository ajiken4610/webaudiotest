<template lang="pug">
div
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
