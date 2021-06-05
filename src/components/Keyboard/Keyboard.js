import React from "react"

import styled from "styled-components/native"

import Key from "./Key"

const Keys = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 5px;
`

const KEYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

export const Keyboard = () => (
  <Keys>
    {KEYS.map((key) => (
      <Key value={key} />
    ))}
  </Keys>
)

export default Keyboard
