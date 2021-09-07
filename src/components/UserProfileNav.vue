
<template>
<!-- NOTE: CENTERED WITH JUSTIFY-CONTENT-CENTER ON FIRST DIV ELEMENT -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
    <div class="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

          <!-- Each option emits the data to be previewed -->
          <li @click="this.$parent.$emit('updatenow', 'Workouts')" class="nav-item active">
            <a class="nav-link">Workouts</a>
          </li>

          <li class="nav-item" @click="this.$parent.$emit('updatenow', 'Meal Plans')">
            <a class="nav-link">Meal Plans</a>
          </li>

          <li class="nav-item" @click="this.$parent.$emit('updatenow', 'Merch')">
            <a class="nav-link">Merch</a>
          </li>

          <li class="nav-item" @click="this.$parent.$emit('updatenow', 'Blog')">
            <a class="nav-link">Blog</a>
          </li>
  

        
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'User Profile Nav',
  methods: {
    emitSection: function (value) {
      // console.log('hello test');
      this.$emit('updatenow', value);
    }
  }
}
</script>

<style scoped>
a:hover {
  cursor:pointer;
}
</style>