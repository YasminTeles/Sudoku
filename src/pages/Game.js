/* eslint-disable react/style-prop-object */
import React from "react"

import { StatusBar } from "expo-status-bar"
import styled from "styled-components/native"

import Board from "../components/Board/Board"
import Header from "../components/Header/Header"
import Keyboard from "../components/Keyboard/Keyboard"

const Page = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: #272956;
`

export const Game = () => (
  <Page>
    <StatusBar style="light" />
    <Header />
    <Board />
    <Keyboard />
  </Page>
)

export default Game
