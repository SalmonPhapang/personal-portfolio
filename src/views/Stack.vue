<template>
  <v-container fluid class="fill-height">
    <v-row class="text-center" justify="center" align="center">
      <v-col cols="12"
             md="3">
       <v-card elevation="2" height="520" color="white">
         <v-card-title class="justify-center black--text font-weight-bold">Front End</v-card-title>
         <v-img
             class="mx-lg-auto"
             width="80"
             src="../assets/ux-interface.png"
         ></v-img>
         <v-card-text class="text--primary">
           <v-list class="transparent">
             <v-list-item
                 class="black--text font-weight-bold"
                 v-for="item in frondEnd"
                 :key="item"
             >
               <v-list-item-title>{{ item }}</v-list-item-title>
             </v-list-item>
           </v-list>
         </v-card-text>
       </v-card>
      </v-col>
      <v-col cols="12"
             md="3">
        <v-card elevation="2" height="520" color="white">
          <v-card-title class="justify-center black--text font-weight-bold">Back End</v-card-title>
          <v-img
              class="mx-lg-auto"
              width="80"
              src="../assets/web-development.png"
          ></v-img>
          <v-card-text class="text--primary">
            <v-list class="transparent">
              <v-list-item
                  class="black--text font-weight-bold"
                  v-for="item in backEnd"
                  :key="item"
              >
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12"
             md="3">
        <v-card elevation="2" height="520" color="white">
          <v-card-title class="justify-center black--text font-weight-bold">Tools</v-card-title>
          <v-img
              class="mx-lg-auto"
              width="80"
              src="../assets/settings.png"
          ></v-img>
          <v-card-text class="text--primary">
            <v-list class="transparent">
              <v-list-item
                  class="black--text font-weight-bold"
                  v-for="item in tools"
                  :key="item"
              >
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
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
      frondEnd: ['Vue','Vuetify', 'HTML 5', 'CSS', 'JavaScript', 'Flutter'],
      backEnd: ['java', 'Sql', 'Hibernate', 'Spring boot', 'Wildfly', 'Junit','Firebase cloud'],
      tools: ['Jenkins', 'Git', 'Maven', 'Jira', 'Confluence', 'UML'],
  }),
});
</script>
