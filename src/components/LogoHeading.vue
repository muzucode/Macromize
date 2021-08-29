<template>
  <h1 class="display-1 mt-2"><slot></slot></h1>
</template>

<script>
export default {
  name: 'Logo Heading'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
#bs-overrides .display-1{
  font-family: 'Staatliches', cursive;
}

</style>