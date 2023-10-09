<template>
    <Camera :resolution="{ width: 375, height: 812 }" autoplay>
        <button>I'm on top of the video</button>
    </Camera>
</template>
<script>
import Camera from "simple-vue-camera"

export default {
  components:{
    Camera
  }
}
</script>
