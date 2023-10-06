import { createRouter, createWebHistory } from "vue-router";
import signUp from "../views/signUpView.vue";
import cameraApp from "../views/cameraView.vue";
import gallery from "../views/galleyView.vue";

const routes = [
  {
    path: "/",
    name: "signupView",
    component: signUp,
  },
  {
    path: "/about",
    name: "camera",
    component: cameraApp,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: gallery,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  }
  next();
});

export default router;
