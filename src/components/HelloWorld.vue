<template>
  <v-container fluid class="fill-height">
    <v-row class="text-center" justify="center" align="center">
      <v-col cols="12"
             md="3">
        <div class="round-image"></div>
      </v-col>
      <v-col cols="12"
             md="5">
        <h1 class="display-2 font-weight-bold">
          Salmon Phapang
        </h1>
        <p class="mt-5 font-weight-bold grey--text">Software engineer based in Johannesburg, really into Anime and obsessed with re-watching TENET.</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>

.round-image {
  width: 250px;
  height: 250px;
  background-image: url('../assets/profile.jpg');
  background-size: cover;
  display: block;
  border-radius: 125px;
  -webkit-border-radius: 125px;
  -moz-border-radius: 125px;
}
</style>
<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  })
</script>
