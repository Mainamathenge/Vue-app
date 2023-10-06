import axios from "axios";

const baseURL = "https://server.dev.ziara.africa";

export default {
  async register({ state, commit }, credentials) {
    // eslint-disable-next-line no-useless-catch
    try {
      commit("SHOW_PROGRESSBAR", true);
      state.loading.registerBtn.load = true;
      state.loading.registerBtn.disabled = true;
      const response = await axios.post(
        `${baseURL}/api/v1/users/signup`,
        credentials
      );
      commit("SET_USER_DATA", response.data);
      commit("HIDE_PROGRESSBAR");
      commit("SHOW_SNACKBAR", {
        text: "Account created successfully!",
        color: "success",
      });
    } catch (error) {
      commit("HIDE_PROGRESSBAR");
      commit("SHOW_SNACKBAR", {
        text: error.response.data.message,
        color: "error",
      });
      state.loading.registerBtn.load = false;
      state.loading.registerBtn.disabled = false;
    }
  },
  async login({ state, commit }, credentials) {
    // eslint-disable-next-line no-useless-catch
    try {
      commit("SHOW_PROGRESSBAR", true);
      state.loading.loginBtn.load = true;
      state.loading.loginBtn.disabled = true;
      const response = await axios.post(
        `${baseURL}/api/v1/users/login`,
        credentials
      );
      commit("SET_USER_DATA", response.data);
      commit("HIDE_PROGRESSBAR");
      commit("SHOW_SNACKBAR", {
        text: "Logged in successfully!",
        color: "success",
      });
      state.loading.loginBtn.load = false;
      state.loading.loginBtn.disabled = false;
    } catch (error) {
      commit("HIDE_PROGRESSBAR");
      commit("SHOW_SNACKBAR", {
        text: "Invalid email or password. Please try again.",
        color: "error",
      });
      state.loading.loginBtn.load = false;
      state.loading.loginBtn.disabled = false;
    }
  },
  async logout({ commit }) {
    try {
      commit("SHOW_PROGRESSBAR", true);
      await axios.post(`${baseURL}/api/v1/users/logout`);
      commit("CLEAR_USER_DATA");
      commit("HIDE_PROGRESSBAR");
    } catch (error) {
      commit("CLEAR_USER_DATA");
      commit("HIDE_PROGRESSBAR");
    }
  },
  async forgotPassword({ state, commit }, credentials) {
    // eslint-disable-next-line no-useless-catch
    try {
      commit("SHOW_PROGRESSBAR", true);
      state.loading.forgotBtn.load = true;
      state.loading.forgotBtn.disabled = true;
      const response = await axios.post(
        `${baseURL}/api/v1/users/forgotPassword`,
        credentials
      );
      commit("HIDE_PROGRESSBAR");
      commit("SHOW_SNACKBAR", {
        text: response.data.message,
        color: "success",
      });
      state.loading.forgotBtn.proceed = true;
      state.loading.forgotBtn.load = false;
      state.loading.forgotBtn.disabled = false;
    } catch (error) {
      commit("HIDE_PROGRESSBAR");
      commit("SHOW_SNACKBAR", {
        text: error.response.data.message,
        color: "error",
      });
      state.loading.forgotBtn.proceed = false;
      state.loading.forgotBtn.load = false;
      state.loading.forgotBtn.disabled = false;
    }
  },
  async resetPassword({ state, commit }, credentials) {
    // eslint-disable-next-line no-useless-catch
    try {
      commit("SHOW_PROGRESSBAR", true);
      state.loading.resetBtn.load = true;
      state.loading.resetBtn.disabled = true;
      const response = await axios.patch(
        `${baseURL}/api/v1/users/resetPassword/${credentials.token}`,
        {
          password: credentials.password,
          passwordConfirm: credentials.passwordConfirm,
        }
      );
      commit("SET_USER_DATA", response.data);
      commit("HIDE_PROGRESSBAR");
      commit("SHOW_SNACKBAR", {
        text: "Password reset successful!",
        color: "success",
      });
    } catch (error) {
      commit("HIDE_PROGRESSBAR");
      commit("SHOW_SNACKBAR", {
        text: error.response.data.message,
        color: "error",
      });
      state.loading.resetBtn.load = false;
      state.loading.resetBtn.disabled = false;
    }
  },
};
