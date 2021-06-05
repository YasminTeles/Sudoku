import React from "react"
import { StyleSheet, Text } from "react-native"

import PropTypes from "prop-types"

import { isOddQuadrant } from "../../utils/quadrant"

const styles = StyleSheet.create({
  text: {
    paddingBottom: 4,
    paddingTop: 4,
    paddingLeft: 12,
    paddingRight: 12,

    borderRadius: 5,

    margin: 2,

    width: 38,
    height: 38,

    color: "#FFF",
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: "ComicNeue_700Bold",
  },
  oddQuadrant: {
    backgroundColor: "#6061BC",
  },
  evenQuadrant: {
    backgroundColor: "#424392",
  },
})

const getStyle = (line, column) => {
  const style = isOddQuadrant(line, column) ? styles.oddQuadrant : styles.evenQuadrant

  return StyleSheet.compose(styles.text, style)
}

const getLabel = (value) => (value === "0" ? "" : value)

export const Squad = ({ value, line, column }) => {
  const style = getStyle(line, column)
  const label = getLabel(value)

  return (
    <Text style={style}>
      {label}
    </Text>
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
