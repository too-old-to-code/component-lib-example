import React from "react"
import PropTypes from "prop-types"
import logo from "../images/gatsby-icon.png"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  MobileMenu,
  Parallax,
  Diagonal,
  SixPack,
  ArrowPanel,
  Slide,
  // MainArea
} from "@custom-lib"

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  image,
  mainpitch,
}) => (
  <div>
    <Parallax
      image={<Img fluid={image.childImageSharp.fluid} />}
      height="70vh"
      staticContent={
        <Slide
          duration="100"
          triggerHook="1"
          offset="0"
          fromDirection="right"
          startPercent="100"
          endPercent="0"
        >
          <h1>This is the test page</h1>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            facere vitae rem optio, provident voluptatem ut ipsum non at dolor,
            quis nihil! Voluptatibus itaque, aspernatur doloribus tempore facere
            sunt, eveniet!
          </div>
          <div>
            Eligendi obcaecati quidem illum laudantium, assumenda blanditiis.
            Iusto tempore eaque unde, consectetur voluptates iure earum
            blanditiis aliquam dolore asperiores officia non harum deleniti
            nostrum repellendus est nobis sunt nemo quibusdam!
          </div>
        </Slide>
      }
    />
    <Parallax
      image={<img src="https://placeimg.com/1000/1000/animals" alt="" />}
      height="90vh"
      staticContent={
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {subheading}
        </div>
      }
    />
  </div>
)

const TestPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      image={frontmatter.image}
      mainpitch={frontmatter.mainpitch}
    />
  )
}

TestPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TestPage

export const pageQuery = graphql`
  query TestPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "test-page" } }) {
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
