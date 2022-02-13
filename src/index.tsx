import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import dark from "./assets/dark.png";

import "flag-icon-css/css/flag-icons.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const LoadingMarkup = (
  <div className="App">
    <img src={dark} alt="loading" height={800} width={800} />
  </div>
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
