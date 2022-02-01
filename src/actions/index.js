export const selectDay = day => {
  //return day selected
  return {
    type: 'DAY_SELECTED',
    payload: day
  };
};

export const selectExercise = exercise => {
  //return day selected
  return {
    type: 'EXERCISE_SELECTED',
    payload: exercise
  };
};


