<template>
  <div>
    <div class="row mt-5">
      <div class="col">
        <h1 class="float-start"><slot name="title"></slot></h1>
      </div>
      <hr class=""/>
    </div>
    <slot name="body"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

h1 {
  font-family: 'Josefin Sans', sans-serif;
}
</style>