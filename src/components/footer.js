import React from "react"
import { SocialIcon } from "react-social-icons"

import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 40px;
  background-color: #06426a;
`

export const Footer = props => {
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
        {props.siteData.socialmedia.map(sm => {
          return (
            <SocialIcon fgColor="white" url={sm} style={{ margin: "10px" }} />
          )
        })}
      </div>
    </StyledFooter>
  )
}
