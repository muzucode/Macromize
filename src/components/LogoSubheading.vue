<template>
  <p class="mb-5"><slot></slot></p>
</template>

<script>
export default {
  name: 'Logo Subheading'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');

p {
  font-family: 'Architects Daughter', cursive;
  font-weight:bold;
  font-size: 1.2em;
}
</style>