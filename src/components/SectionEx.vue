<template>
  <div class="mb-5">
    <!-- Title row -->
    <div class="row">
      <div class="col">
        <h1 class="float-start"><slot name="title"></slot></h1>
      </div>
    </div>

    <!-- Title row -->
    <div class="row">
     <div class="col-1 button-font">
        <slot name="btn-edit"></slot>
      </div>
      <div class="col-1 button-font">
        <slot name="btn-rm"></slot>
      </div>
    </div>

    <!-- Divider -->
    <hr/>

    <div class="row">
      <div class="col">
        <slot name="body"></slot>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <slot name="sets"></slot>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Section Ex'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

h1 {
  font-family: 'Josefin Sans', sans-serif;
}
.button-font {
  font-family: 'Josefin Sans', sans-serif;
}
</style>