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

      <!-- Coach or Trainee? -->
      <div class="form-group">
        <label class="mb-1">Coach or Trainee?</label>
        <br>
        <select v-model="account_type" class="custom-select w-25 mb-5 mx-auto input-mdrn">
          <option value="Trainee" selected>Trainee</option>
          <option value="Coach">Coach</option>
        </select>
      </div>

      <!-- First Name if Coach -->
      <div v-if="account_type=='Coach'" class="form-group">
        <label class="mb-1">First Name</label>
        <input v-model="first_name" class="form-control mb-5 w-25 mx-auto input-mdrn" placeholder="First name">
      </div>

      <!-- Last Name if Coach -->
      <div v-if="account_type=='Coach'" class="form-group">
        <label class="mb-1">Last Name</label>
        <input v-model="last_name" class="form-control mb-5 w-25 mx-auto input-mdrn" placeholder="Last name">
      </div>

      <!-- Submit -->
      <button @click="signUp()" type="button" class="btn btn-lg mb-5 w-25 btn-secondary">{{btnSubmitText}}</button>
      <!-- <button @click="testReq()" type="button" class="btn btn-lg w-25 btn-danger">Test Request</button> -->
    </form>
    

</div>

</template>

<script>
import AmplifyAuthService from '../services/AmplifyAuthService.js';
import LogoHeading from '../components/LogoHeading.vue';
import LogoSubheading from '../components/LogoSubheading.vue';
import AmplifyAPIService from '../services/AmplifyAPIService.js';


export default {
  name: "Register",
  data: function () {
    return {
      username: '',
      password: '',
      password_confirm: '',
      email: '',
      phone_number: '',
      account_type: '',
      first_name: '',
      last_name: '',
      bio: '',
      avatar: '',
      friends: [],
      meal_plans: [],
      workouts: [],
      coaches: [],
      trainees: [],
      settings: [],
      btnSubmitText: 'Submit'
    }
  },
  methods: {
    signUp: function () {
      
      const params = {
        username: this.username,
        password: this.password,
        email: this.email,
        phone_number: this.phone_number,
        account_type: this.account_type,
        first_name: this.first_name,
        last_name: this.last_name,
        bio: this.bio,
        avatar: this.avatar,
        friends: this.friends,
        meal_plans: this.meal_plans,
        workouts: this.workouts
      };

      if(this.password==this.password_confirm){

        // Add user to Cognito
        AmplifyAuthService.signUp(this.username, this.password, this.email, this.phone_number, this.account_type, this.first_name, this.last_name)
        .then(() => {

          // Post to Lambda/DynamoDB
          AmplifyAPIService.postUser(params);

          // Redirect to verify page if no error
          this.$router.push({ name: 'Verify' });

        })
        .catch(err => {
          console.error(err);
        });
      } else {
        // Alert if password mismatch
        window.alert('Passwords do not match');
      }

    },
    testReq: function() {
      AmplifyAPIService.testReq();
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