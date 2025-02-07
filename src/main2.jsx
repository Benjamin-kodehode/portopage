import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cookies from "./Cookies";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cookies />
  </StrictMode>
);
