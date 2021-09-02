<template>
<div class="container-lg">
  <LogoHeading>Find a Coach</LogoHeading>
  <LogoSubheading>Select a coach below to start your fitness journey!</LogoSubheading>

  <!-- Loading gif -->
  <div v-if="coaches.length==0" class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>

  <div class="container-lg">
    <CoachCard v-for="coach in coaches" :key="coach">
      <!-- Coach name slot -->
      <template v-slot:coach-name>{{coach.username}}</template>
    </CoachCard>
  </div>

  <!-- <button @click="getCoaches()">Get coaches request</button> -->
</div>
</template>

<script>
import CoachCard from '../components/CoachCard.vue';
import LogoHeading from '../components/LogoHeading.vue';
import LogoSubheading from '../components/LogoSubheading.vue';
import AmplifyAPIService from '../services/AmplifyAPIService.js';

export default {
  name: 'Find a Coach',
  components: {
    CoachCard,
    LogoHeading,
    LogoSubheading
  },
  data: function () {
    return {
      coaches: []
    }
  },
  methods: {
    getCoaches: async function (){
      var coaches = await AmplifyAPIService.getCoaches();
      this.coaches = coaches;
    }
  },
  created: function() {
    this.getCoaches();
  }
}
</script>

<style>


</style>