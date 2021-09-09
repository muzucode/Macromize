<template>
  <div class="container w-100 p-5">
    <div class="row" v-for="section in sections" :key="section">Section 1</div>
    <slot></slot>
  </div>
</template>

<script>
// import AmplifyAPIService from '../../services/AmplifyAPIService';
// import AmplifyAPIService from '../../services/AmplifyAPIService.js';

export default {
  name: 'RPM Workouts',
  data: function () {
    return {
      sections: 0
    }
  },
  methods: {
    // Get sections from API with APIService
    // getSections: function () {
    //   // AmplifyAPIService.getUserWorkouts(this.$route.params.username);
    //   // Lambda returns array of workouts for the user
    // }

    
  },
  created: function () {
    // this.sections = this.getSections();
  }
}
</script>

<style>

</style>