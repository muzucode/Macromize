<template>
    <!-- Preview Section -->
  <div class="row">
    <div class="col">
      <h1 class="float-start section-title" id="name"><slot></slot></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resource Preview',
  data: function () {
    return {
      sectionTitle: ''
    }
  },
  methods: {
    updateResourcePreview: function (value) {
      this.sectionTitle = value;
    }
  }
}
</script>

<style>
.section-title {
  color: rgb(165, 165, 165);
  font-style: italic;
}
</style>