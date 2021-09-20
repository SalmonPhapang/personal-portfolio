<template>
  <v-container fluid class="fill-height">
    <v-row>
      <v-col cols="12" md="12">
        <v-img
            height="400"
            aspect-ratio="2"
            src="../assets/code.jpg"
        ></v-img>
      </v-col>
    </v-row>

    <h2 class="headline font-weight-bold">
      Salmon Phapang
    </h2>
    <v-row>
      <v-col cols="12" md="6">
  <p class="grey--text font-weight-bold font-italic">Hello, I am a Senior software engineer with 5+ years in programming based in Johannesburg.
    I am a Full stack type of guy and enjoy learning geek languages, currently super into mobile development. </p>
        <p class="grey--text font-weight-bold font-italic">Super into Anime and animated cartoons, thinks Westworld is the best tv show ever, love spending time with my family and just trying to enjoy life and all its complications. </p>
      </v-col>
      <v-col cols="12"
             offset="1"
             md="5">
        <v-list class="transparent">
          <v-list-item
              class="white--text font-weight-bold"
              v-for="item in details"
              :key="item"
          >
            <v-list-item-title>{{ item.title + ' : ' + item.value }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'About',

  data: () => ({
    details: [
        { title: 'Age', value: '28' },
        { title: 'Location', value: 'Johannesburg' },
        { title: 'Email', value: 'phapang.salmon@gmail.com' },
        { title: 'Phone', value: '0614207080' },
        { title: 'Qualification', value: 'Bsc in Computing' },
        { title: 'Certification', value: 'Certified Oracle Associate' },
        { title: 'Freelance', value: 'Available' },],
  }),
});
</script>
