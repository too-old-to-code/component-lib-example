import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CheckerDuoContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    &: ${(props) => (props.front ? "after" : "before")} {
      content: "";
      flex: 1;
    }
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  & img {
    width: 100%;
    height: 100%;
    z-index: 0;
    object-fit: cover;
    object-position: 50% 100%;
  }
`;

const ContentPanel = styled.div`
  z-index: 1;
  position: relative;
  background: rgba(255, 255, 255, 0.8);
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    padding: 50px 0 70px 0;
  }
`;

export const CheckerDuo = (props) => {
  return (
    <CheckerDuoContainer
      height={props.height}
      front={props.textPosition === "start"}
    >
      <ImageWrapper>{props.image}</ImageWrapper>
      <ContentPanel>{props.children}</ContentPanel>
    </CheckerDuoContainer>
  );
};

CheckerDuo.propTypes = {
  image: PropTypes.any,
  children: PropTypes.any,
  height: PropTypes.string,
  textPosition: PropTypes.string,
};
