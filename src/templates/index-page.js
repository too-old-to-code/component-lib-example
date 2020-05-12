import React from "react"
import PropTypes from "prop-types"
import logo from "../images/gatsby-icon.png"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Tween, Timeline, Controls } from "react-gsap"
import styled from "styled-components"

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

const ImageText = styled.div`
  padding-top: 90px;
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

export const IndexPageTemplate = ({
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
      // image={<img src="https://placeimg.com/1000/1000/animals" alt="" />}
      height="90vh"
      staticContent={
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <TwoPack
            style={{ width: "100%" }}
            one={
              <ImageText>
                <Timeline duration="4">
                  <Tween
                    ease="Power2.easeIn"
                    duration="0.5"
                    from={{
                      xPercent: -150,
                    }}
                  >
                    <div>Independent.</div>
                  </Tween>
                  <Tween
                    ease="Power3.easeIn"
                    duration="0.5"
                    from={{
                      xPercent: -150,
                    }}
                  >
                    <div>Trusted.</div>
                  </Tween>
                  <Tween
                    ease="Power4.easeIn"
                    duration="0.5"
                    from={{
                      xPercent: -150,
                    }}
                  >
                    <div>Professional.</div>
                  </Tween>
                  <Tween
                    ease="Power4.easeIn"
                    duration="1"
                    from={{
                      opacity: 0,
                    }}
                  >
                    <div style={{ color: "white" }}>Insurance brokers.</div>
                  </Tween>
                </Timeline>
              </ImageText>
            }
            two={
              <BoxPanel>
                <ActionButton>Get Quote</ActionButton>
              </BoxPanel>
            }
          />
        </div>
      }
    />
    <BoxPanel dangerouslySetInnerHTML={{ __html: introduction }}></BoxPanel>
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
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        introduction
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
