<template>
  <v-app>
    <v-app-bar app color="transparent" elevation="0" class="pt-6">
      <v-container>
        <v-toolbar-title class="font-weight-bold black--text" style="font-size: 2rem;">
          Salmon<span class="primary--text">.</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text class="black--text font-weight-medium mx-2" :to="{ name: 'Home' }">
          Home
        </v-btn>
        <v-btn text class="black--text font-weight-medium mx-2" :to="{ name: 'About' }">
          About
        </v-btn>
        <v-btn text class="black--text font-weight-medium mx-2" :to="{ name: 'Stack' }">
          Stack
        </v-btn>
        <v-btn outlined color="primary" class="ml-4 font-weight-bold" :href="'mailto:phapang.salmon@gmail.com'">
          Contact Me
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App'
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

html, body {
  font-family: 'Poppins', sans-serif;
  background-color: #F5F5F5;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
