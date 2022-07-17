import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import Router from "./Router";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NextUIProvider>
    <Router />
  </NextUIProvider>
);
