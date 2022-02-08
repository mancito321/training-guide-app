import React from 'react'
import { ThemeProvider } from 'styled-components'
import ExerciseList from './ExcersiseList'
import ImageBox from './ImageBox'
import MainTheme,{ Screen } from '../theme'


function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Screen>
        <ExerciseList />
        <ImageBox />
      </Screen>
    </ThemeProvider>
  );
};

export default App;