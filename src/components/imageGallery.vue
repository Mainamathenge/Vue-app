<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/valid-v-for -->
<template>
  <v-card class="mx-5 my-2 pa-3">
    <v-row no-gutters>
      <VCol v-for="n in 200" cols="4" sm="2" md="2" lg="1">
        <VCard class="mx-1 my 1">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/50/30?image=${n * 5 + 10}`"
            aspect-ratio="1"
            cover
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </VCard>
      </VCol>
    </v-row>
  </v-card>
</template>
