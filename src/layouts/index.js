import React, { useState, useEffect, useRef } from "react"
import "../styles/global.scss"
// import React, { useState } from "react"
import { Link, useStaticQuery, navigate } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Footer } from "../components/footer"
import { IndexPageTemplate } from "../templates/index-page"
// import { gsap } from "gsap"
// import { TextPlugin } from "gsap/TextPlugin"
// gsap.registerPlugin(TextPlugin)
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import logo from "../images/gatsby-icon.png"
// import { Navbar } from "../../libs"
import {
  Navbar,
  NavbarLayoutMulti,
  NavbarItem,
  MobileMenu,
  MainArea,
  Parallax,
  Slide,
} from "@custom-lib"
import {
  ScrollController,
  ScrollScene,
} from "@custom-lib/scroll-magic/custom-scrollmagic"
// import { Controller, Scene } from "react-scrollmagic";

import { ThemeProvider } from "styled-components"
import { theme } from "../theme.js"

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

const NavItemInner = props => {
  return <div style={{ textAlign: "center" }}>{props.children}</div>
}

NavItemInner.propTypes = {
  children: PropTypes.any,
}

const MobileMenuWithContent = ({ isOpen }) => {
  return (
    <MobileMenu isOpen={isOpen}>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "block",
        }}
      >
        Home
      </Link>
      <Link
        to="/test"
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "block",
        }}
      >
        About
      </Link>
      <div>About</div>
      <div>Services</div>
      <div>Opportunities</div>
    </MobileMenu>
  )
}

MobileMenuWithContent.propTypes = {
  isOpen: PropTypes.bool,
}

const Layout = ({ children }) => {
  const [burgerMenuIsActive, burgerMenuToggleActive] = useState(false)
  const openMenu = useRef()

  // close the menu when the page changes
  useEffect(() => {
    burgerMenuToggleActive(false)
  }, [children])

  // Close the mobile menu if the screen is resized while the menu is open
  useEffect(() => {
    const handleResize = () => burgerMenuToggleActive(false)
    if (typeof window !== "undefined")
      window.addEventListener("resize", handleResize)
    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", handleResize)
    }
  })

  // ensure the main screen can't be scrolled when the menu is open
  useEffect(() => {
    let targetElement = openMenu
    if (burgerMenuIsActive) {
      disableBodyScroll(targetElement)
    } else {
      enableBodyScroll(targetElement)
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [burgerMenuIsActive])

  const data = useStaticQuery(graphql`
    query SiteLogoQuery {
      placeholderImage: file(relativePath: { eq: "bpw-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      markdownRemark(frontmatter: { templateKey: { eq: "sitewide" } }) {
        frontmatter {
          title
        }
      }
    }
  `)

  console.log(data)
  return (
    <ThemeProvider theme={theme}>
      <ScrollController>
        <ScrollScene
          classToggle="second-color"
          triggerHook="0"
          triggerElement="#top-flag"
          offset="50px"
        >
          <div>
            <Navbar
              style={{
                boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.125)",
                letterSpacing: "1px",
              }}
              burgerMenuStyle="spin"
              burgerMenuIsActive={burgerMenuIsActive}
              toggleMenu={() => burgerMenuToggleActive(!burgerMenuIsActive)}
            >
              <NavbarLayoutMulti
                itemsPosition="right"
                logoPosition="left"
                logo={
                  <NavbarItem logo>
                    <Img
                      fluid={data.placeholderImage.childImageSharp.fluid}
                      style={{ width: "70px" }}
                    />
                  </NavbarItem>
                }
                mobileMenu={
                  <MobileMenuWithContent isOpen={burgerMenuIsActive} />
                }
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <NavbarItem key="1">
                    <NavItemInner>Home</NavItemInner>
                  </NavbarItem>
                </Link>
                <Link
                  to="/test"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <NavbarItem key="2">
                    <NavItemInner>About</NavItemInner>
                  </NavbarItem>
                </Link>
                <a
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <NavbarItem
                    key="3"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <NavItemInner>Services</NavItemInner>
                  </NavbarItem>
                </a>
                <a
                  href="/test"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <NavbarItem key="4">
                    <NavItemInner>Opportunities</NavItemInner>
                  </NavbarItem>
                </a>
              </NavbarLayoutMulti>
            </Navbar>
          </div>
        </ScrollScene>
      </ScrollController>
      <div id="top-flag"></div>
      {children}
      <div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

// <MainArea
//   forceToTop
//   style={{ overflowScrolling: "touch", WebkitOverflowScrolling: "touch" }}
// >
// </MainArea>
// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

export default Layout
