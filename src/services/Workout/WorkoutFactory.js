class WorkoutFactory {

  getWorkouts(username) {
    // Make Lambda call, access DDB through Lambda, return array of workouts
    return ['workout 1', 'workout 2', 'workout 3']
  }

}

export default new WorkoutFactory();