import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./scss/import.scss";
import "flag-icon-css/css/flag-icons.min.css";

import App from "./App";
import logo from "./assets/logo512.png";

const loadingMarkup = (
  <div className="App">
    <img src={logo} alt="loading" />
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
