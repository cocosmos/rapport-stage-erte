import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";

const getPaletteMode = (mode: PaletteMode) => ({
  palette: {
    mode: mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          divider: "#000",
          primary: {
            main: "#0473fb",
            contrastText: "#fff",
          },
          background: {
            default: "#4663ac",
            paper: "#4663ac",
          },
          mainWindow: {
            background: "#c1d8f0",
          },
          text: {
            primary: "#fff",
          },
          text2: {
            primary: "#0473fb",
          },
          secondary: {
            main: "#0473fb",
            contrastText: "#0473fb",
          },
        }
      : {
          // palette values for dark mode
          common: {
            white: "#fff",
            black: "#000",
          },
          primary: {
            main: "#610000",
            contrastText: "#fff",
          },
          secondary: {
            main: "#fff",
            contrastText: "#610000",
          },
          neutral: {
            main: grey[500],
            contrastText: "#000b1c",
          },
          text: {
            primary: "#dedede",
          },
          divider: grey[600],
          background: {
            default: "#172130",
            paper: "#172130",
          },
          mainWindow: {
            background: "#000b1c",
          },
        }),
  },
});

export default getPaletteMode;
