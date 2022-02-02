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
            main: "#fff",
            contrastText: "#0473fb",
          },
          background: {
            default: "#0473fb",
            paper: "#0473fb",
          },
          mainWindow: {
            background: "#fff",
          },
          text: {
            primary: "#000",
          },
          text2: {
            primary: "#fff",
          },
          secondary: {
            main: "#fff",
            contrastText: "#fff",
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
            contrastText: "#000",
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
