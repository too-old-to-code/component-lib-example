import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DiagonalSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
  min-width: 80%;
  border-left: 30px solid #e0e0e0;
  padding-left: 7%;
  z-index: 1;
  transform: skew(${({ skew }) => skew}deg);
`;

const InnerSection = styled.div`
  transform: skew(${({ skew }) => skew * -1}deg);
  width: 50%;
`;

export const Diagonal = ({ skew, children }) => {
  return (
    <DiagonalSection skew={skew}>
      <InnerSection skew={skew}>{children}</InnerSection>
    </DiagonalSection>
  );
};

Diagonal.propTypes = {
  children: PropTypes.any,
  skew: PropTypes.string,
};
