import { FC } from "react";
import { useTheme } from "../../Contexts/States/theme";
import View from "./donate.view";

const Donate: FC = () => {
  const theme = useTheme()[0];

  return <View theme={theme} />;
};

export default Donate;
