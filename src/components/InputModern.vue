<template>
  <div>
    <label class="mb-1"><slot></slot></label>
    <input class="form-control mb-5 w-25 mx-auto input-mdrn" ref="mainInput" :value="value" @input="handleInput" :type="type" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'Input Modern',
  props: ['placeholder', 'type', 'value'],
  data () {

  },
  methods: {
    handleInput () {
      this.$emit('input', this.$refs.mainInput.value);
      console.log(this.$refs.mainInput.value);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');


</style>