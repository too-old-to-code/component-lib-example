const DEFAULT = "#718093";
const DEFAULT_HOVERED = "#556170";
const PRIMARY = "#273c75";
const PRIMARY_HOVERED = "#101932";
const INFO = "#00a8ff";
const INFO_HOVERED = "#007dbf";
const SUCCESS = "#4cd137";
const SUCCESS_HOVERED = "#37a425";
const WARNING = "#fbc531";
const WARNING_HOVERED = "#f2b304";
const DANGER = "#e84118";
const DANGER_HOVERED = "#af3011";
const LIGHT = "#f5f6fa";
const LIGHTISH = "#dcdde1";
const DARK = "#2f3640";
const DARKISH = "#353b48";

export const theme = {
  breakpoints: {
    maxMobile: "999px",
    minDesktop: "1000px",
  },
  colors: {
    default: DEFAULT,
    primary: PRIMARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    danger: DANGER,
    light: LIGHT,
    lightish: LIGHTISH,
    dark: DARK,
    darkish: DARKISH,
  },
  buttons: {
    borderRadius: "0px",
    default: `
      background-color: ${DEFAULT};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${DEFAULT_HOVERED};
      }
    `,
    primary: `
      background-color: ${PRIMARY};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${PRIMARY_HOVERED};
      }
    `,
    info: `
      background-color: ${INFO};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${INFO_HOVERED};
      }
    `,
    success: `
      background-color: ${SUCCESS};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${SUCCESS_HOVERED};
      }
    `,
    warning: `
      background-color: ${WARNING};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${WARNING_HOVERED};
      }
    `,
    danger: `
      background-color: ${DANGER};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${DANGER_HOVERED};
      }
    `,
  },
  menu: {
    textColor: "white",
    hoverTextColor: "#FF2B43",
    background: "black",
  },
  hamburger: {
    position: "right", // left or right
  },
  navbar: {
    textColor: "white",
    position: "relative",
    hoverTextColor: "#FF2B43",
    // background: "#192a56",
    background: "black",
    // hoverBackground: "brown",
    // background: "white",
    backgroundSelected: "#2dbeff",
    height: "65px",
  },
  sidebar: {
    background: "#273c75",
    textColor: "grey",
    collapsedWidth: "55px",
    width: "300px",
  },
};
