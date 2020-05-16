import CMS from "netlify-cms-app"
import React, { useState, useEffect } from "react"
import { StyleSheetManager, ThemeProvider } from "styled-components"
import IndexPagePreview from "./preview-templates/IndexPagePreview"

import theme from "../theme"

const StylesheetInjector = ({ children }) => {
  const [iframeRef, setIframeRef] = useState(undefined)

  useEffect(() => {
    const iframe = document.querySelector("#nc-root iframe")
    const iframeHeadElem = iframe && iframe.contentDocument.head
    setIframeRef(iframeHeadElem)
  })

  return (
    <>
      {iframeRef && (
        <ThemeProvider theme={theme}>
          <StyleSheetManager target={iframeRef}>
            <h1>Preview working</h1>
            {children}
          </StyleSheetManager>
        </ThemeProvider>
      )}
    </>
  )
}

CMS.registerPreviewTemplate("index-page", props => (
  <StyleSheetInjector>
    <IndexPagePreview {...props} />
  </StyleSheetInjector>
))
