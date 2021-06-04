/* eslint-disable import/prefer-default-export */
import { SUB_BOARD_ORDER } from "../constants"
import { isEven, integerDivider } from "./math"

const isCenterQuadrant = (line, column) => integerDivider(line, SUB_BOARD_ORDER) === 1
  && integerDivider(column, SUB_BOARD_ORDER) === 1

const isBorderQuadrant = (line, column) => isEven(integerDivider(line, SUB_BOARD_ORDER))
  && isEven(integerDivider(column, SUB_BOARD_ORDER))

export const isOddQuadrant = (line, column) => isBorderQuadrant(line, column)
  || isCenterQuadrant(line, column)
