<template>
<div class="main">
  <div class="container p-3 w-100 bg-white">
    <div id="nav">
      <router-link to="/findacoach">Find a Coach</router-link> | 
      <router-link to="/calc">Macro Calculator</router-link>  |
      <router-link v-if="loggedIn === true" :to="`/users/${username}`">Profile</router-link><span v-if="loggedIn === true">  |  </span>
      <router-link v-if="loggedIn === false" to="/register">Register</router-link><span v-if="loggedIn === false">  |  </span>
      <router-link v-if="loggedIn === false" to="/SignIn">Sign In</router-link><span v-if="loggedIn === false">  |</span>
      <router-link @click="signOut" v-if="loggedIn === true" to="/SignOut">Sign Out</router-link><span v-if="loggedIn === true"></span>
    </div>
  </div>
  <router-view @logInEvent="updateLoginState()" @logInUsernameUpdateEvent="updateMyProfileState()"/>
</div>
</template>

<script>
import AmplifyAuthService from './services/AmplifyAuthService.js';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

export default {
  name: "App",
  data: function () {
    return {
      username: '',
      loggedIn: false
    }
  },
  methods: {
    signOut: function () {
      AmplifyAuthService.signOut();
      this.loggedIn = false;
    },
    updateLoginState: function () {
      this.loggedIn = true;
    },
    updateMyProfileState: function () {
      // Set MyProfile URL to the current user
      AmplifyAuthService.currentAuthenticatedUser()
      .then((res) => {
        return res.username;
      })
      .then((res) => {
        // Set global username to the currently logged-in user
        // Tethered to the profile menu tab
        this.$root.username = res;
      })
      .catch((err) => { console.error(err)});
    },
  },
  created () {
    // Check if a user is logged in on create
    AmplifyAuthService.currentAuthenticatedUser()
    .then((res) => {
      if(res) {
        this.loggedIn = true;
        return res.username;
      } else {
        this.loggedIn = false;
      }})
    .then((res) => {
      // Set global username to the currently logged-in user
      // Tethered to the profile menu tab
      this.$root.username = res;
    })
    .catch((err) => { console.error(err)});
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
#nav {
    font-family: 'Staatliches', cursive;
    font-size:1.5em;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}

body{
  background-color:rgb(189, 255, 181);
}
</style>
