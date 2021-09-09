<template>
  <div>
    <LogoHeading>Sign In</LogoHeading>
    <LogoSubheading>Sign in below</LogoSubheading>

    <form>

      <!-- Username -->
      <div class="form-group">
        <label class="mb-1">Username</label>
        <input v-model="username" class="form-control w-25 mx-auto input-mdrn mb-5" placeholder="Username">
      </div>

      <!-- Password -->
      <div class="form-group">
        <label class="mb-1">Password</label>
        <input v-model="password" type="password" class="form-control  w-25 mx-auto input-mdrn mb-1" placeholder="Password">
        <small class="form-text text-muted"><router-link to="/forgot-password">Forgot password?</router-link></small>
      </div>

      <button @click="signIn" type="button" class="btn btn-lg w-25 btn-secondary mt-5">Submit</button>
    
    </form>
    
  </div>
</template>

<script>
import LogoHeading from '../components/LogoHeading.vue';
import LogoSubheading from '../components/LogoSubheading.vue';
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
      AmplifyAuthService.signIn(this.username, this.password)
      .then(res => {
        if(res){
          // Update logged in state
          this.$emit('logInEvent');
          // Update current username state (for My Profile tab)
          this.$emit('logInUsernameUpdateEvent');
          this.$router.push({name: 'Find a Coach'});
        }
      })
      .catch(err => {
        console.error(err);
      });
    },
  },
  components: {
    LogoHeading,
    LogoSubheading
  }
}
</script>

<style scoped>
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