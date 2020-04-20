import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'

import { SocialIcon } from "react-social-icons"


const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
const Name = styled.span`
  font-weight: 500;
  font-size: 2.5em;
  text-align: center;
`
const NavBar = styled.div`
  // border-top: 1px solid grey;
  margin: 2em 0 0 0 ;
  display: flex;
  justify-content: center;
  width: 100%;
`
const StyledLink = styled(props => <Link {...props} />)`
  font-size: 1em;
  margin: 0 2em 0 2em;
  color: black;
  :hover {
    color: #6f6f6f;
  }
`


// Social Media Links
const SocialIconsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.2em 0 1em 0;
`

function SocialBar({ urls }) {
  return (
    <SocialIconsDiv>
      {urls.map((url) => (
      <SocialIcon
        style={{ margin: "0 0.2em 0 0.2em", height: 30, width: 30 }}
        target="_blank"
        url={url}
      />))}
    </SocialIconsDiv>
  );
}
      
export default function() {
  return (
    <Header>
      <Name>JAYDEN TAN</Name>
      <SocialBar urls={["https://www.linkedin.com/in/jayden-tan-29542b141/", "https://github.com/jaydentanke"]} />
      <NavBar>
        <StyledLink activeStyle={{ color: "rgb(255, 87, 0)" }} to="/">
          ABOUT
        </StyledLink>
        <StyledLink activeStyle={{ color: "rgb(255, 87, 0)" }} to="/contact">
          CONTACT
        </StyledLink>
      </NavBar>
    </Header>
  )
}
