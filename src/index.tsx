import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure you have a global CSS file or remove this line if unnecessary
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);