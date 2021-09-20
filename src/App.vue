<template>
  <v-app>
    <v-navigation-drawer
        color="black"
        :width="450"
        permanent
        app>
      <v-row align="stretch"  style="margin-top: 70%">
        <v-col class="ml-15" cols="12">
          <h2 class="headline font-weight-bold">
            Senior Software Engineer
          </h2>
        </v-col>
        <v-col class="ml-11" cols="12">
          <v-btn color="grey" plain class="font-weight-bold" :to="{ name: 'Home'}">
            Home
          </v-btn>
        </v-col>
        <v-col class="ml-11" cols="12">
          <v-btn color="grey" plain class="font-weight-bold" :to="{ name: 'About'}">
            About
          </v-btn>
        </v-col>
        <v-col class="ml-11" cols="12">
          <v-btn color="grey" plain class="font-weight-bold" :to="{ name: 'Stack'}">
            Stack
          </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    home:"/"
  }),
});
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo&display=swap');

html, body {
  font-family: 'Archivo', sans-serif;
}

#app {
  font-family: 'Archivo', sans-serif;
}
#app {
  font-family: 'Archivo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
