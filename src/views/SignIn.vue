<template>
  <MainCard>
    <h1 class="display-4 mb-5">Sign In</h1>

    <form>
      <div class="form-group">
        <label for="exampleInputUsername">Username</label>
        <!-- V-model email -->
        <input v-model="username" class="form-control w-25 mx-auto" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Enter username">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1" class="mt-3">Password</label>
        <!-- V-model password -->
        <input v-model="password" type="password" class="form-control  w-25 mx-auto" id="exampleInputPassword1" placeholder="Password">
        <small id="emailHelp" class="form-text text-muted"><router-link to="/forgot-password">Forgot password?</router-link></small>
      </div>
      <button @click="signIn" type="button" class="btn btn-lg w-25 btn-secondary mt-5">Submit</button>
    </form>
    
  </MainCard>
</template>

<script>
import MainCard from '../components/MainCard.vue';
import AmplifyAuthService from '../services/AmplifyAuthService.js';

export default {
  name: "Register",
  data: function () {
    return {
      username: '',
      password: '',
      email: '',
      phone_number: ''
    }
  },
  methods: {
    signIn: function () {
      AmplifyAuthService.signIn(this.username, this.password);
    }
  },
  components: {
    MainCard,

  }
}
</script>

<style>

</style>