import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProvideAuth } from "./context/auth.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProvideAuth>
      <App />
    </ProvideAuth>
  </StrictMode>
);
