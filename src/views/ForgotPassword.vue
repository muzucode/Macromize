<template>
  <MainCard>
    <h1 class="display-4">Forgot password?</h1>
    <p class="mt-3 font-italic mb-5">Enter your username and a reset link will be sent to your account's email</p>
    <form>
      <div class="form-group">
        <label for="exampleInputUsername">Username</label>
        <!-- V-model email -->
        <input v-model="username" class="form-control w-25 mx-auto" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Enter username">
      </div>
      <button @click="forgotPassword" type="button" class="btn btn-lg w-25 btn-secondary mt-5">Submit</button>
    </form>
    
  </MainCard>  
</template>

<script>
import MainCard from '../components/MainCard.vue';
import AmplifyAuthService from '../services/AmplifyAuthService.js';


export default {
  name: "Forgot Password",
  data: function () {
    return{
      username: '',
    }
  },
  components: {
    MainCard
  },
  methods: {
    forgotPassword: function (){
      AmplifyAuthService.forgotPassword(this.username);
    }
  }
}
</script>

<style>

</style>