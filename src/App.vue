<template>
  <VApp>
    <!-- <sideBar></sideBar> -->
    <v-main>
      <SignupLogin />
    </v-main>
  </VApp>
</template>

<script>
// import sideBar from "./components/sideBar.vue";
// import imageGallery from "./components/imageGallery.vue";
import SignupLogin from "./components/SignupLogin.vue";

export default {
  components: {
    // imageGallery,
    // sideBar,
    SignupLogin,
  },
  data: () => ({}),
};
</script>
