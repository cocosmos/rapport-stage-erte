import "./components/i18next/i18n";
import "./scss/import.scss";
import { useCallback, useMemo, useState } from "react";
import {
  Box,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Error from "./pages/Error";
import Conclusion from "./pages/Conclusion";
import Stats from "./pages/Stats";
import useLocalStorage from "./hooks/localStorage";
import getPaletteMode from "./components/getPaletteMode";

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
