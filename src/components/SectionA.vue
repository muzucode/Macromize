<template>
  <div>
    <!-- Title row -->
    <div class="row">
      <div class="col">
        <h1 class="float-start"><slot name="title"></slot></h1>
      </div>
    </div>

    <!-- Divider -->
    <hr/>

    <div class="row mb-5">
      <div class="col">
        <slot name="body"></slot>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Section A'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

h1 {
  font-family: 'Josefin Sans', sans-serif;
}
</style>