import { FC } from "react";
import { useTheme } from "../../Contexts/States/theme";
import View from "./playlist.view";

const Playlist: FC = () => {
  const theme = useTheme()[0];

  return <View theme={theme} />;
};

export default Playlist;
