import { combineReducers } from 'redux'
import { exerciseMetaData, routineInformation, trainingList } from '../data'

const daysReducer = (routine = trainingList.greekGod.days, action) =>{
  
  if(action.type === 'ROUTINE_SELECTED') {
    const dayRoutine = routineInformation().filter(routine => routine.id === action.payload)
    return dayRoutine.days || []
  }

  return routine
}

//const exercisesReducer = (selectedDay = [], action) => {
const exercisesReducer = (selectedDay = routineInformation()[0].exercises, action) => {

  if(action.type === 'DAY_SELECTED') {
    const dayRoutine = routineInformation().filter(routine => routine.day === action.payload)
    return dayRoutine[0]?.exercises || []
  }

  return selectedDay
}

const selectedExerciseReducer = (exercise = null, action) =>{
  console.log(action)
  if(action.type === 'EXERCISE_SELECTED') {
    return exerciseMetaData()[action.payload] || '404'
  } else if(action.type === 'DAY_SELECTED') {
    return null
  } else if(action.type === 'FAKE_ACTION') {
    console.log(action.payload)
  }

  return exercise
}

const activeDAyReducer = (day = 'day1', action) => {
  if(action.type === 'DAY_SELECTED') {
    return action.payload
  }
  return day
}


export default combineReducers({
  days: daysReducer,
  exercises: exercisesReducer,
  exerciseImage: selectedExerciseReducer,
  activeDay: activeDAyReducer,
})