// import PropTypes from "prop-types";
import styled from "styled-components"

export const MainArea = styled.main.attrs(() => ({
  id: "main-area",
}))`
  zIndex:0,
  position: ${({ theme }) =>
    theme.navbar.position === "fixed" ? "fixed" : "relative"};
  top: ${({ theme }) =>
    theme.navbar.position === "fixed" && theme?.navbar?.height};
  ${props => props.forceToTop && "top: 0;"}
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
`

// MainArea.propTypes = {
//   fixed: PropTypes.bool,
// };
