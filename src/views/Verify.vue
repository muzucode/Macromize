<template>
<div>

  <!-- If not verified -->
  <div v-if="loggedIn === false">
    <LogoHeading>Verify</LogoHeading>
    <LogoSubheading>Enter your username and the verification code sent to your email below</LogoSubheading>
    <p class="mb-5 font-italic"><router-link to="/verify/resend-verification">Resend verification code</router-link></p>
    
    <form>

      <div class="form-group">
        <label>Username</label>
        <input v-model="username" class="form-control mb-5 w-25 mx-auto input-mdrn" placeholder="Username">
      </div>

      <div class="form-group">
        <label class="mt-3">Verification Code</label>
        <input v-model="verification_code" class="form-control mb-5 w-25 mx-auto input-mdrn" placeholder="Verification Code">
      </div>

      <button @click="confirmSignUp()" type="button" class="btn btn-lg w-25 btn-secondary">Submit</button>

    </form>
  </div>

  <!-- If verified -->
  <div v-if="loggedIn === true">
    <LogoHeading>Verification Successful</LogoHeading>
    <LogoSubheading>You are verified!</LogoSubheading>
  </div>

</div>


</template>

<script>

import AmplifyAuthService from '../services/AmplifyAuthService.js';
import LogoHeading from '../components/LogoHeading.vue';
import LogoSubheading from '../components/LogoSubheading.vue';


export default {
  name: "Verify",
  data: function () {
    return {
      username: '',
      verification_code: '',
      loggedIn: false
    }
  },
  components: {
    LogoHeading,
    LogoSubheading
  },
  methods: {
    confirmSignUp: function (){
      // Confirm sign up verification, push to Sign In if correct
      AmplifyAuthService.confirmSignUp(this.username, this.verification_code)
      .then((res) => {
        if(res){
          // Push to Sign In
          this.$router.push({ name: 'Sign In'});
        }
      })
      .catch((err)=> {
        console.error(err);
      })
    }
  },
  created () {
    // Check if a user is logged in on create
    AmplifyAuthService.currentAuthenticatedUser()
    .then((response) => {
      if(response) {
        this.loggedIn = true; 
      } else {
        this.loggedIn = false;
      }})
    .catch((err) => { console.error(err)});
  }
}
</script>

<style scoped>
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

  button {
    font-family: 'Staatliches', cursive;
  }
</style>