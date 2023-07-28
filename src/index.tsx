import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, ScrollRestoration } from "react-router-dom";
import { RecoilRoot } from "recoil";
import router from "./Router";
import "./reset.scss";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RecoilRoot>
);
