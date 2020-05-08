import React from "react"
// import React, { useState } from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import logo from "../images/gatsby-icon.png"
// import { Navbar } from "../../libs"
import {
  MobileMenu,
  Parallax,
  Diagonal,
  SixPack,
  ArrowPanel,
  Slide,
  // MainArea
} from "@custom-lib"

const NavItemInner = props => {
  return <div style={{ textAlign: "center" }}>{props.children}</div>
}

NavItemInner.propTypes = {
  children: PropTypes.any,
}

const MobileMenuWithContent = ({ isOpen }) => {
  return (
    <MobileMenu isOpen={isOpen}>
      <div>Home</div>
      <div>About</div>
      <div>Services</div>
      <div>Opportunities</div>
    </MobileMenu>
  )
}

MobileMenuWithContent.propTypes = {
  isOpen: PropTypes.bool,
}

const IndexPage = () => {
  return (
    <React.Fragment>
      <Parallax height="90vh" />
      <Parallax
        height="90vh"
        image={<img src="https://placeimg.com/1000/1000/nature" alt="" />}
        staticContent={
          <Slide
            duration="100"
            triggerHook="1"
            offset="0"
            fromDirection="right"
            startPercent="100"
            endPercent="0"
          >
            <Diagonal skew="-10">
              <h1>Jelena</h1>
              <h1>hello</h1>
            </Diagonal>
          </Slide>
        }
      />
      <Parallax height="90vh" />
      <SixPack
        one={<img style={{ height: "50px" }} src={logo} alt="logo" />}
        two={<img style={{ height: "50px" }} src={logo} alt="logo" />}
        three={<img style={{ height: "50px" }} src={logo} alt="logo" />}
        four={<img style={{ height: "50px" }} src={logo} alt="logo" />}
        five={<img style={{ height: "50px" }} src={logo} alt="logo" />}
        six={<img style={{ height: "50px" }} src={logo} alt="logo" />}
      />
      <Parallax
        image={<img src="https://placeimg.com/1000/1000/animals" alt="" />}
        height="90vh"
        staticContent={
          <Slide
            duration="100"
            triggerHook="1"
            offset="0"
            fromDirection="right"
            startPercent="100"
            endPercent="0"
          >
            <ArrowPanel skew="10" position="right">
              <h1>hello</h1>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet facere vitae rem optio, provident voluptatem ut ipsum
                non at dolor, quis nihil! Voluptatibus itaque, aspernatur
                doloribus tempore facere sunt, eveniet!
              </div>
              <div>
                Eligendi obcaecati quidem illum laudantium, assumenda
                blanditiis. Iusto tempore eaque unde, consectetur voluptates
                iure earum blanditiis aliquam dolore asperiores officia non
                harum deleniti nostrum repellendus est nobis sunt nemo
                quibusdam!
              </div>
            </ArrowPanel>
          </Slide>
        }
      />
      <Parallax height="90vh" />
    </React.Fragment>
  )
}

export default IndexPage
