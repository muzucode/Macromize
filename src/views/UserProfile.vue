<template  >
  <div class="container-lg">

    <!-- Logo heading -->
    <div class="row">
      <div class="col">
        <LogoHeading>{{userProfileInfo.first_name}} {{userProfileInfo.last_name}}</LogoHeading>
      </div>
    </div>

    <!-- Logo subheading -->
    <div class="row">
      <div class="col">
        <LogoSubheading>{{userProfileInfo.account_type}}</LogoSubheading>
      </div>
    </div>


    <!-- Loading gif -->
    <div v-if="finishedLoading === false" class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>



    <!-- Profile card -->
    <MainCard v-if="finishedLoading"  @updatenow="updateResourceSection">

      <!-- Edit profile link -->
      <div v-if="currentProfileEqualsCurrentAuthUser" class="row">
        <div class="col">
          <router-link  to="/edit-profile" id="right-float">Edit Profile</router-link>
        </div>
      </div>

      <!-- User name -->
      <div class="row">
        <div class="col">
          <h1 class="float-start" id="name">{{userProfileInfo.first_name}} {{userProfileInfo.last_name}}</h1>
        </div>
      </div>

      <hr>

      <!-- AVATAR AND BIO ROW -->
      <div class="row mt-4">
        <!-- AVATAR -->
        <div class="col-3">
          <img class="float-start border border-secondary" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaOvEdKR6pRsnqWLvk7e8Up5cn92iG8-XwV7IgDelbAp-Bf-7gbvIP8-LqVgDaCuYhZg&usqp=CAU" />
        </div>
        <!-- BIO -->
        <div class="col-7 text-start">
          <MutedSectionHeading>Bio:</MutedSectionHeading>
          Sed ut perspiciatt, sed quia amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </div>
      </div>   

    <!-- Bottom Nav -->
    <div class="row mt-3">
      <div class="col">
        <UserProfileNav></UserProfileNav>
      </div>
    </div>

    <!-- Resource Preview -->
    <ResourcePreviewTitle>{{resourcePreviewTitle}}</ResourcePreviewTitle>
    <RPMMealPlans v-if="isVisible_mealplans === true">meal plans</RPMMealPlans>
    <RPMWorkouts v-if="isVisible_workouts === true">workouts</RPMWorkouts>
    <RPMMerch v-if="isVisible_merch === true">merch</RPMMerch>
    <RPMBlog v-if="isVisible_blog === true">blog</RPMBlog>
    
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
import MutedSectionHeading from '../components/UserProfile/MutedSectionHeading.vue';
import ResourcePreviewTitle from '../components/UserProfile/ResourcePreviewTitle.vue';
import RPMMealPlans from '../components/UserProfile/RPMMealPlans.vue';
import RPMWorkouts from '../components/UserProfile/RPMWorkouts.vue';
import RPMMerch from '../components/UserProfile/RPMMerch.vue';
import RPMBlog from '../components/UserProfile/RPMBlog.vue';
// import WorkoutFactory from '../services/Workout/WorkoutFactory.js';


export default {
  name: 'User Profile',
  components: {
    MainCard,
    LogoHeading,
    LogoSubheading,
    UserProfileNav,
    MutedSectionHeading,
    ResourcePreviewTitle,
    RPMMealPlans, RPMWorkouts, RPMMerch, RPMBlog
  },
  data: function () {
    return {
      userProfileInfo: {},
      finishedLoading: false,
      username: this.$route.params.username,
      currentProfileEqualsCurrentAuthUser: Boolean,
      resourcePreviewTitle: '',
      isVisible_workouts : false,
      isVisible_mealplans : false,
      isVisible_merch : false,
      isVisible_blog : false
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
        console.error('Current authenticated user is not the current User Profile');
        console.error(err);
      })

      return response;
    },
    updateResourceSection: function (value) {
      // Update RPM title
      console.log('RPM Title updated');
      this.resourcePreviewTitle = value + ':';
      this.updateRPM(value);
    },
    updateRPM: function (value) {
      // Update RPM
      console.log('RPM Updated');

        // Reset all visibilities to invisible when updated
        this.isVisible_workouts = false;
        this.isVisible_mealplans = false;
        this.isVisible_merch = false;
        this.isVisible_blog = false;


      // Get emitted value then load the corresponding module
      switch (value) {
        case 'Workouts':
          // Query database for workouts
          this.loadWorkouts(this.$route.params.username);
          this.isVisible_workouts = true;
          break;
        case 'Meal Plans':
          this.isVisible_mealplans = true;
          break;
        case 'Merch':
          this.isVisible_merch = true;
          break;
        case 'Blog':
          this.isVisible_blog = true;
          break;
          }
    },
    // loadWorkouts: function (username) {
    //   // Get array of workouts from database
    //   const response = WorkoutFactory.getWorkoutsFromDynamoDB(username)
    //   .then(res => {
    //     console.log(res);
    //     return res;
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
    
    // }
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

#name {
  font-family: 'Josefin Sans', sans-serif;
}
#bs-overrides #right-float {
  float:right;
}
.section-title {
  color: rgb(165, 165, 165);
  font-style: italic;
}
</style>