<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" lg="3" v-for="n in 4" :key="n">
          <CardComponent />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
import CardComponent from './components/CardComponent.vue';
</script>

<style></style>
