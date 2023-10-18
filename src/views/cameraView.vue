<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<template>
  <div>
    <!-- <sideBar></sideBar> -->
    <div class="camera"><video :srcObject="stream"  autoplay></video></div>
    <div class="capture"><button v-if="stream" @click="captureScreenshot">capture</button></div>
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
const screenshotCanvas = ref(document.createElement("canvas"));
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

const captureScreenshot = () => {
  // eslint-disable-next-line no-undef
  if (stream.value && screenshotCanvas.value) {
    const video = document.createElement("video");
    video.srcObject = stream.value;
    video.addEventListener("loadedmetadata", () => {
      // eslint-disable-next-line no-undef
      screenshotCanvas.value.width = video.videoWidth;
      // eslint-disable-next-line no-undef
      screenshotCanvas.value.height = video.videoHeight;
      // eslint-disable-next-line no-undef
      screenshotCanvas.value
        .getContext("2d")
        .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      // You can save the screenshot as an image file here
      // eslint-disable-next-line no-undef
      const imageDataURL = screenshotCanvas.value.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imageDataURL;
      link.download = "screenshot.png";
      link.click();
    });
  }
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
.capture {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
