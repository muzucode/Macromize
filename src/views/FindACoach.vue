<template>
<div class="container-lg">
  <LogoHeading>Find a Coach</LogoHeading>
  <LogoSubheading>Select a coach below to start your fitness journey!</LogoSubheading>

  <div class="container-lg">
    <CoachCard v-for="coach in coaches" :key="coach"></CoachCard>
  </div>
</div>
</template>

<script>
import CoachCard from '../components/CoachCard.vue';
import LogoHeading from '../components/LogoHeading.vue';
import LogoSubheading from '../components/LogoSubheading.vue';

export default {
  name: 'Find a Coach',
  components: {
    CoachCard,
    LogoHeading,
    LogoSubheading
  },
  data: function () {
    return {
      coaches: ['2', '2', '2', '2', '2', '2', ]
    }
  },
  methods: {
    // Get coaches from the database
    // Make call to API
    getCoaches: function (){

    }
  }
}
</script>

<style>


</style>