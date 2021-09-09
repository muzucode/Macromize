import AmplifyAPIService from '../AmplifyAPIService.js';

class Workout {

  constructor(workoutId, title, description, exercises, nativeUsername) {
    this.workoutId = workoutId; // String
    this.title = title; // String
    this.description = description; // String
    this.exercises = exercises; // Array
    this.nativeUsername = nativeUsername; // String
  }



}

export default Workout;