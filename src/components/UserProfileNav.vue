
<template>
<!-- NOTE: CENTERED WITH JUSTIFY-CONTENT-CENTER ON FIRST DIV ELEMENT -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

        <router-link :to="`${this.$route.params.username}/workouts`">
        <li class="nav-item active">
          <a class="nav-link" href="#">Workouts</a>
        </li>
        </router-link>

        <router-link :to="`${this.$route.params.username}/mealplans`">
          <li class="nav-item">
            <a class="nav-link" href="">Meal Plans</a>
          </li>
        </router-link>

        <router-link :to="`${this.$route.params.username}/merch`">
          <li class="nav-item">
            <a class="nav-link" href="#">Merch</a>
          </li>
        </router-link>     

        <router-link :to="`${this.$route.params.username}/blog`">
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
        </router-link>     

        
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'User Profile Nav'
}
</script>

<style>

</style>