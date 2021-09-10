<template>
  <div>
    <LogoHeading>Create Workout</LogoHeading>
    <LogoSubheading>Add exercises below!</LogoSubheading>

    <MainCard>

      <!-- Name -->
      <SectionA>
        <template v-slot:title>Name: {{workout.name}}</template>
        <template v-slot:body>
          <label class="float-start mb-2">Workout name</label>
          <input v-model="workout.name" placeholder="Workout name" class="form-control float-start">
        </template>
      </SectionA>

      <!-- Description -->
      <SectionA>
        <template v-slot:title>Description:</template>
        <template v-slot:body>
          <label class="float-start mb-2">Workout description</label>
          <textarea v-model="workout.description" placeholder="Workout description" class="form-control float-start"></textarea>
        </template>
      </SectionA>

      <!-- Exercises -->
      <SectionEx v-for="ex in workout.exercises" :key="ex">
        <template v-slot:title>Exercise {{ex.order + 1}}: {{ex.title}}</template>
        <template v-slot:body>

          <!-- Exercise name -->
          <div class="row"></div>
          <label class="float-start mb-2">Exercise name</label>
          <input v-model="ex.title" placeholder="Exercise name" class="form-control float-start mb-4">

          <!-- Exercise category -->
          <label class="float-start mb-2">Exercise category</label>
          <select v-model="ex.category" class="form-control float-start mb-4">
            <option selected>Chest</option>
            <option>Legs</option>
            <option>Back</option>
            <option>Shoulders</option>
          </select>
        </template>
      </SectionEx>

      <!-- Sets -->
      <div class="row">
        <div class="col">
          <label class="mb-2 float-start">Sets</label>
        </div>
      </div>

      <div class="row">
        <div class="col-3">
          <select class="form-control float-start mb-4">
            <option>1x</option>
            <option>2x</option>
            <option>3x</option>
            <option>4x</option>
          </select>
        </div>
        of
        <div class="col-3">
          <select class="form-control float-start mb-4">
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
          </select>
        </div>
        @
        <div class="col-3">
          <input placeholder="15 lbs." class="form-control float-start mb-4"/>
        </div>
      </div>
  




      <button @click="addExercise">Add exercise</button>
      <button @click="addSet">Add set</button>


    </MainCard>
  </div>

</template>

<script>
import MainCard from '../../components/MainCard.vue';
import LogoHeading from '../../components/LogoHeading.vue';
import LogoSubheading from '../../components/LogoSubheading.vue';
import SectionA from '../../components/SectionA.vue';
import SectionEx from '../../components/SectionEx.vue';
export default {
  name: 'Create Workout',
  components: {
    MainCard,
    LogoHeading,
    LogoSubheading,
    SectionA,
    SectionEx
  },
  data: function () {
    return {
      workout: {
        name: '',
        description: '',
        exercises: [
          {
            order: 0,
            title: '',
            category: ''
          },        
        ]
      },
    }
  },
  methods: {
    addExercise: function () {
      // Add exercise
      this.workout.exercises.push({order: 3, title: 'added exercise'});
      // Update exercise orders
      this.updateExerciseOrders();
    },
    updateExerciseOrders: function () {
      // Update the order of all exercises

      var i = 0;
      this.workout.exercises.forEach(el => {
        el.order = i;
        i++;
      })
      
    },
    addSet: function () {
      console.log('set has been added');
    }
  },
  created: function () {
    // Update exercise orders
    this.updateExerciseOrders();
  }
}

//
</script>

<style>
label {
  font-family: 'Staatliches', cursive;
}
</style>