import React from 'react'
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import { Routes } from './src/routes'

import { StatusBar } from 'expo-status-bar'

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#E50914',
      background: '#3C3C3C',
      placeholder: '#C1C1C1',
    }
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor='#000' />
      <Routes />
    </PaperProvider>
  )
}

export default App;