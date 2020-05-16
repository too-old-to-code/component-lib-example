import React from "react"
import { SocialIcon } from "react-social-icons"
import Img from "gatsby-image"
import { Row, Col, Hidden } from "react-grid-system"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 40px;
  background-color: #06426a;
`

export const Footer = props => {
  return (
    <StyledFooter>
      <Row>
        <Col xs={12} sm={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              flexDirection: "column",
            }}
          >
            <div>
              <div style={{ fontWeight: "bold" }}>Contact us:</div>
              <div>Cathedral Chambers</div>
              <div>107 Stow Hill</div>
              <div>Newport</div>
              <div>NP20 4ED</div>
              <br />
              <div>01633 213 116</div>
              <div>info@bpw-insurance.co.uk</div>
            </div>
          </div>
        </Col>
        <Hidden xs>
          <Col sm={6}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                flexDirection: "column",
                // height: "100%",
              }}
            >
              <div style={{ width: "150px" }}>
                <Img fluid={props.image.childImageSharp.fluid} />
              </div>
            </div>
          </Col>
        </Hidden>
      </Row>
      <hr style={{ margin: "40px 30px" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.siteData.socialmedia.map(sm => {
          return (
            <SocialIcon
              key={sm}
              fgColor="white"
              url={sm}
              style={{ margin: "10px" }}
            />
          )
        })}
      </div>
    </StyledFooter>
  )
}
