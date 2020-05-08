import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import "flexboxgrid";

const Box = styled.div`
  position: relative;
  display: flex;
  // height: 100%;
  align-items: center;
  justify-content: center;
  // padding: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Col = styled.div`
  // flex: 1 0 75px;
  flex: 1;
  position: relative;
  margin: ${(props) => props.margin}px;
  background-color: lightgreen;
  @media screen and (max-width: 900px) {
    flex: 1 0 calc(25% - ${(props) => props.margin * 2}px);
  }
  @media screen and (max-width: 600px) {
    flex: 1 0 calc(50% - ${(props) => props.margin * 2}px);
  }
  @media screen and (max-width: 300px) {
    display: none;
    flex: 1 0 calc(100% - ${(props) => props.margin * 2}px);
  }
`;

export const FourPack = (props) => {
  console.log(props.children?.length || 0);
  return (
    <Row>
      <Col margin={props.colMargin}>
        <Box>{props.one}</Box>
      </Col>
      <Col margin={props.colMargin}>
        <Box>{props.two}</Box>
      </Col>
      <Col margin={props.colMargin}>
        <Box>{props.three}</Box>
      </Col>
      <Col margin={props.colMargin}>
        <Box>{props.four}</Box>
      </Col>
    </Row>
  );
};

FourPack.propTypes = {
  one: PropTypes.any,
  two: PropTypes.any,
  three: PropTypes.any,
  four: PropTypes.any,
  style: PropTypes.any,
  colMargin: PropTypes.string,
  children: PropTypes.any,
};

Col.propTypes = {
  margin: PropTypes.string,
};

FourPack.defaultProps = {
  colMargin: "0",
};
