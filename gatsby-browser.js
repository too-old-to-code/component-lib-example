/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// require("typeface-teko")
// You can delete this file if you're not using it
exports.shouldUpdateScroll = () => {
  // document.getElementById("main-area").scrollTo(0, 0)
  return [0, 0]
}

exports.onInitialClientRender = () => {
  window.scrollTo(0, 0)
  // document.getElementById("main-area").scrollTo(0, 0)
}
