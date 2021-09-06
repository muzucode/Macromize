<template>
  <div class="container-lg">

    <!-- Logo heading -->
    <div class="row">
      <div class="col">
        <LogoHeading id="username">{{userProfileInfo.first_name}} {{userProfileInfo.last_name}}</LogoHeading>
      </div>
    </div>

    <!-- Logo subheading -->
    <div class="row">
      <div class="col">
        <LogoSubheading id="username">{{userProfileInfo.account_type}}</LogoSubheading>
      </div>
    </div>


    <!-- Loading gif -->
    <div v-if="finishedLoading === false" class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>

    <!-- Profile card -->
    <MainCard v-if="finishedLoading">
      <div class="row">
        <div class="col">
          <h1 id="left-float">{{userProfileInfo.first_name}} {{userProfileInfo.last_name}}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h4 id="left-float" class="muted">User</h4>
        </div>
      </div>
    </MainCard>

  </div>
</template>

<script>
import MainCard from '../components/MainCard.vue';
import LogoHeading from '../components/LogoHeading.vue';
import LogoSubheading from '../components/LogoSubheading.vue';
import AmplifyAPIService from '../services/AmplifyAPIService.js';

export default {
  name: 'User Profile',
  components: {
    MainCard,
    LogoHeading,
    LogoSubheading
  },
  data: function () {
    return {
      userProfileInfo: {},
      finishedLoading: false
    }
  },
  methods: {
    getUserByUsername: function (query) {
      const response = AmplifyAPIService.getUserByUsername(query)
      .then(res => {
        return res;
      });

      return response;
    },
  },
  created: async function(){
    // Get user with query string = URL params username
    const response = this.getUserByUsername(this.$route.params.username)
    .then(res => {
      console.log('^User retrieved from DynamoDB^');
      // Receive an array of items back containing the single item
      this.finishedLoading = true;
      return res.items[0];
    })
    .catch(err => {
      console.error(err);
    });

    // Set user profile info equal to DB response
    this.userProfileInfo = await response;
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
#username {

}
#bs-overrides #left-float {
  font-family: 'Josefin Sans', sans-serif;
  float:left;
}
.muted {
  color: rgb(165, 165, 165)
}
</style>