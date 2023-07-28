import { FC } from "react";
import { useTheme } from "../../Contexts/States/theme";
import View from "./favorites.view";

const Favorites: FC = () => {
  const theme = useTheme()[0];

  return <View theme={theme} />;
};

export default Favorites;
