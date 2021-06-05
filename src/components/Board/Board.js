import React from "react"

import styled from "styled-components/native"

import { createBoard, getPositionByBoard } from "../../utils/board"
import Squad from "./Squad"

const board = createBoard()

const Container = styled.View`
  border-radius: 5px;
  padding: 10px;
  margin: 5px;

  background: #1F214E;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const Board = () => (
  <Container>
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
  </Container>
)

export default Board
