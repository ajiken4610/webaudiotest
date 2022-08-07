<template lang="pug">
div
  button(@click="play") hello
</template>

<script setup lang="ts">
const play = () => {
  const osc = useAudioContext().value.createOscillator();
  osc.type = "square";
  osc.frequency.value = 440 * Math.pow(Math.pow(2, 1 / 12), 1);
  osc.connect(useAudioContext().value.destination);
  osc.start();
  setTimeout(() => {
    osc.stop();
    const osc2 = useAudioContext().value.createOscillator();
    osc2.type = "square";
    osc2.frequency.value = 440 * Math.pow(Math.pow(2, 1 / 12), 3);
    osc2.connect(useAudioContext().value.destination);
    osc2.start();
  }, 1000);
};
</script>
