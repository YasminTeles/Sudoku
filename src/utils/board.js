/* eslint-disable import/prefer-default-export */
import { BOARD_ORDER } from "../constants"
import { integerDivider } from "./math"

export const getPositionByBoard = (index) => {
  const line = index % BOARD_ORDER
  const column = integerDivider(index, BOARD_ORDER)

  return [line, column]
}
