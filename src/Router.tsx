import { createBrowserRouter } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { Home } from "./Pages/Home";
import { Search } from "./Pages/Search";
import { Favorites } from "./Pages/Favorites";
import { Playlist } from "./Pages/Playlist";
import { About } from "./Pages/About";
import { Donate } from "./Pages/Donate";
import { Content } from "./Pages/Content";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "playlist",
        element: <Playlist />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "content/:id",
        element: <Content />,
      },
    ],
  },
]);

export default router;
