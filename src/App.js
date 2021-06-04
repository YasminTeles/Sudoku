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

import Header from "./components/Header/Header"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272956",
    alignItems: "center",
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
    </View>
  )
}

export default App
