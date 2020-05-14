import React from "react"
import PropTypes from "prop-types"
import logo from "../images/gatsby-icon.png"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Tween, Timeline, Controls } from "react-gsap"
import styled from "styled-components"
import { Container, Row, Col, Visible } from "react-grid-system"
import { setConfiguration } from "react-grid-system"

import {
  MobileMenu,
  Parallax,
  Diagonal,
  SixPack,
  ArrowPanel,
  Slide,
  CheckerDuo,
  PopIn,
  BoxPanel,
  TwoPack,
  // MainArea
} from "@custom-lib"

setConfiguration({
  gridColumns: 12,
  breakpoints: [576, 900, 1024, 1200],
})

const ImageText = styled.div`
  padding-top: calc(${({ theme }) => theme?.navbar?.height} + 20px);
  margin-left: 50px;
  font-family: "Teko";
  font-size: 4em;
  color: rgb(160, 216, 123);
  text-shadow: 1px 1px 1px black;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    margin-left: 20px;
    font-size: 2.5em;
  }
`

const ActionButton = styled.button`
  padding: 10px 40px;
  background-color: #06426a;
  color: white;
  border: none;
  font-size: 2em;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    font-size: 1.5em;
  }
`

const ColumnText = styled.div`
  column-width: 400px;
  column-gap: 40px;
  padding: 0 40px;
  color: #708080;
  p {
    line-height: 1.4em;
    margin: 20px 0 !important;
    &:first-child {
      margin-top: 0px !important;
    }
  }
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    padding: 0;
    text-align: justify;
  }
`

const BulletPointList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  ul {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: left;
    margin-left: 20px;
    justify-content: space-around;
    li {
      margin: 3px 0;
    }
  }
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    margin: 30px 0;
    ul {
      margin-left: 0;
    }
  }
`

const HeadedColumnText = ({ heading, children }) => {
  return (
    <React.Fragment>
      <h3 style={{ textAlign: "center", color: "#0A99D8" }}>{heading}</h3>
      <ColumnText>{children}</ColumnText>
    </React.Fragment>
  )
}

export const AboutUsPageTemplate = ({
  title,
  heading,
  subheading,
  image,
  aboutUs,
  ourTeam,
}) => (
  <div>
    <Parallax
      image={
        <Img
          fluid={image.childImageSharp.fluid}
          imgStyle={{ objectFit: "cover", objectPosition: "70% 100%" }}
        />
      }
      height="90vh"
      staticContent={
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // display: "flex",
            // alignItems: "center",
          }}
        >
          <Row style={{ height: "100%" }}>
            <Col xs={12} sm={6}>
              <ImageText>
                <div>Our people offer unrivalled service and knowledge</div>
              </ImageText>
            </Col>
          </Row>
        </div>
      }
    />
    <BoxPanel>
      <Row style={{ height: "100%" }}>
        <Col xs={12} sm={8} offset={{ sm: 2 }}>
          <HeadedColumnText heading={aboutUs.heading}>
            {aboutUs.text.map(({ paragraph }) => (
              <p>{paragraph}</p>
            ))}
          </HeadedColumnText>
        </Col>
      </Row>
    </BoxPanel>
    <BoxPanel
      style={{
        backgroundColor: "#06426a",
        textAlign: "center",
        color: "white",
      }}
    >
      <h3>Our Team</h3>
    </BoxPanel>
    <BoxPanel>
      <Row style={{ height: "100%" }}>
        <Col xs={12} sm={8} offset={{ sm: 2 }}>
          <HeadedColumnText heading={ourTeam.heading}>
            {ourTeam.text.map(({ paragraph }) => (
              <p>{paragraph}</p>
            ))}
          </HeadedColumnText>
        </Col>
      </Row>
    </BoxPanel>
  </div>
)

const AboutUsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <AboutUsPageTemplate
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      image={frontmatter.image}
      aboutUs={frontmatter.aboutUs}
      ourTeam={frontmatter.ourTeam}
    />
  )
}

AboutUsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutUsPage

export const pageQuery = graphql`
  query AboutUsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-us" } }) {
      frontmatter {
        aboutUs {
          heading
          text {
            paragraph
          }
        }
        ourTeam {
          heading
          text {
            paragraph
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`
