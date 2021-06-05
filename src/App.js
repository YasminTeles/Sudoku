/* eslint-disable camelcase */
import React from "react"

import {
  useFonts,
  ComicNeue_700Bold,
} from "@expo-google-fonts/comic-neue"
import AppLoading from "expo-app-loading"

import Game from "./pages/Game"

export const App = () => {
  const [fontsLoaded] = useFonts({
    ComicNeue_700Bold,
  })

  if (!fontsLoaded) {
    return (<AppLoading />)
  }

  return (
    <Game />
  )
}

export default App
