class Exercise {

  constructor(exerciseId, title, description, sets, reps, weights) {
    this.exerciseId = exerciseId;
    this.title = title;
    this.description = description;
    this.sets = sets;
    this.reps = reps;
    this.weights = weights;
  }

  

}

export default Exercise;



const User = {
  Workouts : {
    workoutId: Number,
    description: String,
    Exercises : [
      // Exercise 1
      {
        exerciseId: Number,
        title: String,
        description: String,
        Sets : [
          {
            setId: Number,
            reps: Number,
            weight: Number
          },
          {
            setId: Number,
            reps: Number,
            weight: Number
          }
        ]  
      },
      // Exercise 2
      {
        exerciseId: Number,
        title: String,
        description: String,
        Sets : [
          {
            setId: Number,
            reps: Number,
            weight: Number
          },
          {
            setId: Number,
            reps: Number,
            weight: Number
          }
        ]  
      } 
    ]

  }
}


