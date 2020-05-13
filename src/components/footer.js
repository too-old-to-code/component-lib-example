import React from "react"
import { SocialIcon } from "react-social-icons"

import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 40px;
  background-color: #06426a;
`

export const Footer = () => {
  return (
    <StyledFooter>
      <div style={{ color: "white" }}>
        <div>Contact us</div>
        <div>Cathedral Chambers</div>
        <div>107 Stow Hill</div>
        <div>Newport</div>
        <div>NP20 4ED</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SocialIcon
          fgColor="white"
          url="http://twitter.com/jaketrent"
          style={{ margin: "10px" }}
        />
        <SocialIcon fgColor="white" url="http://facebook.com/jaketrent" />
      </div>
    </StyledFooter>
  )
}
