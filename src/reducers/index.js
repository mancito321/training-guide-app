import { combineReducers } from 'redux'
import { exerciseMetaData, routineInformation } from '../data'

const daysReducer = () =>{
  return [
    {
      name: 'Top A',
      identifier: 'day1'
    },
    {
      name: 'Low A',
      identifier: 'day2'
    },
    {
      name: 'Top B',
      identifier: 'day3'
    },
    {
      name: 'Low B',
      identifier: 'day4'
    },
    {
      name: 'Extra Boost',
      identifier: 'day5'
    },
  ]
}

//const exercisesReducer = (selectedDay = [], action) => {
const exercisesReducer = (selectedDay = routineInformation()[0].exercises, action) => {

  if(action.type === 'DAY_SELECTED') {
    const dayRoutine = routineInformation().filter(routine => routine.day === action.payload)
    return dayRoutine.exercises || []
  }

  return selectedDay
}

const selectedExerciseReducer = (exercise = null, action) =>{
  console.log(action)
  if(action.type === 'EXERCISE_SELECTED') {
    return exerciseMetaData()[action.payload] || '404'
  } else if(action.type === 'FAKE_ACTION') {
    console.log(action.payload)
  }

  return exercise
}

export default combineReducers({
  days: daysReducer,
  exercises: exercisesReducer,
  exerciseImage: selectedExerciseReducer,
})