import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "tw-elements"; // Import tw-elements JavaScript

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
