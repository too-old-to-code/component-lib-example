import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ArrowPanelOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  min-width: 400px;
  ${({ position }) =>
    position === "right"
      ? `
      left: 50%;
      right: 0;
      padding: 20px 50px 20px 90px;
    `
      : `
      left: 0;
      right: 50%;
      padding: 20px 50px 20px 60px;
    `}
  position: absolute;
  line-height: 1.2em;
  z-index: 1;
  &:before,
  &:after {
    content: "";
    position: absolute;
    ${({ position }) =>
      position === "right"
        ? `
        left: 0;
        right: -20%;
        border-left: 20px solid lightgrey;
      `
        : `
        left: -20%;
        right: 0;
        border-right: 20px solid lightgrey;
      `}

    background: rgba(255, 255, 255, 0.9);
    border-left: 20px solid lightgrey;
  }
  &:before {
    transform: skew(${({ skew }) => skew * -1}deg);
    top: 0;
    bottom: 50%;
  }
  &:after {
    transform: skew(${({ skew }) => skew}deg);
    top: 50%;
    bottom: 0%;
  }
`;

const InnerSection = styled.span`
  z-index: 1;
`;

export const ArrowPanel = ({ skew, children, position }) => {
  return (
    <ArrowPanelOuter skew={skew} position={position}>
      <InnerSection>{children}</InnerSection>
    </ArrowPanelOuter>
  );
};

ArrowPanel.propTypes = {
  children: PropTypes.any,
  skew: PropTypes.string,
  position: PropTypes.oneOf(["left", "right"]),
};
