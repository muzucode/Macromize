<template>
  <div>
    <LogoHeading>
      Edit Profile - {{currentUser.username}}
      </LogoHeading>
    <MainCard>
      <!-- Logo heading -->
      <div class="row">
        <div class="col-3">
          <div class="row">
            <ProfileBlock :placeholder="'yoo'">Bio</ProfileBlock>
          </div>
          <div class="row mt-4">
            <ProfileBlock>Avatar</ProfileBlock>
          </div>
        </div>
        <div class="col-3">
          <div class="row">
            <ProfileBlock>Description</ProfileBlock>
          </div>
          <div class="row mt-4">
            <ProfileBlock>Hidden (Y/N)</ProfileBlock>
          </div>
        </div>
      </div>


    </MainCard>
  </div>
</template>

<script>
import MainCard from '../components/MainCard.vue';
import AmplifyAuthService from '../services/AmplifyAuthService.js';
import ProfileBlock from '../components/ProfileBlock.vue';
import AmplifyAPIService from '../services/AmplifyAPIService.js';
import LogoHeading from '../components/LogoHeading.vue';

export default {
  name: 'Edit Profile',
  data : function () {
    return {
      currentUser : {},
      placeholders: ['Bio', 'Avatar', 'Description', 'Hidden']
    }
  },
  methods: {
    setInfo: async function () {
      const response = await AmplifyAuthService.currentAuthenticatedUser()
      .then(res => {
        console.log(res);
        console.log(res.username);
        return res;
      });

      return await response
    },
    authenticatedUser: function () {
      console.log(AmplifyAuthService.currentSession());
      return AmplifyAuthService.currentSession();
    },
    getUserByUsername: function (query) {
      const response = AmplifyAPIService.getUserByUsername(query)
      .then(res => {
        return res;
      });

      return response;
    },
  },
  components: {
    MainCard,
    ProfileBlock, 
    LogoHeading
  },
  created: async function(){

    this.currentUser = await this.getUserByUsername('nerox');

  }
}
</script>

<style>

</style>