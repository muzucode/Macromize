<template>
<div class="container-lg">
  <LogoHeading>Register</LogoHeading>
  <LogoSubheading>Sign up as either a coach or trainee!</LogoSubheading>

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
        <input v-model="password" type="password" class="form-control mb-5 w-25 mx-auto input-mdrn">
      </div>

      <!-- Password -->
      <div class="form-group">
        <label class="mb-1">Confirm Password</label>
        <input v-model="password_confirm" type="password" class="form-control mb-5 w-25 mx-auto input-mdrn">
      </div>

      <div class="form-group">
        <label class="mb-1">Coach or Trainee?</label>
        <br>
        <select v-model="account_type" class="custom-select w-25 mb-5 mx-auto input-mdrn">
          <option value="Trainee" selected>Trainee</option>
          <option value="Coach">Coach</option>
        </select>
      </div>

      <!-- Submit -->
      <button @click="signUp()" type="button" class="btn btn-lg w-25 btn-secondary">Submit</button>
    </form>
    

</div>

</template>

<script>
// import MainCard from '../components/MainCard.vue';
import AmplifyAuthService from '../services/AmplifyAuthService.js';
// import AmplifyAPIService from '../services/AmplifyAPIService.js';
import LogoHeading from '../components/LogoHeading.vue';
import LogoSubheading from '../components/LogoSubheading.vue';


export default {
  name: "Register",
  data: function () {
    return {
      username: '',
      password: '',
      password_confirm: '',
      email: '',
      phone_number: '',
      account_type: ''
    }
  },
  methods: {
    signUp: function () {
      // Add user to Cognito and send POST to Lambda
      AmplifyAuthService.signUp(this.username, this.password, this.email, this.phone_number, this.account_type)
      // Redirect to verify page if no error
      .then((res) => {
        console.log(res);
        this.$router.push({ name: 'Verify' });
      })
      .catch(err => {
        console.error(err);
      });
    }
  },
  components: {
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