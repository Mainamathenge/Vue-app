<template>
  <v-progress-linear
    v-if="$store.state.progressbar.show"
    :color="$store.state.progressbar.color"
    indeterminate
  ></v-progress-linear>
</template>

<script>
export default {};
</script>

<style></style>
