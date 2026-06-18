<template>
  <v-container fluid class="py-16">
    <v-row justify="center" class="mb-16">
      <v-col cols="12" md="10">
        <h1 class="display-3 font-weight-black text-center mb-4" style="color: #0A192F;">
          My Tech Stack
        </h1>
        <p class="body-1 grey--text text-center" style="font-size: 1.1rem;">
          Technologies I use to build amazing products
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="5" lg="3" class="mb-8" v-for="(category, index) in categories" :key="index">
        <v-card elevation="4" class="rounded-lg h-100" style="background: #ffffff;">
          <v-card-title class="text-center pb-2 pt-6">
            <v-icon x-large color="primary" class="mb-3">{{ category.icon }}</v-icon>
            <h3 class="headline font-weight-bold" style="color: #0A192F;">{{ category.title }}</h3>
          </v-card-title>
          <v-card-text class="pt-0">
            <div class="d-flex flex-wrap justify-center">
              <v-chip
                v-for="(item, i) in category.items"
                :key="i"
                class="ma-1"
                outlined
                color="primary"
                small
              >
                {{ item }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Stack',

  data: () => ({
    categories: [
      {
        title: 'Front End',
        icon: 'mdi-laptop',
        items: ['Vue.js', 'Vuetify', 'HTML 5', 'CSS 3', 'JavaScript', 'TypeScript', 'Flutter', 'React']
      },
      {
        title: 'Back End',
        icon: 'mdi-server',
        items: ['Java', 'Spring Boot', 'Hibernate', 'SQL', 'MySQL', 'Node.js', 'REST APIs']
      },
      {
        title: 'DevOps & Cloud',
        icon: 'mdi-cloud-outline',
        items: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Git', 'Linux']
      },
      {
        title: 'Banking & Fintech',
        icon: 'mdi-bank',
        items: ['Payment Systems', 'Core Banking', 'ISO 8583', 'SWIFT', 'KYC/AML', 'PCI DSS']
      }
    ]
  }),
});
</script>
