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
  column-count: 2;
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
  // @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
  @media (max-width: 900px) {
    column-count: 1;
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
      <h2 style={{ textAlign: "center", color: "#0A99D8" }}>{heading}</h2>
      <ColumnText>{children}</ColumnText>
    </React.Fragment>
  )
}

export const AboutUsPageTemplate = ({
  title,
  heading,
  subheading,
  image,
  categoryPitches,
  introduction,
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
                <Timeline duration="4">
                  <Tween
                    ease="Power2.easeIn"
                    duration="0.5"
                    reverse={false}
                    from={{
                      xPercent: -150,
                    }}
                  >
                    <div>Our people offer unrivalled service and knowledge</div>
                  </Tween>
                </Timeline>
              </ImageText>
            </Col>
            <Col xs={12} sm={6}>
              <BoxPanel
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <ActionButton>Get Quote</ActionButton>
              </BoxPanel>
            </Col>
          </Row>
        </div>
      }
    />

    <BoxPanel>
      <Row>
        <Col md={8} sm={6} xs={12}>
          <HeadedColumnText heading={introduction.heading}>
            {introduction.text.map(({ paragraph }) => (
              <p>{paragraph}</p>
            ))}
          </HeadedColumnText>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <BulletPointList
            style={{ backgroundColor: "#06426A", color: "#FCFAFF" }}
          >
            <h3 style={{ marginBottom: 0 }}>Why pick us?</h3>
            <ul>
              <li>Service led business</li>
              <li>Independent and trusted</li>
              <li>Highly competitive premiums</li>
              <li>Personal consultants</li>
              <li>Dedicated claims assistance</li>
              <li>Finance Available</li>
            </ul>
          </BulletPointList>
        </Col>
      </Row>
    </BoxPanel>
    {categoryPitches &&
      categoryPitches.map((pitch, index) => {
        return (
          <CheckerDuo
            image={<Img fluid={pitch.image.childImageSharp.fluid} />}
            height="350px"
            textPosition={index % 2 === 0 ? "right" : "left"}
            backgroundColor="rgba(50,70,80, .85)"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                maxWidth: "70%",
                color: "white",
                fontSize: "1.2em",
                padding: "30px 0",
              }}
            >
              <PopIn>
                <h2 style={{ margin: 0 }}>{pitch.title}</h2>
                <p>{pitch.text}</p>
              </PopIn>
            </div>
          </CheckerDuo>
        )
      })}
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      image={frontmatter.image}
      categoryPitches={frontmatter.categorypitch}
      introduction={frontmatter.introduction}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query AboutUsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        introduction {
          heading
          text {
            paragraph
          }
        }
        categorypitch {
          text
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
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
