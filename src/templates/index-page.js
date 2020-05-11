import React from "react"
import PropTypes from "prop-types"
import logo from "../images/gatsby-icon.png"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Tween, Timeline, Controls } from "react-gsap"

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
  // MainArea
} from "@custom-lib"

const stuffs = [
  {
    title: "Property Owners",
    blurb:
      "We cover all property owners insurance from commercial to buy-to-let properties.",
    image: null,
  },
  {
    title: "Motor Trade",
    blurb:
      "Cover for all types of Motor Trade businesses, from small workshops up to main dealerships.",
    image: null,
  },
]

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
      height="85vh"
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
          <div style={{ marginLeft: "100px" }}>
            <Timeline duration="2">
              <Tween
                ease="Power2.easeIn"
                delay="1"
                from={{
                  xPercent: -150,
                }}
              >
                <h1>Independent.</h1>
              </Tween>
              <Tween
                ease="Power3.easeIn"
                // ease="Bounce.easeOut"
                delay="+=.5"
                from={{
                  xPercent: -150,
                }}
              >
                <h1>Trusted.</h1>
              </Tween>
              <Tween
                // ease="Bounce.easeOut"
                ease="Power4.easeIn"
                delay="+=1"
                from={{
                  xPercent: -150,
                }}
              >
                <h1>Professional.</h1>
              </Tween>
            </Timeline>
          </div>
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
