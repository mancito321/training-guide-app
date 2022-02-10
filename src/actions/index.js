export const selectDay = day => {
  //return day selected
  return {
    type: 'DAY_SELECTED',
    payload: day
  };
};

export const selectRoutine= routine => {
  //return routine selected
  return {
    type: 'ROUTINE_SELECTED',
    payload: routine
  };
};

export const selectExercise = exercise => {
  //return day selected
  //this action cannnot have mutation
  // const response = await fetch('http://example.com/movies.json')
  // .then(response => response.json())
  // .then(data => console.log(data));
  return {
    type: 'EXERCISE_SELECTED',
    payload: exercise
  };
};

//Thunks are async actions creators
export const exampleThunk = exercise => (dispatch, getState) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch({
        type: 'FAKE_ACTION',
        payload: json
      })
    })
  }
  //return {}//action creator or function creator


