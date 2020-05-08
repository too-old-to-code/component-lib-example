// import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
// import {
//   ScrollController,
//   ScrollScene,
// } from "../scroll-magic/custom-scrollmagic";
// import { Tween, Timeline } from "react-gsap";

// const ParallaxStyled = styled.div`
//   position: relative;
//   overflow: hidden;
//   .parallax {
//     // height: 500px;
//     height: 90vh;
//     position: relative;
//     overflow: hidden;
//     div {
//       position: absolute;
//       left: 0;
//       right: 0;
//       text-align: center;
//       color: white;
//     }

//     .image-wrapper,
//     img {
//       width: 100%;
//       height: 130%;

//       img {
//         object-fit: cover;
//       }
//     }
//     h2 {
//       position: absolute;
//       left: 200px;
//       text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
//         0px -5px 35px rgba(255, 255, 255, 0.3);
//     }
//   }
// `;

// export const ParallaxImage = (props) => (
//   <ParallaxStyled>
//     <ScrollController>
//       <ScrollScene duration="300%" triggerHook="onEnter">
//         <Timeline
//           wrapper={
//             <div className="parallax" style={{ height: props.height }} />
//           }
//         >
//           <Tween from={{ yPercent: -30 }} to={{ yPercent: 0 }}>
//             <div className="image-wrapper">{props.image}</div>
//           </Tween>
//         </Timeline>
//       </ScrollScene>
//       <ScrollScene duration="80" triggerHook="onEnter">
//         <Timeline
//           wrapper={
//             <div
//               style={{
//                 position: "absolute",
//                 top: "0%",
//                 left: "0",
//                 right: "0",
//                 bottom: "0",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             />
//           }
//         >
//           <Tween

//             from={{
//               scale: 1,

//               xPercent: 100,
//             }}
//             to={{
//               scale: 1,

//               xPercent: 0,
//             }}

//           >
//             <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
//               {props.staticContent}
//             </div>
//           </Tween>
//         </Timeline>
//       </ScrollScene>
//     </ScrollController>
//   </ParallaxStyled>
// );

// ParallaxImage.propTypes = {
//   height: PropTypes.string,
//   staticContent: PropTypes.any,
//   image: PropTypes.any,
// };

// ParallaxImage.defaultProps = {
//   staticContent: "",
// };

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  ScrollController,
  ScrollScene,
} from "../scroll-magic/custom-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const ParallaxStyled = styled.div`
  position: relative;
  overflow: hidden;
  .parallax {
    height: 90vh;
    position: relative;
    overflow: hidden;
    div {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      color: white;
    }

    .image-wrapper,
    img {
      width: 100%;
      height: 130%;

      img {
        object-fit: cover;
        object-position: 50% 50%;
      }
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
  ${(props) => console.log(props) || (props.hideOnMobile && "display: none;")}
}
`;
// ${(props) =>
//   props.hideOnMobile &&
//   `
// @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
//   display: none;
// }`
export const ParallaxImage = (props) => (
  <ParallaxStyled hideOnMobile={props.hideOnMobile}>
    <ScrollController container="#main-area">
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
);

ParallaxImage.propTypes = {
  height: PropTypes.string,
  staticContent: PropTypes.any,
  image: PropTypes.any,
  hideOnMobile: PropTypes.bool,
};

ParallaxImage.defaultProps = {
  staticContent: "",
};
