import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Nav = styled.nav`
  z-index: 75;
  background: ${({ theme }) => theme?.navbar?.background || "#3b3939"};
  color: ${({ theme }) => theme?.navbar?.textColor || "grey"};
  font-family: sans-serif;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: ${({ theme }) => theme?.navbar?.height || "54px"};
`;
// display: flex;
// justify-content: ${(props) => (props.center ? "center" : "space-between")};

export const Navbar = () => {
  return <Nav />;
};
