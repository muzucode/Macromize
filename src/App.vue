<template>
<div class="main">
  <div v-if="username">Current user: {{username}}</div>
  <div id="nav">
    <router-link to="/findacoach">Find a Coach</router-link> | 
    <router-link to="/calc">Macro Calculator</router-link>  |
    <router-link v-if="loggedIn === false" to="/register">Register</router-link><span v-if="loggedIn === false">  |  </span>
    <router-link v-if="loggedIn === false" to="/SignIn">Sign In</router-link><span v-if="loggedIn === false">  |</span>
    <router-link @click="signOut" v-if="loggedIn === true" to="/SignOut">Sign Out</router-link><span v-if="loggedIn === true"></span>

  </div>
  <router-view @logInEvent="updateLoginState"/>
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
  padding: 30px;
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
