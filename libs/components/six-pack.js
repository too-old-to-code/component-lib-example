import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "flexboxgrid";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const SixPack = (props) => {
  return (
    <div className="row" style={{ margin: 0 }}>
      <div className="col-xs-12 col-sm-6 col-md-4">
        <Box>{props.one}</Box>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-4">
        <Box>{props.two}</Box>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-4">
        <Box>{props.three}</Box>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-4">
        <Box>{props.four}</Box>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-4">
        <Box>{props.five}</Box>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-4">
        <Box>{props.six}</Box>
      </div>
    </div>
  );
};

SixPack.propTypes = {
  one: PropTypes.any,
  two: PropTypes.any,
  three: PropTypes.any,
  four: PropTypes.any,
  five: PropTypes.any,
  six: PropTypes.any,
};
