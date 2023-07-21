import { FC, useState } from "react";
import View from "./menu.view";
import { useTheme } from "../../Contexts/States/theme";

const Menu: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [theme, setTheme] = useTheme();

  const onClickCollapsed = () => {
    !isCollapsed ? setIsCollapsed(true) : setIsCollapsed(false);
  };

  const onClick = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return <View onClickCollapsed={onClickCollapsed} isCollapsed={isCollapsed} onClick={onClick} theme={theme} />;
};

export default Menu;
