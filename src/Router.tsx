import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Components/Home";
import { Menu } from "./Components/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
