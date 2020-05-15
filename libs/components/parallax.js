import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  ScrollController,
  ScrollScene,
} from "../scroll-magic/custom-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import { Visible, Hidden } from "react-grid-system"

const ParallaxStyled = styled.div`
  position: relative;
  overflow: hidden;
  .parallax {
    height: 90vh;
    position: relative;
    overflow: hidden;


    .image-wrapper{
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      color: white;
      height: 100%;

      > div {
        height: 100%;
      }
    }
    img {
      width: 100%;
      min-height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
    h2 {
      position: absolute;
      left: 200px;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
        0px -5px 35px rgba(255, 255, 255, 0.3);
    }
  }
}
@media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
  ${props => console.log(props) || (props.hideOnMobile && "display: none;")}
}
`
// ${(props) =>
//   props.hideOnMobile &&
//   `
// @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
//   display: none;
// }`
export const Parallax = props => (
  <React.Fragment>
    <Hidden xs>
      <ParallaxStyled hideOnMobile={props.hideOnMobile}>
        <ScrollController>
          <ScrollScene duration="200%" triggerHook={props.triggerHook}>
            <Timeline
              wrapper={
                <div className="parallax" style={{ height: props.height }} />
              }
            >
              <Tween from={{ yPercent: 0 }} to={{ yPercent: 30 }}>
                <div className="image-wrapper">{props.image}</div>
              </Tween>
            </Timeline>
          </ScrollScene>
        </ScrollController>
        {props.staticContent}
      </ParallaxStyled>
    </Hidden>
    <Visible xs>
      <ParallaxStyled>
        <div className="parallax">
          <div className="image-wrapper">{props.image}</div>
        </div>
        {props.staticContent}
      </ParallaxStyled>
    </Visible>
  </React.Fragment>
)

Parallax.propTypes = {
  height: PropTypes.string,
  staticContent: PropTypes.any,
  image: PropTypes.any,
  hideOnMobile: PropTypes.bool,
  triggerHook: PropTypes.string,
}

Parallax.defaultProps = {
  staticContent: "",
  triggerHook: "onLeave",
}
