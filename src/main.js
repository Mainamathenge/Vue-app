import { createApp } from "vue"; // Import createApp from Vue 3
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);

app.mixin({
  created() {
    const userString = localStorage.getItem("user");
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.commit("SET_USER_DATA", userData);
    }

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$store.commit("CLEAR_USER_DATA_INTERCEPTOR");
        }
        return Promise.reject(error);
      }
    );
  },
});

app.mount("#app");
