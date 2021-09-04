<template>
  <div class="container-lg">

    <div class="row">
      <div class="col">
        <LogoHeading id="username">{{this.$route.params.id}}</LogoHeading>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <LogoSubheading id="username">User Profile</LogoSubheading>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <MainCard id="name"><LogoHeading>{{this.$route.params.id}}</LogoHeading></MainCard>
      </div>
    </div>

  </div>
</template>

<script>
import MainCard from '../components/MainCard.vue';
import LogoHeading from '../components/LogoHeading.vue';
import LogoSubheading from '../components/LogoSubheading.vue';
export default {
  name: 'User Profile',
  components: {
    MainCard,
    LogoHeading,
    LogoSubheading
  }
}
</script>

<style scoped>
#username {

}
#name {
  float: left;
}
</style>