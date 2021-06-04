import React from "react"
import { StyleSheet, View } from "react-native"

import Title from "./Title"

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 30,
  },
})

export const Header = () => (
  <View style={styles.container}>
    <Title />
  </View>
)

export default Header
