<template>
<div class="container-lg">
  <LogoHeading>Find a Trainer</LogoHeading>
  <LogoSubheading>Select a coach below to start your fitness journey!</LogoSubheading>

  <!-- Loading gif -->
  <div v-if="coaches.length==0" class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>

  <!-- List of coach cards -->
  <div class="container-lg">
    <CoachCard v-for="coach in coaches" :key="coach">
      <!-- Coach name slot -->
      <template v-slot:coach-name>{{coach.first_name}} {{coach.last_name}}</template>
      <!-- Connect button slot -->
      <template v-slot:btn-coaches>
        <router-link tag="button" :to="`/users/${coach.username}`" id="btn-connect" class="btn mb-2 w-100">Connect</router-link>
        <router-link tag="button" :to="`/users/${coach.username}/reviews`" id="btn-reviews" class="btn btn-secondary mb-2 w-100">Reviews</router-link>
        <router-link tag="button" :to="`/users/${coach.username}/leave-a-review`" id="btn-leavereview" class="btn w-100">Leave a review</router-link>
      </template>
      
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
// import LoadingGif from '../services/AmplifyAPIService.js';

export default {
  name: 'Find a Coach',
  components: {
    CoachCard,
    LogoHeading,
    LogoSubheading,
    // LoadingGif
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
  created: async function() {
    this.getCoaches();
  }
}
</script>

<style>


</style>