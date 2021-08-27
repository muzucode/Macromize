<template>
<div class="main">
  <div v-if="username">Current user: {{username}}</div>
  <div id="nav">
    <router-link to="/findacoach">Find a Coach</router-link> | 
    <!-- <router-link to="/calc">Macro Calculator</router-link> -->
  </div>
  <router-view/>
</div>
</template>

<script>
import AmplifyAuthService from './services/AmplifyAuthService.js';

export default {
  name: "App",
  data: function () {
    return {
      signedin: Boolean,
      userid: '',
      username: ''
    }
  },
  methods: {
    signOut: function () {
      AmplifyAuthService.signOut();
    },
    currentSession:  function (){
      // Return current session
      return AmplifyAuthService.currentSession()
        .then(data => {
          console.log('In the app:');
          console.log(data);
          return data;
        });

    },
    currentAuthenticatedUser: function (){
      return AmplifyAuthService.currentAuthenticatedUser()
        .then(data => {
          console.log('In the app:');
          console.log(data);
          return data;
        });
    }
  },
  // async created(){
  //   console.log('USERNAME HERE');

  //   // Sets username of current auth user

  //     this.currentAuthenticatedUser()
  //     .then(data => {
  //       console.log(data.username);
  //       // Sets root variable username
  //       this.$root.username = data.username
  //       return data
  //     })
  //     .catch(err => console.log(err));


    
  //   // console.log(await this.currentAuthenticatedUser().username);
  //   // console.log( await this.currentAuthenticatedUser());
  //   // this.username = await this.currentAuthenticatedUser().username;
  //   // console.log(await this.currentSession());
  // }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
#nav {
    font-family: 'Staatliches', cursive;
    font-size:1.5em;
}
.main{

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
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body{
  background-color:rgb(189, 255, 181);
}
</style>
