<template>
<div>
  <LogoHeading>Register</LogoHeading>
  <LogoSubheading>Sign up as either a trainer or trainee!</LogoSubheading>

    <form>
      <!-- Username -->
      <div class="form-group">
        <label class="mb-1">Username</label>
        <input v-model="username" class="form-control mb-5 w-25 mx-auto input-mdrn" placeholder="Username">
      </div>

      <!-- Email -->
      <div class="form-group">
        <label class="mb-1">Email</label>
        <input v-model="email" class="form-control mb-5 w-25 mx-auto input-mdrn" placeholder="Email">
      </div>

      <!-- Password -->
      <div class="form-group">
        <label class="mb-1">Password</label>
        <input v-model="password" type="password" class="form-control mb-5 w-25 mx-auto input-mdrn" placeholder="Password">
      </div>

      <!-- Submit -->
      <button @click="signUp()" type="button" class="btn btn-lg w-25 btn-secondary">Submit</button>
    </form>
    

</div>

</template>

<script>
// import MainCard from '../components/MainCard.vue';
import AmplifyAuthService from '../services/AmplifyAuthService.js';
import LogoHeading from '../components/LogoHeading.vue';
import LogoSubheading from '../components/LogoSubheading.vue';


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
      // Redirect to verify page
      .then(this.$router.push({ name: 'Verify' }));
    }
  },
  components: {
    // MainCard,
    LogoHeading,
    LogoSubheading
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');

  button {
    font-family: 'Staatliches', cursive;
  }

  label {
    font-family: 'Staatliches', cursive;
  }
  .input-mdrn {
    background:none;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 2px solid #2c3e50;
    border-radius:0px;
  }
  ::-webkit-input-placeholder {
    font-family: 'Architects Daughter', cursive;
  }

</style>