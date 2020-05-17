import React from "react"
import { SocialIcon } from "react-social-icons"
import Img from "gatsby-image"
import { Row, Col, Hidden } from "react-grid-system"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 40px;
  background-color: #06426a;
`

export const Footer = ({ image, siteData }) => {
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
              {siteData.addressLine.map(line => {
                return <div>{line}</div>
              })}
              <br />
              <div>{siteData.phoneNumber}</div>
              <div>{siteData.email}</div>
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
              }}
            >
              <div style={{ width: "150px" }}>
                <Img fluid={image.childImageSharp.fluid} />
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
        {siteData.socialmedia.map(sm => {
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
