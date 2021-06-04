import React from "react"
import { StyleSheet, View } from "react-native"

import { BOARD_DIMENSION } from "../../constants"
import { getPositionByBoard } from "../../utils/board"
import Squad from "./Squad"

const board = Array(BOARD_DIMENSION).fill("")

const styles = StyleSheet.create({
  container: {
    padding: 10,

    borderRadius: 5,
    backgroundColor: "#1F214E",
    margin: 5,

    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
})

export const Board = () => (
  <View style={styles.container}>
    {board.map((value, index) => {
      const [line, column] = getPositionByBoard(index)
      return (
        <Squad
          key={`(${line}, ${column})`}
          value={value}
          line={line}
          column={column}
        />
      )
    })}
  </View>
)

export default Board
