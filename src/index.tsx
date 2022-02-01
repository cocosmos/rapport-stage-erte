import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import dark from "./assets/dark.png";
import light from "./assets/light.png";

import "flag-icon-css/css/flag-icons.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Stack } from "@mui/material";

var theme = localStorage.getItem("theme");

const LoadingMarkup = (
  <Stack justifyContent={"center"}>
    <img src={theme === "dark" ? dark : light} alt="loading" />
  </Stack>
);

ReactDOM.render(
  <Suspense fallback={LoadingMarkup}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
