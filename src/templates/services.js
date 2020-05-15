import React from "react"

export const ServicesPageTemplate = props => {
  return <div>{props.stuff}</div>
}

const ServicesPage = () => {
  return <ServicesPageTemplate stuff={"hello"} />
}

export default ServicesPage

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
//       frontmatter {
//         introduction {
//           heading
//           text {
//             paragraph
//           }
//         }
//       }
//     }
//   }
// `
