import { BOARD_ORDER } from "../constants"
import { integerDivider } from "./math"

export const getPositionByBoard = (index) => {
  const line = index % BOARD_ORDER
  const column = integerDivider(index, BOARD_ORDER)

  return [line, column]
}

export const createBoard = () => {
  const board = "003020600900305001001806400008102900700000008006708200002609500800203009005010300"
  return board.split("")
}
