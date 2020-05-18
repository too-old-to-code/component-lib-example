import React from "react"
// import Img from "gatsby-image"

export const OurClientsPageTemplate = props => {
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

const ClientsPage = ({ data }) => {
  console.log(data)
  return (
    <OurClientsPageTemplate
    // sections={data.markdownRemark.frontmatter.section}
    />
  )
}

export default ClientsPage

// export const pageQuery = graphql`
//   query OurClientsPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "clients" } }) {
//       frontmatter {
//         section {
//           type
//           words
//           path {
//             childImageSharp {
//               fluid(maxWidth: 1500) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
