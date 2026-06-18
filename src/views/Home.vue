<template>
  <v-container fluid class="py-16">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" class="mb-8 mb-md-0">
        <h1 class="display-2 font-weight-black mb-4" style="color: #0A192F; line-height: 1.1;">
          Hi! I Am<br>
          <span class="primary--text">Salmon Phapang</span>
        </h1>
        <p class="body-1 grey--text mb-8" style="font-size: 1.1rem; line-height: 1.8;">
          Senior Software Engineer with 9+ years of full-stack development experience, specializing in banking and fintech solutions. Based in Johannesburg, I thrive on building robust, scalable systems that power financial innovation.
        </p>
        <v-btn color="primary" large class="mr-4 font-weight-bold" height="56" :to="{ name: 'About' }">
          Hire Me
        </v-btn>
        <v-btn outlined color="primary" large class="font-weight-bold" height="56" :to="{ name: 'About' }">
          Know More
        </v-btn>
        
        <v-row align="center" class="mt-10">
          <v-col cols="auto" class="d-flex align-center">
            <v-icon color="primary" x-large class="mr-3">mdi-code-braces</v-icon>
            <div>
              <div class="font-weight-bold black--text">Full Stack Developer</div>
              <div class="grey--text">specialized in Banking & Fintech</div>
            </div>
          </v-col>
        </v-row>

        <v-row align="center" class="mt-8">
          <v-col cols="12">
            <span class="grey--text font-weight-medium mr-6">Connect with me:</span>
            <v-icon x-large class="mx-2 grey--text" style="cursor: pointer;">mdi-github</v-icon>
            <v-icon x-large class="mx-2 grey--text" style="cursor: pointer;">mdi-linkedin</v-icon>
            <v-icon x-large class="mx-2 grey--text" style="cursor: pointer;">mdi-twitter</v-icon>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="5" class="text-center">
        <div class="position-relative d-inline-block">
          <div class="position-absolute" style="top: -20px; right: -40px; width: 300px; height: 300px; background: linear-gradient(135deg, #E53935 0%, #7B1FA2 100%); border-radius: 20px; transform: rotate(5deg);"></div>
          <v-img
            src="../assets/profile.jpg"
            contain
            class="rounded-lg"
            style="width: 300px; height: 300px; position: relative; z-index: 1;"
          ></v-img>

          <!-- Stats card -->
          <v-card class="position-absolute" style="bottom: 20px; left: -30px; z-index: 2;" elevation="4">
            <v-card-text class="text-center pa-4">
              <div class="display-3 font-weight-bold primary--text">9+</div>
              <div class="font-weight-medium grey--text">Years Experience</div>
            </v-card-text>
          </v-card>

          <!-- Award card -->
          <v-card class="position-absolute" style="top: 20px; right: -20px; z-index: 2;" elevation="4">
            <v-card-text class="text-center pa-4">
              <v-icon x-large color="primary">mdi-trophy</v-icon>
              <div class="font-weight-medium black--text mt-2">Banking & Fintech</div>
              <div class="font-weight-medium grey--text">Expert</div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home'
});
</script>
