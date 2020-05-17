import React from "react"
import { SocialIcon } from "react-social-icons"
import Img from "gatsby-image"
import { Row, Col, Hidden } from "react-grid-system"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 40px;
  background-color: #06426a;
`

const PlainLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
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
              <address>
                {siteData.addressLine.map(line => {
                  return <div>{line}</div>
                })}
                <br />
                <PlainLink href={`tel:${siteData.phoneNumber}`}>
                  {siteData.phoneNumber}
                </PlainLink>
                <PlainLink href={`mailto:${siteData.email}`}>
                  {siteData.email}
                </PlainLink>
              </address>
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
