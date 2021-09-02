<template>
  <div class="container-lg">
    <MainCard>
      <h1>{{this.$route.params.id}} Profile</h1>
    </MainCard>
  </div>
</template>

<script>
import MainCard from '../components/MainCard.vue';
export default {
  name: 'User Profile',
  components: {
    MainCard
  }
}
</script>

<style>

</style>