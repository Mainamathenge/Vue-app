<template>
  <div class="scrollable-container">
    <v-sheet
      width="300"
      class="mx-auto"
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      permanent
    >
      <div style="margin-bottom: 20px"></div>
      <v-card class="custom-card">
        <div class="d-flex align-center justify-center vertical-center">
          Welcome To CMU DATA collection
        </div>
      </v-card>
      <v-form
        ref="form"
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
        @submit.prevent="signUp"
      >
        <v-text-field
          v-model="FullName"
          :rules="nameRules"
          label="FullName"
          required
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="PhoneNumber"
          :counter="13"
          label="phone"
          required
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="email"
          required
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="phoneName"
          label="PhoneName&Model"
          required
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="ManufDate"
          :rules="nameRules"
          label="Year of Manufacture"
          required
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="cameraMpx"
          label="CameraMegapixells"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="password"
          required
          append-icon="mdi-eye-off"
        ></v-text-field>
        <v-text-field
          v-model="passwordConfirm"
          @input="validatePasswords"
          label="Confirm your password"
          required
          append-icon="mdi-eye-off"
        ></v-text-field>

        <div class="d-flex flex-column">
          <v-btn color="success" class="mt-4" block type="submit">
            signUp
          </v-btn>
          <div style="margin-bottom: 20px"></div>
        </div>
        <v-spacer></v-spacer>
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      phoneName: "",
      PhoneNumber: "",
      FullName: "",
      ManufDate: "",
      cameraMpx: "",
      passwordsMatch: false,
      emailRules: [
        (value) => !!value || "Email is required.",
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Provide a valid email!";
        },
        (value) =>
          value.indexOf(".") <= value.length - 3 ||
          "Email should contain a valid domain extension.",
      ],
      passwordRules: [
        (value) => !!value || "Password is required.",
        (value) => value.length >= 8 || "Password must contain 8 character",
      ],
      nameRules: [(value) => !!value || "Please enter a valid name."],
      progress: false,
    };
  },
  methods: {
    async signUp() {
      this.progress = true;
      await this.$store.dispatch("register", {
        email: this.email,
        FullName: this.FullName,
        manufDate: this.ManufDate,
        phoneName: this.phoneName,
        cameraMpx: this.cameraMpx,
        PhoneNumber: this.PhoneNumber,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
      });
      if (this.$store.state.user) {
        this.$router.push({ name: "gallery" });
      }
    },

    validatePasswords() {
      this.passwordsMatch = this.password === this.passwordConfirm;
    },
  },
};
</script>

<style>
.scrollable-container {
  height: 100%;
  overflow-y: auto;
}
.custom-card {
  background-image: url(~@/assets/prostheticsImages/loginSignup.png);
  background-size: cover;
  backdrop-filter: blur(100px);
  height: 150px;
}
.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.vertical-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
