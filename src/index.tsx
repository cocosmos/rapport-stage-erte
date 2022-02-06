import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import dark from "./assets/dark.png";

import "flag-icon-css/css/flag-icons.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Stack } from "@mui/material";

const LoadingMarkup = (
  <Stack justifyContent={"center"} alignItems={"center"}>
    <img src={dark} alt="loading" height={900} width={900} />
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
