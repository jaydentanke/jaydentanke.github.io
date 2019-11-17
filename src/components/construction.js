import React from "react"
import styled from 'styled-components'

import cone from './cone.png'

const CenteredImg = styled.img`
    margin: 0 auto;
`

const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 5em;
`

export default function Construction() {
  return (
    <FlexDiv>
      <CenteredImg width={200} height={200} src={cone} alt="cone" />
      <h2 style={{ marginTop: "0.1em", textAlign: "center" }}>
        Under construction
      </h2>
    </FlexDiv>
  )
}