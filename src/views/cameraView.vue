<template>
  <video :srcObject="stream" class="camera" autoplay></video>
  <div>
    <button v-if="stream" @click="stop">Stop</button>
    <button v-else @click="play">Play</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const stream = ref(null);
const constraints = {
  audio: false,
  video: {
    width: { min: 1024, ideal: 1000, max: 1920 },
    height: { min: 576, ideal: 1000, max: 1080 },
    facingMode: "environment",
  },
};

const stop = () => {
  stream.value.getTracks().forEach((track) => {
    console.log("stopping", track);
    track.stop();
  });
  stream.value = null;
};

const play = async () => {
  const frontCamStream = await navigator.mediaDevices.getUserMedia(constraints);
  console.log("streaming", frontCamStream);
  stream.value = frontCamStream;
};

onMounted(() => play());
onBeforeUnmount(() => stop());
</script>

<style scoped>
.camera {
  height: 80%;
  width: 70%;
}
</style>
