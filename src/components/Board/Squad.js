import React from "react"

import PropTypes from "prop-types"
import styled from "styled-components/native"

import { isOddQuadrant } from "../../utils/quadrant"

const Number = styled.Text`
  font-family: "ComicNeue_700Bold";
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: white;

  width: 38px;
  height:38px;

  margin: 2px;
  padding: 4px 12px;
  border-radius: 5px;

  background: ${({ inOddQuadrant }) => (inOddQuadrant ? "#6061BC" : "#424392")};
`

const getLabel = (value) => (value === "0" ? "" : value)

export const Squad = ({ value, line, column }) => {
  const inOddQuadrant = isOddQuadrant(line, column)
  const label = getLabel(value)

  return (
    <Number inOddQuadrant={inOddQuadrant}>
      {label}
    </Number>
  )
}

Squad.propTypes = {
  line: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  value: PropTypes.string,
}

Squad.defaultProps = {
  value: "0",
}

export default Squad
