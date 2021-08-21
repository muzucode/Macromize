<template>
  <MainCard>
    <h1 class="display-4 mb-5">Register</h1>

    <form>
      <div class="form-group">
        <label for="exampleInputUsername">Username</label>
        <!-- V-model username -->
        <input v-model="username" class="form-control w-25 mx-auto" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Enter username">
      </div>
      <!-- V-model email -->
      <div class="form-group">
        <label for="exampleInputEmail1"  class="mt-3">Email address</label>
        <input v-model="email" type="email" class="form-control w-25 mx-auto" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1" class="mt-3">Password</label>
        <!-- V-model password -->
        <input v-model="password" type="password" class="form-control  w-25 mx-auto" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button @click="signUp" type="button" class="btn btn-lg w-25 btn-secondary mt-5">Submit</button>
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
    signUp: function () {
      AmplifyAuthService.signUp(this.username, this.password, this.email, this.phone_number)
      .then(this.$router.push({ name: 'Verify' }));
    }
  },
  components: {
    MainCard,

  }
}
</script>

<style>

</style>