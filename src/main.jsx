import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Router/Route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Root></Root>
    </RouterProvider>
  </StrictMode>,
);
