<template>
  <div class="container-lg">

    <!-- Logo heading -->
    <div class="row">
      <div class="col">
        <LogoHeading id="username">{{userProfileInfo.first_name}} {{userProfileInfo.last_name}}</LogoHeading>
      </div>
    </div>

    <!-- Logo subheading -->
    <div class="row">
      <div class="col">
        <LogoSubheading id="username">{{userProfileInfo.account_type}}</LogoSubheading>
      </div>
    </div>


    <!-- Loading gif -->
    <div v-if="finishedLoading === false" class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>



    <!-- Profile card -->
    <MainCard v-if="finishedLoading">

      <!-- Edit profile link -->
      <div v-if="currentProfileEqualsCurrentAuthUser" class="row">
        <div class="col">
          <router-link  to="/edit-profile" id="right-float">Edit Profile</router-link>
        </div>
      </div>

      <!-- User name -->
      <div class="row">
        <div class="col">
          <h1 id="left-float">{{userProfileInfo.first_name}} {{userProfileInfo.last_name}}</h1>
        </div>
      </div>

      <!-- User subheading -->
      <div class="row">
        <div class="col">
          <h4 id="left-float" class="muted">User</h4>
        </div>
      </div>

      <!-- AVATAR AND BIO ROW -->
      <div class="row">
        <!-- AVATAR -->
        <div class="col-3">
          <img class="float-start border border-secondary my-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaOvEdKR6pRsnqWLvk7e8Up5cn92iG8-XwV7IgDelbAp-Bf-7gbvIP8-LqVgDaCuYhZg&usqp=CAU" />
        </div>
        <!-- BIO -->
        <div class="col-7 text-start">
          <!-- {{userProfileInfo.bio}} -->
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </div>
      </div>   

    <div class="row mt-3">
      <div class="col">
        <UserProfileNav ></UserProfileNav>
      </div>
    </div>

      
    </MainCard>

  </div>
</template>

<script>
import MainCard from '../components/MainCard.vue';
import LogoHeading from '../components/LogoHeading.vue';
import LogoSubheading from '../components/LogoSubheading.vue';
import AmplifyAPIService from '../services/AmplifyAPIService.js';
import AmplifyAuthService from '../services/AmplifyAuthService.js';
import UserProfileNav from '../components/UserProfileNav.vue';


export default {
  name: 'User Profile',
  components: {
    MainCard,
    LogoHeading,
    LogoSubheading,
    UserProfileNav
  },
  data: function () {
    return {
      userProfileInfo: {},
      finishedLoading: false,
      username: this.$route.params.username,
      currentProfileEqualsCurrentAuthUser: Boolean
    }
  },
  methods: {
    getUserByUsername: function (query) {
      const response = AmplifyAPIService.getUserByUsername(query)
      .then(res => {
        return res;
      });

      return response;
    },
    userProfileIsCurrentUser: function () {
      const response = AmplifyAuthService.currentAuthenticatedUser()
      .then (res => {
        // console.log(res);
        return res;
      })
      .then(res => {
        // console.log('made it to stage 2');
        if(res.username === this.$route.params.username){
          // console.log(true);
          return true;
        } else {
          // console.log(false);
          return false;
        }
      })
      .catch(err => {
        console.error(err);
      })

      return response;
    }

  },

  created: async function(){
    // Get user with query string = URL params username
    const response = this.getUserByUsername(this.$route.params.username)
    .then(res => {
      console.log('^User retrieved from DynamoDB and logged by Lambda res.json^');

      this.finishedLoading = true;

      // Receive an array of items back containing the single item
      const user = res;

      return user;
    })
    .catch(err => {
      console.error(err);
    });
    // Set user profile info equal to DB response
    this.userProfileInfo = await response;

    // Check if user profile belongs to current user (for displaying edit profile feature)
    this.currentProfileEqualsCurrentAuthUser = await this.userProfileIsCurrentUser();
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
#username {

}
#bs-overrides #right-float {
  float:right;
}
#bs-overrides #left-float {
  font-family: 'Josefin Sans', sans-serif;
  float:left;
}
.muted {
  color: rgb(165, 165, 165)
}
</style>