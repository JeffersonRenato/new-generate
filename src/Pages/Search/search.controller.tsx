import { FC } from "react";
import { useTheme } from "../../Contexts/States/theme";
import View from "./search.view";

const Search: FC = () => {
  const theme = useTheme()[0];

  return <View theme={theme} />;
};

export default Search;
