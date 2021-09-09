<template>
  <div>
    <LogoHeading>Create Workout</LogoHeading>
    <LogoSubheading>Add exercises below!</LogoSubheading>

    <MainCard>

      <!-- Name -->
      <SectionA>
        <template v-slot:title>Name: {{workout.name}}</template>
        <template v-slot:body><input v-model="workout.name" placeholder="Workout 1" class="form-control float-start"></template>
      </SectionA>

      <!-- Description -->
      <SectionA>
        <template v-slot:title>Description:</template>
        <template v-slot:body><textarea v-model="workout.description" placeholder="Description" class="form-control float-start"></textarea></template>
      </SectionA>

      <!-- Exercise -->
      <SectionA>
        <template v-slot:title>Exercise 1</template>
        <template v-slot:body><p class="float-start">3x4 20lbs.</p></template>
      </SectionA>


    </MainCard>
  </div>

</template>

<script>
import MainCard from '../../components/MainCard.vue';
import LogoHeading from '../../components/LogoHeading.vue';
import LogoSubheading from '../../components/LogoSubheading.vue';
import SectionA from '../../components/SectionA.vue';
export default {
  name: 'Create Workout',
  components: {
    MainCard,
    LogoHeading,
    LogoSubheading,
    SectionA
  },
  data: function () {
    return {
      workout: {
        name: '',
        description: ''
      }
    }
  }
}
</script>

<style>

</style>