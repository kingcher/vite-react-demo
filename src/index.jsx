import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./router/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<p>Loading component...</p>}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
