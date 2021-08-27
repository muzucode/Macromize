<template>
  <h1 class="display-1 mt-2"><slot></slot></h1>
</template>

<script>
export default {
  name: 'Logo Heading'
}
</script>

<style>
#bs-overrides .display-1{
  font-family: 'Staatliches', cursive;
}

</style>