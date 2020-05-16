import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  ScrollController,
  ScrollScene,
} from "../scroll-magic/custom-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import { Visible, Hidden } from "react-grid-system"

const ParallaxContainer = styled.div`
  overflow: hidden;
  position: relative;
`

const ParallaxPanel = styled.div.attrs(({ height = "90vh" }) => ({
  style: { height },
}))`
  position: relative;
  overflow: hidden;
`

const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  height: 100%;

  > div {
    height: 100%;
  }
`

export const Parallax = props => (
  <React.Fragment>
    <Hidden xs>
      <ParallaxContainer>
        <ScrollController>
          <ScrollScene duration="200%" triggerHook={props.triggerHook}>
            <Timeline wrapper={<ParallaxPanel height={props.height} />}>
              <Tween from={{ yPercent: 0 }} to={{ yPercent: 30 }}>
                <ImageWrapper>{props.image}</ImageWrapper>
              </Tween>
            </Timeline>
          </ScrollScene>
        </ScrollController>
        {props.staticContent}
      </ParallaxContainer>
    </Hidden>
    <Visible xs>
      <ParallaxContainer>
        <ParallaxPanel height={props.mobileHeight}>
          <ImageWrapper>{props.mobileImage}</ImageWrapper>
        </ParallaxPanel>
        {props.staticContent}
      </ParallaxContainer>
    </Visible>
  </React.Fragment>
)

Parallax.propTypes = {
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  staticContent: PropTypes.any,
  image: PropTypes.any,
  hideOnMobile: PropTypes.bool,
  triggerHook: PropTypes.string,
}

Parallax.defaultProps = {
  staticContent: "",
  triggerHook: "onLeave",
}
