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
        path: "pesquisar",
        element: <Search />,
      },
      {
        path: "favoritos",
        element: <Favorites />,
      },
      {
        path: "playlist",
        element: <Playlist />,
      },
      {
        path: "sobre",
        element: <About />,
      },
      {
        path: "doacoes",
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
