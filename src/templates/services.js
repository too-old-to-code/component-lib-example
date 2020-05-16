import React from "react"
import Img from "gatsby-image"
export const ServicesPageTemplate = props => {
  return (
    <div>
      {props.sections.map((section, index) => {
        return section.type === "text" ? (
          <h1 key={index}>{section.words}</h1>
        ) : (
          <Img key={index} fluid={section.path.childImageSharp.fluid} />
        )
      })}
    </div>
  )
}

const ServicesPage = ({ data }) => {
  console.log(data)
  return (
    <ServicesPageTemplate sections={data.markdownRemark.frontmatter.section} />
  )
}

export default ServicesPage

export const pageQuery = graphql`
  query ServicesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "services" } }) {
      frontmatter {
        section {
          type
          words
          path {
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
