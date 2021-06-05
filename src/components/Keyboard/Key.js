import React from "react"

import PropTypes from "prop-types"
import styled from "styled-components/native"

const Button = styled.Text`
  font-family: "ComicNeue_700Bold";
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: white;

  width: 70px;
  height: 70px;

  border-radius: 5px;
  margin: 5px;

  background: #424392;
`

export const Key = ({ value }) => (
  <Button>
    {value}
  </Button>
)

Key.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Key
