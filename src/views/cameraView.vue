<template>
  <div>
    <sideBar></sideBar>
    <div class="camera"><video :srcObject="stream" autoplay></video></div>

    <div>
      <button v-if="stream" @click="stop">Stop</button>
      <button v-else @click="play">Play</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import sideBar from "../components/sideBar.vue";
const widthPercentage = 80;
const heightPercentage = 70;

// Calculate the actual pixel values based on the screen size
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;



const stream = ref(null);
const constraints = {
  audio: false,
  video: {
  width: { ideal: (screenWidth * widthPercentage) / 100 },
  height: { ideal: (screenHeight * heightPercentage) / 100 },
    facingMode: "environment",
  },
};
// const constraints = {
  // width: { ideal: (screenWidth * widthPercentage) / 100 },
  // height: { ideal: (screenHeight * heightPercentage) / 100 },
//   facingMode: "environment",
// };

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
  height: 80%;
  width: 70%;
  margin: 5%;
}
</style>
