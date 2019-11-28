/* eslint-disable global-require */
import React, { useState } from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MealsNavigator from './navigation/MealsNavigator'

const fetchFonts = () => Font.loadAsync({
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
})

const App = () => {
  const [ fontLoaded, setFontLoaded ] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }
  return (<MealsNavigator />)
}

export default App


