<template>
  <div class="scrollable-container">
    <v-sheet
      width="300"
      class="mx-auto"
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      permanent
    >
      <v-card class="custom-card">
        <div class="d-flex align-center justify-center vertical-center">
          Welcome To CMU DATA collection
        </div>
      </v-card>
      <v-form
        ref="form"
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
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
          :counter="10"
          :rules="nameRules"
          label="phone"
          required
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="email"
          :rules="nameRules"
          label="email"
          required
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="PhoneName"
          :rules="nameRules"
          label="PhoneName&Model"
          required
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="YearofManufacture"
          :rules="nameRules"
          label="Year of Manufacture"
          required
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="cameraSpecs"
          :rules="nameRules"
          label="CameraMegapicells"
          required
        ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="Do you agree to the terms and conditions?"
          required
        ></v-checkbox>

        <div class="d-flex flex-column">
          <v-btn color="success" class="mt-4" block @click="validate">
            SUBMIT
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
};
</script>

<style>
.scrollable-container {
  max-height: 650px;
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
