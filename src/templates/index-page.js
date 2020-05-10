import React from "react"
import PropTypes from "prop-types"
import logo from "../images/gatsby-icon.png"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Tween, Timeline } from "react-gsap"

import {
  MobileMenu,
  Parallax,
  Diagonal,
  SixPack,
  ArrowPanel,
  Slide,
  CheckerDuo,
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

export const IndexPageTemplate = ({ title, heading, subheading, image }) => (
  <div>
    <Parallax
      image={<Img fluid={image.childImageSharp.fluid} />}
      // image={<img src="https://placeimg.com/1000/1000/animals" alt="" />}
      height="70vh"
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
                delay="1"
                from={{
                  xPercent: -200,
                }}
              >
                <h1>Independent.</h1>
              </Tween>
              <Tween
                delay="+=.5"
                from={{
                  xPercent: -200,
                }}
              >
                <h1>Trusted.</h1>
              </Tween>
              <Tween
                delay="+=1"
                from={{
                  xPercent: -200,
                }}
              >
                <h1>Professional.</h1>
              </Tween>
            </Timeline>
          </div>
        </div>
      }
    />
    {stuffs &&
      stuffs.map((stuff, index) => {
        return (
          <CheckerDuo
            image={<Img fluid={image.childImageSharp.fluid} />}
            height="500px"
            textPosition={index % 2 === 0 ? "right" : "left"}
            // backgroundColor="rgba(30,144,255, .85)"
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
              }}
            >
              <h2 style={{ margin: 0 }}>{stuff.title}</h2>
              <p>{stuff.blurb}</p>
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
