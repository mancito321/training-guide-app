import React from 'react'
import { ThemeProvider } from 'styled-components'
import ExerciseList from './ExcersiseList'
import ImageBox from './ImageBox'
import DayPicker from './DayPicker'
import MainTheme,{ Screen } from '../theme'


function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Screen>
        <DayPicker />
        <ExerciseList />
        <ImageBox />
      </Screen>
    </ThemeProvider>
  );
};

export default App;