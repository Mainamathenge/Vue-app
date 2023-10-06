<template>
  <div id="app">
    <v-app>
      <!-- <div>
        <div class="progress-container">
          <progress-linear />
        </div>
        
        <v-container>
          <snack-bar />
        </v-container>
      </div> -->
      <router-view />
    </v-app>
  </div>
</template>

<script>
// import SignupLogin from "./components/SignupLogin.vue";
// import ProgressLinear from "./components/shared/ProgressLinear.vue";
// import snackBar from "./components/shared/snackBar.vue";

export default {
  name: "App",
  components: {
    // ProgressLinear,
    // snackBar,
    // SignupLogin,
  },
  data: () => ({}),
};
</script>

<style>
@import "./assets/css/global.css";

.progress-container {
  /* height: 3px;  */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}
</style>
