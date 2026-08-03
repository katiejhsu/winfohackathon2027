import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./styles/theme.css";
import "./components/Reusable.css";
import "./pages/Home.css";
import "./pages/People.css";
import "./pages/About.css";
import "./pages/Shared.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
