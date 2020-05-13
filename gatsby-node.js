const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /my-component-lib/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(edge => {
      console.log(edge.node.frontmatter.templateKey == null)
      if (edge.node.frontmatter.templateKey === "sitewide") return
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        // path: "/test",
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })

  // Tag pages:
  // let tags = []
  // Iterate through each post, putting all found tags into `tags`
  // posts.forEach(edge => {
  //   if (_.get(edge, `node.frontmatter.tags`)) {
  //     tags = tags.concat(edge.node.frontmatter.tags)
  //   }
  // })
  // Eliminate duplicate tags
  // tags = _.uniq(tags)

  // Make tag pages
  // tags.forEach(tag => {
  //   const tagPath = `/tags/${_.kebabCase(tag)}/`

  //   createPage({
  //     path: tagPath,
  //     component: path.resolve(`src/templates/tags.js`),
  //     context: {
  //       tag,
  //     },
  //   })
  // })
  // })
}

// This will create the routes for the templates
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
