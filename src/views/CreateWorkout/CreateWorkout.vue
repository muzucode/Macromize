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
        <!-- If there is only one exercise, then do not show the remove option -->
        <template v-if="workout.exercises.length != 1" v-slot:btn-rm><button @click="removeExercise(ex.order)" class="float-start text-white btn-sm btn-danger">Remove</button></template>
        <template v-slot:btn-edit><button @click="selectExercise(ex.order)" class="float-start text-white btn-sm btn-success">Edit</button></template>
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

        <template v-slot:sets>
          
          <!-- Sets -->

          <div class="row mb-2 ">
            <div class="col">
              <h4 class="float-start">Sets - (Sets of Reps @ Weight in Lbs. or Kg)</h4>
            </div>
          </div>

          <!-- Load each set in the exercise -->
          <div v-for="set in ex.sets" :key="set" class="row mb-2">
            <div class="col">
              <!-- Display all sets for exercise -->
              <h7 class="float-start set-entry">Set {{set.order + 1}}: {{set.frequency}} x {{set.reps}} ({{set.weight}} {{set.unit_type}}) </h7>
              <!-- Remove set button -->
              <p class="float-start">
                &nbsp;&nbsp; <a class="rmv-set" @click="removeSet(ex, set)"><b>X</b></a>
              </p>

            </div>
          </div>
        
          <!-- Add set toolbar + button container -->
          <!-- If the edit feature is selected for the exercise, show sets -->
          <div v-if="ex.isSelected === true">
            <div class="row">
              <div class="col-1">
                <select v-model="staging_set.frequency" class="form-select float-start mb-4">
                  <option :value="1">1x</option>
                  <option :value="2">2x</option>
                  <option :value="3">3x</option>
                  <option :value="4">4x</option>                  
                  <option :value="5">5x</option>
                  <option :value="6">6x</option>
                  <option :value="7">7x</option>
                  <option :value="8">8x</option>                  
                  <option :value="9">9x</option>
                  <option :value="10">10x</option>
                </select>
              </div>
              of
              <div class="col-1">
                <select v-model="staging_set.reps" class="form-select float-start mb-4">
                  <option :value="1">1</option>
                  <option :value="2">2</option>
                  <option :value="3">3</option>
                  <option :value="4">4</option>
                  <option :value="5">5</option>
                  <option :value="6">6</option>
                  <option :value="7">7</option>
                  <option :value="8">8</option>
                  <option :value="9">9</option>
                  <option :value="10">10</option>
                  <option :value="11">11</option>
                  <option :value="12">12</option>
                  <option :value="13">13</option>
                  <option :value="14">14</option>
                  <option :value="15">15</option>

                </select>
              </div>
              @
              <!-- Weight -->
              <div class="col-2">
                <input v-model="staging_set.weight" placeholder="15" class="form-control float-start mb-4"/>
              </div>
              <!-- Weight Type -->
              <div class="col-1">
                <select v-model="staging_set.unit_type" placeholder="15" class="form-select float-start mb-4">
                  <option selected value="Lbs">Lbs</option>
                  <option value="Kg">Kg</option>                
                  <option value="Min">Min</option>                
                  <option value="Hrs">Hrs</option>                
                </select>
              </div>
            </div>
        
            <div class="row">
              <div class="col">
                <!-- Add set, send exercise number over -->
                <button @click="addSet(ex.order)" class="btn btn-primary float-start">Add set +</button>
              </div>
            </div>
          </div>

        </template>
      </SectionEx>

      <button class="btn btn-danger" @click="addExercise">Add exercise</button>

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
            category: '',
            isSelected: false,
            sets: [
              // Acts as a placeholder to define schema on create
              {
                order: 0,
                frequency: 0,
                reps: 0,
                weight: 0,
                unit_type: '',
                time: 0,
                time_type: '', // either seconds or minutes
                set_type: '' // either reps or time
              }
            ]
          }        
        ]
      },
      staging_set: {
        order: 0,
        frequency: 0,
        reps: 0,
        weight: 0,
        unit_type: '',
        time: 0,
        time_type: '', // either seconds or minutes
        set_type: '' // either reps or time

      }
    }
  },
  methods: {
    addExercise: function () {
      // Create placeholder exercise
      var exercise = {
        order: 0, 
        title: '', 
        category: '', 
        isSelected: false, 
        sets: []
      }
      // Add exercise, with order 0
      this.workout.exercises.push(exercise);
      // Update exercise orders 1-20
      const lastExerciseNumber = this.updateExerciseOrders();
      // Close any 'sets' toolbars and select the most recently added exercise
      this.selectExercise(lastExerciseNumber);
    },
    removeExercise: function (orderNum) {
      // Remove workout by order number
      this.workout.exercises.splice(orderNum, 1);
      this.updateExerciseOrders();
    },
    selectExercise: function (orderNum) {
      // If already selected, then deselect
      if(this.workout.exercises[orderNum].isSelected === true){
        this.workout.exercises[orderNum].isSelected = false;
      } else {
        // Reset all selected states
        this.workout.exercises.forEach((el) => el.isSelected = false)
        // Set selected state of chosen exercise
        this.workout.exercises[orderNum].isSelected = true;
      }
    },
    updateExerciseOrders: function () {
      // Set the orders of all exercises
      var i = 0;
      this.workout.exercises.forEach(el => {
        el.order = i;
        i++;
      });
      
      // Return the number of iterations minus 1
      // This number is the amount of exercises, minus 1
      // It gives the index of the final exercise in the workout
      return i-1;

    },
    addSet: function (orderNum) {

      // Stage the set using the v-models then push it
      var set = this.stageSet();
      
      // Console testing
      console.log(orderNum);
      console.log(this.workout.exercises[orderNum]);

      // Add set to exercise sent over
      this.workout.exercises[orderNum].sets.push(set);

      // Update set orders 1-20
      this.updateSetOrders(orderNum);


    },
    stageSet: function () {
      // Create set = to the staged set from v-models
      const set = {
        order: 0, 
        frequency: this.staging_set.frequency, 
        reps: this.staging_set.reps, 
        weight: this.staging_set.weight, 
        unit_type: this.staging_set.unit_type,
        time: 0, // todo input
        time_type: '', // todo input
        set_type: '' // todo input
      };

      return set;
    },
    removeSet: function (exercise, set,) {
      // Receive exercise, splice out the set to be removed from its sets
      // Then update the orders of all the sets
      exercise.sets.splice(set.order, 1);
      this.updateSetOrders(exercise.order);
    },
    updateSetOrders: function (orderNum) {
      // Set the orders of all sets
      var i = 0;
      this.workout.exercises[orderNum].sets.forEach(el => {
        el.order = i;
        i++;
      });

    },
    removeFirstExerciseInitialSet: function () {
      // Removes the inital set that comes with exercise 1
      this.workout.exercises[0].sets = [];
    }
  },
  created: function () {
    // Update exercise orders
    this.updateExerciseOrders();
    // Select exercise 0 at start
    this.selectExercise(0);
    // Remove the initial set from the workout after create
    this.removeFirstExerciseInitialSet();

  }
}

//
</script>

<style scoped>
label {
  font-family: 'Staatliches', cursive;
}
h4 {
  font-family: 'Josefin Sans', sans-serif;
}
.set-entry {
  font-family: 'Josefin Sans', sans-serif;
}
.rmv-set {
  color: rgb(194, 70, 70);
  text-decoration: none;
}
.rmv-set:hover {
  cursor: pointer;
}
</style>