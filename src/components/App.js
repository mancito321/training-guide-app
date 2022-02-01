import React from 'react'
import { ThemeProvider } from 'styled-components'
import ExerciseList from './ExcersiseList';
import MainTheme,{ Screen } from '../theme'


function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Screen>
        <ExerciseList />
      </Screen>
    </ThemeProvider>
  );
};

export default App;