<template lang="pug">
div
  button.btn.btn-primary(@click="play") Play
  PartsPhrase(v-model="notes")
  button.btn.btn-primary(
    @click="notes = notes.concat(notes.slice(notes.length - 8, notes.length))"
  ) +
</template>

<script setup lang="ts">
import { AudioNote } from "~~/composables/AudioData";
const audioData = reactive<AudioNote[]>([]);
const notes = ref([
  "e4 ",
  "e4 ",
  "e4 ",
  "e4 ",
  "d4 ",
  "c4 ",
  "e4 ",
  "d4 ",
  "c4 ",
  "c4 x",
  "c5 ",
  "c5 ",
  "a4 ",
  "c5 ",
  "c5 ",
  "c5 x",
  "g4 ",
  "g4 ",
  "g4 ",
  "g4 ",
  "e4 ",
  "e4 ",
  "c4 ",
  "c4 ",
  "d4 ",
  "d4 ",
  "d4 ",
  "d4 ",
  "d4 ",
  "d4 ",
  "c5 x",
  "c5 x",
  "e4 ",
  "e4 ",
  "e4 ",
  "e4 ",
  "d4 ",
  "c4 ",
  "e4 ",
  "d4 ",
  "c4 ",
  "c4 x",
  "c5 ",
  "c5 ",
  "a4 ",
  "c5 ",
  "c5 ",
  "c5 x",
  "g4 ",
  "g4 ",
  "e4 ",
  "c4 ",
  "d4 ",
  "d4 x",
  "d4 ",
  "d4 x",
  "c4 ",
  "c4 ",
  "c4 ",
  "c4 ",
  "c4 ",
  "c4 ",
  "c5 x",
  "c5 x",
]);
watch(
  notes,
  () => {
    audioData.length = 0;
    for (const note of notes.value) {
      audioData.push({
        freq: note.charAt(3) === "x" ? 0 : getFrequency(note),
        duration: 250,
      });
    }
  },
  { immediate: true }
);

const play = () => {
  const osc = useAudioContext().value.createOscillator();
  osc.type = "square";
  osc.connect(useAudioContext().value.destination);
  const playLoop = (index = 0) => {
    console.log((osc.frequency.value = audioData[index].freq));
    if (audioData[index + 1]) {
      setTimeout(() => playLoop(index + 1), audioData[index].duration);
    } else {
      setTimeout(() => osc.stop(), audioData[index].duration);
    }
  };
  osc.start();
  playLoop();
};
</script>
