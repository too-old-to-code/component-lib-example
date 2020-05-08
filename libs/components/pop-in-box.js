import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  ScrollController,
  ScrollScene,
} from "../scroll-magic/custom-scrollmagic";

const InnerWrapper = styled.div`
  position: relative;
  transform: translateY(100px);
  transition: transform 0.6s, opacity 1s;
  opacity: 0;
  &.entered-viewport {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const PopIn = (props) => (
  <ScrollController>
    <ScrollScene
      classToggle="entered-viewport"
      triggerHook="0.9"
      reverse={false}
    >
      <InnerWrapper>{props.children}</InnerWrapper>
    </ScrollScene>
  </ScrollController>
);

PopIn.propTypes = {
  children: PropTypes.any,
};
