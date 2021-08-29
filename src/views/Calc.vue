<template>
  <div class="container-lg">
    <LogoHeading>Macromize</LogoHeading>
    <LogoSubheading>Calculate your necessary nutrient intake below!</LogoSubheading>

    <MainCard>
      <div class="container">
        <!-- Personal -->

        <SectionTitle>Personal</SectionTitle>

        <!-- Section 1 -->
        <div class="row mb-3">
          <!-- Weight -->
          <div class="col-sm">
            <div class="form-group">
              <label class="mb-2">Weight (lbs.)</label>
              <input ref="weightInput" type="number" class="form-control" placeholder="100.0">
            </div>
          </div>

          <!-- Height -->
          <div class="col-sm">
            <div class="form-group">
              <label class="mb-2">Height</label>
              <select v-model="height_const" class="form-select">
                <option value="60">5'0</option>
                <option value="61">5'1</option>
                <option value="62">5'2</option>
                <option value="63">5'3</option>
                <option value="64">5'4</option>
                <option value="65">5'5</option>
                <option value="66">5'6</option>
                <option value="67">5'7</option>
                <option value="68">5'8</option>                
                <option value="69">5'9</option>
                <option value="70">5'10</option>
                <option value="71">5'11</option>
                <option selected value="72" >6'0</option>
                <option value="73">6'1</option>
                <option value="74">6'2</option>                
                <option value="75">6'3</option>
                <option value="76">6'4</option>
                <option value="77">6'5</option>
                <option value="78">6'6</option>
                <option value="79">6'7</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Section 2 -->
        <div class="row mb-3">
          <!-- Sex -->
          <div class="col-sm">
            <div class="form-group">
              <label class="mb-2">Sex</label>
              <select v-model="sex_const" class="form-select">
                <option selected value="66">Male</option>
                <option value="655">Female</option>
              </select>
            </div>
          </div>    

          <!-- Age -->
          <div class="col-sm">
            <div class="form-group">
              <label class="mb-2">Age</label>
              <input ref="ageInput" type="number" class="form-control" placeholder="25">
            </div>
          </div>  
        </div>

        <div class="row mb-3">
          <!-- Activity Level -->
          <div class="col-sm">
            <div class="form-group">
              <label class="mb-2">Activity Level</label>
              <select v-model="activitylvl_const" class="form-select">
                <option value="1.2">Not Active</option>
                <option value="1.375">Somewhat Active</option>
                <option value="1.55" selected>Active</option>
                <option value="1.725">Very Active</option>
                <option value="1.9">Extremely Active</option>
              </select>
            </div>
          </div>    

          <!-- Goal -->
          <div class="col-sm">
            <div class="form-group">
              <label class="mb-2">Goal</label>
              <select v-model="goal_str" class="form-select">
                <option>Bulking (Gain mass, some fat)</option>
                <option>Cutting (Lose fat, some mass)</option>
                <option>Maintenance</option>
              </select>
            </div>
          </div>  
        </div>

        <button @click="setData(), calculateGoals(), loadMealPlans(), makeVis()" type="button" id="calcButton" class="btn-secondary w-100 btn-lg">
          Calculate
        </button>

        <!-- Horizontal Rule -->
        <hr>
      <div class="container">
        <!-- Calories -->
        <SectionTitle>Calories</SectionTitle>
        <div class="row" id="macroNumber" v-if="results.calories > 0"><h2>{{results.calories}}</h2></div>
        <!-- Carbs -->
        <SectionTitle>Carbs</SectionTitle>
        <div class="row" id="macroNumber" v-if="results.carbs > 0"><h2>{{results.carbs}} g</h2></div>
        <!-- Protein -->
        <SectionTitle>Protein</SectionTitle>
        <div class="row" id="macroNumber" v-if="results.protein > 0"><h2>{{results.protein}}  g</h2></div>
        

        <!-- <SectionTitle>Meal Plans</SectionTitle>
        <div class="row" v-for="plan in mealPlans" :key="plan"><h4 id="mealPlan"><a :href="plan.link">{{plan.title}}</a> | {{plan.rating}}/5</h4></div>
        
        <SectionTitle>Workouts</SectionTitle>
        <CardItemCollection v-if="isVisible" :goal="goal_str"></CardItemCollection>

        <SectionTitle>Resources</SectionTitle>
        <CardItemCollection v-if="isVisible" :goal="goal_str"></CardItemCollection> -->
        
      </div>
      </div>
    </MainCard>
  </div>
</template>

<script>

import MainCard from '../components/MainCard.vue';
import SectionTitle from '../components/SectionTitle.vue';
import MealPlan from '../services/MealPlan/MealPlan.js';
import Workout from '../services/Workout/Workout.js'; 
import Resource from '../services/Resource/Resource.js'; 
import LogoHeading from '../components/LogoHeading.vue';
import LogoSubheading from '../components/LogoSubheading.vue';
// import CardItemCollection from '../components/CardItemCollection.vue';

export default {
  name: 'Calc',
  components: {
    MainCard,
    SectionTitle,
    LogoHeading,
    LogoSubheading
    // CardItemCollection
  },
  data: () => {
    return {
      activitylvl_const: 0,
      sex_const: 0,
      weight_const: 0,
      height_const: '',
      age_const: 0,
      goal_str: '',
      results: {
        calories: 0,
        carbs: 0,
        protein: 0
      },
      mealPlans: [],
      workoutPlans: [],
      resources: [],
      isVisible: false
    }
  },
  methods: {
    setData: function () {
      // Manually set age and weight to adhere to placeholders
      this.weight_const = this.$refs.weightInput.value;   
      this.age_input = this.$refs.ageInput.value;
    },
    calculateBMR: function() {

      // console.log('sex' + this.sex_const);
      // console.log('weight' + this.weight_const);
      // console.log('height' + this.height_const);
      // console.log('age' + this.age_const);
      // console.log('activity' + this.activitylvl_const);
      var BMR;
      // Formula (Male)
      if(this.sex_const == 66) {BMR = Number(this.sex_const) + (6.23*this.weight_const) + Number(12.7*this.height_const) - Number(6.8*this.age_const);}     
      // Formula (Female)
      if(this.sex_const == 655) {BMR = Number(this.sex_const) + (4.35*this.weight_const) + Number(4.7*this.height_const) - Number(4.7*this.age_const);}

      return BMR;
    },
    calculateCalorieGoal() {
      // Activity Lvl and 
      var calorieGoal;
      if(this.goal_str.includes('Bulking')){
        calorieGoal = this.calculateBMR() * Number(this.activitylvl_const) + 500;
      } else if(this.goal_str.includes('Cutting')){
        calorieGoal = this.calculateBMR() * Number(this.activitylvl_const) * .85;
      } else {
        calorieGoal = this.calculateBMR() * Number(this.activitylvl_const);
      }

      this.results.calories = Math.round(calorieGoal);
    },
    calculateCarbGoal() {
      // Loss - 40/40/20
      // Gain - 40/30/30
      // Maint - 40/30/30
      // Carb goal can always be .4 mult
      this.results.carbs = Math.round(this.results.calories * .4 / 4);
    },
    calculateProteinGoal() {
      // Loss - 40/40/20
      // Gain - 40/30/30
      // Maint - 40/30/30
      if(this.goal_str.includes('Cutting')){
        this.results.protein = Math.round(this.results.calories * .4 / 4);
      } else {
        this.results.protein = Math.round(this.results.calories * .3 / 4);
      }

    },
    calculateGoals () {
      // Check for negative numbers
      if(this.weight_const >= 0 && this.age_const >= 0){
        try {
          this.calculateCalorieGoal();
          this.calculateCarbGoal();
          this.calculateProteinGoal();
          // this.loadMealPlans();
          // this.loadWorkoutPlans();
          // this.loadResources();
        } catch(err) {
          console.error(err);
        }
      } else {
        window.alert("Negative numbers are not allowed!");
      }


    },
    loadMealPlans () {
      var cutPlans = [
        new MealPlan('Ultimate Cutting Meal Plan', 'One of the highest rated cutting meal plans out there', 5,''),
        new MealPlan('Total Health Cutting Program', 'Our in-house bulking meal plan', 5,''),
        new MealPlan('Obelisk Meal Plan (Cut)', 'For the truly devoted', 5,'')
      ];
            
      
      var bulkPlans = [
        new MealPlan('Ultimate Bulking Meal Plan', 'One of the highest rated bulking meal plans out there', 5,''),
        new MealPlan('Total Health Bulking Program', 'Our in-house cutting meal plan', 5,''),
        new MealPlan('Obelisk Meal Plan (Bulk)', 'For the truly devoted', 5,'')
      ];

      var maintPlans = [
        new MealPlan('Basic Meal Plan', 'One of the highest rated maintenance meal plans out there', 5,''),
        new MealPlan('Total Health Meal Program', 'Our in-house basic meal plan', 5,''),
        new MealPlan('Obelisk Meal Plan (Maintenance)', 'For the truly devoted', 5,'')
      ];  

      // Set meal plans object
      var mealPlans = {
        cut: cutPlans,
        bulk: bulkPlans,
        maint: maintPlans
      };

      // Load meal plans based on goal
      if(this.goal_str.includes('Cutting')){
        this.mealPlans = mealPlans.cut;
      } else if(this.goal_str.includes('Bulking')){
        this.mealPlans = mealPlans.bulk;
      } else {
        this.mealPlans = mealPlans.maint;
      }
    },
    loadWorkoutPlans () {
      var cutPlans = [
        new Workout('Ultimate Cutting Meal Plan', 'One of the highest rated cutting meal plans out there', 5,''),
        new Workout('Total Health Cutting Program', 'Our in-house bulking meal plan', 5,''),
        new Workout('Obelisk Meal Plan (Cut)', 'For the truly devoted', 5,'')
      ];

      var bulkPlans = [
        new Workout('Ultimate Cutting Meal Plan', 'One of the highest rated cutting meal plans out there', 5,''),
        new Workout('Total Health Cutting Program', 'Our in-house bulking meal plan', 5,''),
        new Workout('Obelisk Meal Plan (Cut)', 'For the truly devoted', 5,'')
      ];

      var maintPlans = [
        new Workout('Ultimate Cutting Meal Plan', 'One of the highest rated cutting meal plans out there', 5,''),
        new Workout('Total Health Cutting Program', 'Our in-house bulking meal plan', 5,''),
        new Workout('Obelisk Meal Plan (Cut)', 'For the truly devoted', 5,'')
      ];  

      // Set workoutPlans object
      var workoutPlans = {
        cut: cutPlans,
        bulk: bulkPlans,
        maint: maintPlans
      };

      // Load workout plans based on goal
      if(this.goal_str.includes('Cutting')){
        this.workoutPlans = workoutPlans.cut;
      } else if(this.goal_str.includes('Bulking')){
        this.workoutPlans = workoutPlans.bulk;
      } else {
        this.workoutPlans = workoutPlans.maint;
      }

    },
    loadResources() {
      var cutResources = [
        new Resource('Ultimate Cutting Meal Plan', 'One of the highest rated cutting meal plans out there', 5,''),
        new Resource('Total Health Cutting Program', 'Our in-house bulking meal plan', 5,''),
        new Resource('Obelisk Meal Plan (Cut)', 'For the truly devoted', 5,'')
      ];

      var bulkResources = [
        new Resource('Ultimate Cutting Meal Plan', 'One of the highest rated cutting meal plans out there', 5,''),
        new Resource('Total Health Cutting Program', 'Our in-house bulking meal plan', 5,''),
        new Resource('Obelisk Meal Plan (Cut)', 'For the truly devoted', 5,'')
      ];

      var maintResources = [
        new Resource('Ultimate Cutting Meal Plan', 'One of the highest rated cutting meal plans out there', 5,''),
        new Resource('Total Health Cutting Program', 'Our in-house bulking meal plan', 5,''),
        new Resource('Obelisk Meal Plan (Cut)', 'For the truly devoted', 5,'')
      ];  

      // Set workoutPlans object
      var resources = {
        cut: cutResources,
        bulk: bulkResources,
        maint: maintResources
      };

      // Load workout plans based on goal
      if(this.goal_str.includes('Cutting')){
        this.resources = resources.cut;
      } else if(this.goal_str.includes('Bulking')){
        this.resources = resources.bulk;
      } else {
        this.resources = resources.maint;
      }
    },
    makeVis() {
      this.isVisible = true;
    }

  },
}
// Rebuild me!!
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

#mealPlan {
  font-family: 'Lato', sans-serif;
}

.spaceme {
  width: 2%;
}

#bs-overrides .row h1, h2, h3, h4{
  text-align:left;
  font-family: 'Staatliches', cursive;
}

label {
  font-family: 'Staatliches', cursive;
}

button {
  font-family: 'Staatliches', cursive;
}

#bs-overrides label{
  float:left;
}



#sectionTitle{
  background-color: rgb(233, 233, 233);
}
</style>