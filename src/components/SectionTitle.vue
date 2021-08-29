<template>
  <div class="row">
    <h1 class="my-2" id="sectionTitle">
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Section Title'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

#sectionTitle{
  background-color: rgb(233, 233, 233);
  text-align:left;
  font-family: 'Staatliches', cursive;
}
</style>