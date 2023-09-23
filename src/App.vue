<template>
  <VApp>
    <sideBar></sideBar>
    <v-main>
      <imageGallery />
    </v-main>
  </VApp>
</template>

<script>
import sideBar from "./components/sideBar.vue";
import imageGallery from "./components/imageGallery.vue";

export default {
  components: {
    imageGallery,
    sideBar,
  },
  data: () => ({
    //
  }),
};
</script>
