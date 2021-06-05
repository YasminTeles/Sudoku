/* eslint-disable react/style-prop-object */
/* eslint-disable camelcase */
import React from "react"
import { StyleSheet, View } from "react-native"

import {
  useFonts,
  ComicNeue_700Bold,
} from "@expo-google-fonts/comic-neue"
import AppLoading from "expo-app-loading"
import { StatusBar } from "expo-status-bar"

import Board from "./components/Board/Board"
import Header from "./components/Header/Header"
import Keyboard from "./components/Keyboard/Keyboard"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272956",
    alignItems: "center",
    justifyContent: "space-between",
  },
})

export const App = () => {
  const [fontsLoaded] = useFonts({
    ComicNeue_700Bold,
  })

  if (!fontsLoaded) {
    return (<AppLoading />)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <Board />
      <Keyboard />
    </View>
  )
}

export default App
