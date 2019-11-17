import React from "react"
import "./layout.css"
import styled from "styled-components"
import Header from "./header"

const Root = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`

export default ({ children }) => (
  <Root>
    <Header />
    {children}
  </Root>
)
