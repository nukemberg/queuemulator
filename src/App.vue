<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title dense>QueueMulator</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-list-item>Model</v-list-item>
      <v-select class="model" density="compact" single-line="true" :items="formulas" label="Model" v-model="formula"></v-select>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <component :is="formula" ></component>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
main {
  width: 80%;
  margin: auto;
}
.control, .info {
  width: 90vh;
  margin: auto;
}
.model {
  margin-top: 25px;
}
</style>

<script>
import Kingman from './components/Kingman.vue'
import MM1 from './components/MM1.vue'
import MMC from './components/MMC.vue'

export default {
  name: 'App',
  data() {
    return {
      formula: 'MM1',
      formulas: ['Kingman', 'MM1', 'MMC']
    }
  },
  components: {
    Kingman,
    MM1,
    MMC
  },
  watch: {
  }
};
</script>
