<template>
  <v-sheet
    width="300"
    class="mx-auto"
    image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    permanent
  >
    <v-card class="custom-card"> Welcome To CMU DATA collection </v-card>
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

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

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

        <!-- <v-btn color="error" class="mt-4" block @click="reset">
          Reset Form
        </v-btn>

        <v-btn color="warning" class="mt-4" block @click="resetValidation">
          Reset Validation
        </v-btn> -->
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style>
.custom-card {
  background-image: url(~@/assets/prostheticsImages/loginSignup.png);
  background-size: cover;
  backdrop-filter: blur(100px);
  height: 150px;
}
</style>
