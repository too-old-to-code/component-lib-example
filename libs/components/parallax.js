import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  ScrollController,
  ScrollScene,
} from "../scroll-magic/custom-scrollmagic"
import { Tween, Timeline } from "react-gsap"

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
      height: 120%;

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
  <ParallaxStyled hideOnMobile={props.hideOnMobile}>
    <ScrollController>
      <ScrollScene duration="300%" triggerHook="onEnter">
        <Timeline
          wrapper={
            <div className="parallax" style={{ height: props.height }} />
          }
        >
          <Tween from={{ yPercent: -30 }} to={{ yPercent: 0 }}>
            <div className="image-wrapper">{props.image}</div>
          </Tween>
        </Timeline>
      </ScrollScene>
    </ScrollController>
    {props.staticContent}
  </ParallaxStyled>
)

Parallax.propTypes = {
  height: PropTypes.string,
  staticContent: PropTypes.any,
  image: PropTypes.any,
  hideOnMobile: PropTypes.bool,
}

Parallax.defaultProps = {
  staticContent: "",
}
