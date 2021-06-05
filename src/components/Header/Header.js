import React from "react"

import styled from "styled-components/native"

import Title from "./Title"

const Container = styled.Text`
  padding-top: 40px;
`

export const Header = () => (
  <Container>
    <Title />
  </Container>
)

export default Header
