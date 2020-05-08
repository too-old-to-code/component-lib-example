import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "flexboxgrid";

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ThreePack = (props) => {
  return (
    <div className="row" style={{ margin: 0 }}>
      <div className="col-xs-12 col-sm-4">
        <Box>{props.one}</Box>
      </div>
      <div className="col-xs-12 col-sm-4">
        <Box>{props.two}</Box>
      </div>
      <div className="col-xs-12 col-sm-4">
        <Box>{props.three}</Box>
      </div>
    </div>
  );
};

ThreePack.propTypes = {
  one: PropTypes.any,
  two: PropTypes.any,
  three: PropTypes.any,
};
