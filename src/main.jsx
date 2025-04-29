import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NoRouter from "./pages/404";
import Accordian from "./pages/accordian";
import { ToolTip } from "../components/ToolTipCss/ToolTip";
import StopwatchPage from "./pages/stopwatch";
import { ProductListing } from "../components/ProductListing/ProductListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoRouter />,
  },
  {
    path: "/accordian",
    element: <Accordian />,
  },
  {
    path: "/tooltip-css",
    element: <ToolTip />,
  },
  {
    path: "/stopwatch",
    element: <StopwatchPage />,
  },
  {
    path: "/products",
    element: <ProductListing />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
