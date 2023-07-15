import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

root.render(
  
  <StrictMode>
    <App />
  </StrictMode>
)

