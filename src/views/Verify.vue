<template>
  <MainCard>
    <h1 class="display-4">Verify</h1>
    <p class="mt-3 font-italic">Enter your username and the verification code sent to your email below</p>
    <p class="mb-5 font-italic"><router-link to="/verify/resend-verification">Resend verification code</router-link></p>
    <form>
      <div class="form-group">
        <label for="exampleInputUsername">Username</label>
        <!-- V-model email -->
        <input v-model="username" class="form-control w-25 mx-auto" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Enter username">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1" class="mt-3">Verification Code</label>
        <!-- V-model password -->
        <input v-model="verification_code" class="form-control  w-25 mx-auto" id="exampleInputPassword1" placeholder="Verification code">
      </div>
      <button @click="confirmSignUp" type="button" class="btn btn-lg w-25 btn-secondary mt-5">Submit</button>
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
    confirmSignUp: function (){
      AmplifyAuthService.confirmSignUp(this.username, this.verification_code);
    }
  }
}
</script>

<style>

</style>