// eslint-disable-next-line vue/multi-word-component-names
<template>
  <v-snackbar
    v-model="$store.state.snackbar.show"
    :color="$store.state.snackbar.color"
  >
    {{ $store.state.snackbar.text }}
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="$store.commit('HIDE_SNACKBAR')">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {};
</script>

<style></style>
