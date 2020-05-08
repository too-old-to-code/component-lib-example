import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";

export const ScrollController = styled(Controller).attrs(({ theme }) => ({
  container: theme?.navbar?.position !== "fixed" ? "body" : "#main-area",
}))``;

// export const ScrollController = styled(Controller).attrs(({ theme }) => {
//   return theme?.navbar?.position === "fixed" ? { container: "#main-area" } : {};
// })``;

export const ScrollScene = Scene;
