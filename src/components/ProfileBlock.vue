<template>
  <!-- WRAP THIS COMPONENT WITHIN A ROW CLASS -->
  <div class="col">
    <form>
      <div class="form-group">
        <label for="formGroupExampleInput"><i><slot></slot></i></label>
        <input type="text" class="form-control my-2" id="formGroupExampleInput" placeholder="none">
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'Profile Block',
  props: ['placeholders']
}
</script>

<style>

</style>