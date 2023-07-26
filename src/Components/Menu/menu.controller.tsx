import { FC, useState } from "react";
import { useTheme } from "../../Contexts/States/theme";
import { useLanguage } from "../../Contexts/States/language";
import View from "./menu.view";

const Menu: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [theme, setTheme] = useTheme();
  const setLanguage = useLanguage()[1];

  const onClickCollapsed = () => {
    !isCollapsed ? setIsCollapsed(true) : setIsCollapsed(false);
  };

  const onClickTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  const onChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <View
      onClickCollapsed={onClickCollapsed}
      isCollapsed={isCollapsed}
      onClickTheme={onClickTheme}
      theme={theme}
      onChangeLanguage={onChangeLanguage}
    />
  );
};

export default Menu;
