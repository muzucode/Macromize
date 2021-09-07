<template>
<div class="row">
  <div class="col">
    <h4 class="muted float-start"><slot></slot></h4>
  </div>
</div>
</template>

<script>
export default {
  name: 'Muted Section Heading'
}
</script>

<style>
.muted {
  color: rgb(165, 165, 165);
  font-family: 'Josefin Sans', sans-serif;
}
</style>