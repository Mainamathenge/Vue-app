<template>
  <div>
    <!-- <sideBar></sideBar> -->
    <div class="camera"><video :srcObject="stream"  autoplay></video></div>
    <div>
      <button v-if="stream" @click="stop">Stop</button>
      <button v-else @click="play">Play</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
// import sideBar from "../components/sideBar.vue";


const stream = ref(null);
const constraints = {
  audio: false,
  video: {
    width: { min: 420, ideal: 500, max: 1920 },
    height: { min: 500, ideal: 500, max: 1080 },
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 5%;
}
</style>
