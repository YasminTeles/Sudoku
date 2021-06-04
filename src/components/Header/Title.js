import React from "react"
import { Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  title: {
    color: "#5E60AA",
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: "ComicNeue_700Bold",
  },
})

export const Title = () => (
  <Text style={styles.title}>
    Sudoku
  </Text>
)

export default Title
