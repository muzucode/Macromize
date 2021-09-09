<template>
  <!-- WRAP THIS COMPONENT WITHIN A ROW CLASS -->
  <div class="col">
    <form>
      <div class="form-group">
        <label for="formGroupExampleInput"><slot></slot></label>
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
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');

label {
  font-family: 'Staatliches', cursive;
}
::-webkit-input-placeholder {
  font-family: 'Architects Daughter', cursive;
}
</style>