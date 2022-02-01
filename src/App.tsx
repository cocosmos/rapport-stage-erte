import "./components/i18next/i18n";
import "./scss/import.scss";
import { useCallback, useMemo, useState } from "react";
import {
  Box,
  createTheme,
  CssBaseline,
  PaletteMode,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import { grey } from "@mui/material/colors";
import Introduction from "./pages/Introduction";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Error from "./pages/Error";
import Conclusion from "./pages/Conclusion";
import Stats from "./pages/Stats";
import useLocalStorage from "./hooks/localStorage";

declare module "@mui/material/styles" {
  interface Palette {
    mainWindow: {
      background: string;
    };
  }

  interface PaletteOptions {
    mainWindow?: {
      background: string;
    };
  }
}

const App = () => {
  //const { t } = useTranslation();

  const [headerTitle, setHeaderTitle] = useState<string>("Home");
  const [mode, setMode] = useLocalStorage<"light" | "dark">("theme", "dark");

  const handleChangeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const handleTitleChange = useCallback(
    (title: string) => {
      setHeaderTitle(title);
    },
    [setHeaderTitle]
  );

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
            secondary: {
              main: "#fff",
              contrastText: "#000",
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

  const theme = useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          typography: {
            fontFamily: ["'Orbitron', 'sans-serif'"].join(","),
            fontSize: 22,
          },
          breakpoints: {
            keys: ["xs", "sm", "md", "lg", "xl"],
            values: {
              xs: 0,
              sm: 600,
              md: 900,
              lg: 1200,
              xl: 1536,
            },
          },
          ...getPaletteMode(mode),
        })
      ),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="main" display="flex">
        <NavBar title={headerTitle} toggleMode={handleChangeMode} />
        <Box
          mx={2}
          mt={8}
          className="App-main"
          sx={{
            backgroundColor: theme.palette.mainWindow.background,
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<Home setHeaderTitle={handleTitleChange} />}
            />
            <Route
              path="introduction"
              element={<Introduction setHeaderTitle={handleTitleChange} />}
            />
            <Route
              path="projects"
              element={<Projects setHeaderTitle={handleTitleChange} />}
            />
            <Route
              path="about"
              element={<About setHeaderTitle={handleTitleChange} />}
            />
            <Route
              path="stats"
              element={<Stats setHeaderTitle={handleTitleChange} />}
            />
            <Route
              path="conclusion"
              element={<Conclusion setHeaderTitle={handleTitleChange} />}
            />
            <Route
              path="*"
              element={<Error setHeaderTitle={handleTitleChange} />}
            />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
