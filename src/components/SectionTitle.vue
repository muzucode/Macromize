<template>
  <div class="row">
    <h1 class="mb-4" id="sectionTitle">
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
#sectionTitle{
  background-color: rgb(233, 233, 233);
}
</style>