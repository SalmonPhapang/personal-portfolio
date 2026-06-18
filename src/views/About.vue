<template>
  <v-container fluid class="py-16">
    <v-row justify="center" class="mb-16">
      <v-col cols="12" md="10">
        <h1 class="display-3 font-weight-black text-center mb-4" style="color: #0A192F;">
          About Me
        </h1>
        <p class="body-1 grey--text text-center" style="font-size: 1.1rem;">
          Get to know more about my professional journey
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-16">
      <v-col cols="12" md="10">
        <v-card elevation="0" class="rounded-lg" style="background: #ffffff;">
          <v-card-text class="pa-10">
            <v-row>
              <v-col cols="12" md="6" class="mb-6 mb-md-0">
                <p class="body-1" style="color: #333333; line-height: 1.8;">
                  Hello, I'm a Senior Software Engineer with 9+ years of full-stack development experience, specializing in banking and fintech solutions. Based in Johannesburg, I thrive on building robust, scalable systems that power financial innovation.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <p class="body-1" style="color: #333333; line-height: 1.8;">
                  When I'm not coding, you'll find me diving into anime, debating whether Westworld is the greatest show ever made, or spending quality time with my family – trying to enjoy life and all its wonderful complications.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-16">
      <v-col cols="12" md="10">
        <h2 class="headline font-weight-bold mb-8" style="color: #0A192F;">Experience</h2>
        <v-timeline align="start" line-color="#E53935">
          <v-timeline-item
            v-for="(exp, index) in experience"
            :key="index"
            dot-color="#E53935"
            size="large"
          >
            <v-card elevation="2" class="rounded-lg">
              <v-card-title class="font-weight-bold" style="color: #0A192F;">
                {{ exp.company }}
              </v-card-title>
              <v-card-subtitle class="primary--text font-weight-medium">
                {{ exp.title }}
              </v-card-subtitle>
              <v-card-text>
                <div class="grey--text">{{ exp.period }}</div>
                <div class="grey--text mt-1">{{ exp.location }}</div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="8">
        <h2 class="headline font-weight-bold mb-8" style="color: #0A192F;">Education</h2>
        <v-card elevation="2" class="rounded-lg">
          <v-card-title class="font-weight-bold" style="color: #0A192F;">
            Belgium Campus
          </v-card-title>
          <v-card-subtitle class="primary--text font-weight-medium">
            Bachelor of Science (BSc), Information Technology
          </v-card-subtitle>
          <v-card-text class="grey--text">
            2012 - 2015
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'About',

  data: () => ({
    experience: [
      {
        company: 'Capitec Bank',
        title: 'Front End Engineer',
        period: 'January 2022 - November 2025 (3 years 11 months)',
        location: 'Stellenbosch'
      },
      {
        company: 'Analytical Technologies',
        title: 'Software Engineer',
        period: 'February 2019 - November 2021 (2 years 10 months)',
        location: 'Johannesburg Area, South Africa'
      },
      {
        company: 'MFS Africa',
        title: 'Java Developer',
        period: 'March 2018 - November 2018 (9 months)',
        location: '33 Hoord, Braamfontein'
      },
      {
        company: 'FNB South Africa',
        title: 'Java Developer',
        period: 'February 2017 - March 2018 (1 year 2 months)',
        location: 'Sandton'
      },
      {
        company: 'FNB South Africa',
        title: 'Business Support Specialist',
        period: 'March 2016 - March 2017 (1 year 1 month)',
        location: 'South Africa'
      },
      {
        company: 'FNB South Africa',
        title: 'Java Developer',
        period: 'November 2014 - November 2015 (1 year 1 month)',
        location: 'South Africa'
      }
    ]
  }),
});
</script>
