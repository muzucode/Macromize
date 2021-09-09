<template>
  <div>
    <LogoHeading>
      Edit Profile
    </LogoHeading>

    <LogoSubheading v-if="currentUser">
      {{currentUser.username}}
    </LogoSubheading>

    <MainCard>

      <!-- Personal -->
      <EditProfileSection>
        <template v-slot:title>Personal</template>
        <template v-slot:body>
          <div class="row mt-2 mb-5">
            <div class="col-3">
              <div class="row">
                <ProfileBlock>Bio</ProfileBlock>
              </div>
              <div class="row mt-4">
                <ProfileBlock>Avatar</ProfileBlock>
              </div>
            </div>
            <div class="col-3">
              <div class="row">
                <ProfileBlock>Description</ProfileBlock>
              </div>
              <div class="row mt-4">
                <ProfileBlock>Hidden (Y/N)</ProfileBlock>
              </div>
            </div>
          </div>
        </template>
      </EditProfileSection>

      <!-- Workouts -->
      <EditProfileSection>
        <template v-slot:title>Workouts</template>
        <template v-slot:body>

          <!-- Warn if there are no workouts -->
          <div v-if="workouts.length === 0" class="row">
            <div class="row mb-2">
              <div class="col">
                <div class="float-start muted-tt">
                  <i>No workouts found!</i>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="float-start">
                  <router-link to="yooo" tag="button"><button id="btn-addOne" class="btn btn-primary">Add workout +</button></router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- List each workout from DB if there are workouts -->
          <div v-for="workout in workouts" :key="workout" class="row">
            <div class="col-3">{{workout}}</div>
          </div>

        </template>
      </EditProfileSection>

      <!-- Meal Plans -->
      <EditProfileSection>
        <template v-slot:title>Meal Plans</template>
        <template v-slot:body>

          <!-- Warn if there are no meal plans -->
          <div v-if="meal_plans.length === 0" class="row">
            <div class="row mb-2">
              <div class="col">
                <div class="float-start muted-tt">
                  <i>No meal plans found!</i>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="float-start">
                  <router-link to="yooo" tag="button"><button id="btn-addOne" class="btn btn-primary">Add meal plan +</button></router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- List each meal plan from DB if there are meal plans -->
          <div v-for="mp in meal_plans" :key="mp" class="row">
            <div class="col-3">{{mp}}</div>
          </div>

        </template>
      </EditProfileSection>

      <!-- Merch -->
      <EditProfileSection>
        <template v-slot:title>Merch</template>
        <template v-slot:body>
          <!-- Warn if there is no merch -->
          <div v-if="merch.length === 0" class="row">
            <div class="row mb-2">
              <div class="col">
                <div class="float-start muted-tt">
                  <i>No merch found!</i>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="float-start">
                  <router-link to="yooo" tag="button"><button id="btn-addOne" class="btn btn-primary">Add product +</button></router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- List each product from DB if there is merch -->
          <div v-for="product in merch" :key="product" class="row">
            <div class="col-3">{{product}}</div>
          </div>
        </template>
      </EditProfileSection>

      <!-- Blog -->
      <EditProfileSection>
        <template v-slot:title>Blog</template>
        <template v-slot:body>
          <!-- Warn if there are no blog posts -->
          <div v-if="blog_posts.length === 0" class="row">
            <div class="row mb-2">
              <div class="col">
                <div class="float-start muted-tt">
                  <i>No blog posts found!</i>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="float-start">
                  <router-link to="yooo" tag="button"><button id="btn-addOne" class="btn btn-primary">Add post +</button></router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- List each post from DB if there are blog posts -->
          <div v-for="post in blog_posts" :key="post" class="row">
            <div class="col-3">{{post}}</div>
          </div>
        </template>

      </EditProfileSection>

    </MainCard>
  </div>
</template>

<script>
import MainCard from '../components/MainCard.vue';
import AmplifyAuthService from '../services/AmplifyAuthService.js';
import ProfileBlock from '../components/ProfileBlock.vue';
import AmplifyAPIService from '../services/AmplifyAPIService.js';
import LogoHeading from '../components/LogoHeading.vue';
import LogoSubheading from '../components/LogoSubheading.vue';
import EditProfileSection from '../components/EditProfileSection.vue';

export default {
  name: 'Edit Profile',
  data : function () {
    return {
      currentUser : {},
      workouts : [],
      meal_plans: [],
      merch: [],
      blog_posts: []
    }
  },
  methods: {
    setInfo: async function () {

    // Set currentUser info
    try {
      const data = await AmplifyAuthService.currentAuthenticatedUser();
      this.currentUser = data;
      return data;
    } catch (err) {
      return console.log(err);
    }


    },
    getUserByUsername: function (query) {
      const response = AmplifyAPIService.getUserByUsername(query)
      .then(res => {
        console.log(res);
        return res;
      });

      return response;
    },
    getWorkouts: function () {
      this.workouts = [];
    }
  },
  components: {
    MainCard,
    ProfileBlock, 
    LogoHeading,
    EditProfileSection,
    LogoSubheading
  },
  created: function(){
    
    this.setInfo();
    this.getWorkouts();
  }
}
</script>

<style>
#btn-addOne {
  background-color: #f07d47;
  color: white;
  border:none;
}
#btn-addOne:hover {
  background-color: #d87344;
}
.muted-tt {
  color:rgb(148, 148, 148);
}
</style>