<template>
  <MainCard>
    <h1 class="display-4">Resend Verification Code</h1>
    <p class="mt-3 mb-5 font-italic">Enter your username and click <b>resend</b></p>
    <form>
      <div class="form-group">
        <label for="exampleInputUsername">Username</label>
        <!-- V-model username -->
        <input v-model="username" class="form-control w-25 mx-auto" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Enter username">
      </div>
      <button @click="resendConfirmationCode" type="button" class="btn btn-lg w-25 btn-secondary mt-5">Resend</button>

    </form>
    
  </MainCard>  
</template>

<script>
import MainCard from '../components/MainCard.vue';
import AmplifyAuthService from '../services/AmplifyAuthService.js';


export default {
  name: "Verify",
  data: function () {
    return{
      username: '',
      verification_code: ''
    }
  },
  components: {
    MainCard
  },
  methods: {
    resendConfirmationCode: function (){
      AmplifyAuthService.resendConfirmationCode(this.username);
    }
  }
}
</script>

<style>

</style>