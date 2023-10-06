import { createStore } from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default createStore({
  state: {
    user: null,
    todos: null,
    snackbar: {
      show: false,
      text: "",
      color: "",
    },
    progressbar: {
      show: false,
      color: "#01244A",
    },
    loading: {
      registerBtn: {
        disabled: false,
        load: false,
      },
      loginBtn: {
        disabled: false,
        load: false,
      },
      forgotBtn: {
        disabled: false,
        load: false,
        proceed: false,
      },
      resetBtn: {
        disabled: false,
        load: false,
      },
    },
  },
  getters,
  mutations,
  actions,
});
