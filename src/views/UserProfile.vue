<template>
  <div class="container-lg">

    <!-- Logo heading -->
    <div class="row">
      <div class="col">
        <LogoHeading id="username">{{this.$route.params.username}}</LogoHeading>
      </div>
    </div>

    <!-- Logo subheading -->
    <div class="row">
      <div class="col">
        <LogoSubheading id="username">{{userProfileInfo.account_type}}</LogoSubheading>
      </div>
    </div>

    <!-- Profile name heading -->

    <MainCard>
      <div class="row">
        {{userProfileInfo.first_name}} {{userProfileInfo.last_name}}
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
      userProfileInfo: {}
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
#username {

}
</style>