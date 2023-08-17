import { FC, useState, useEffect } from "react";
import { useTheme } from "../../Contexts/States/theme";
import { useLanguage } from "../../Contexts/States/language";
import { useLanguageJson } from "../../Contexts/States/languageJson";
import { useTranslation } from "../../in18";
import portuguese from "../../in18/portuguese.json";
import english from "../../in18/english.json";
import View from "./menu.view";

const Menu: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [theme, setTheme] = useTheme();
  const [language, setLanguage] = useLanguage();
  const setLanguageJson = useLanguageJson()[1];

  const onClickCollapsed = () => {
    !isCollapsed ? setIsCollapsed(true) : setIsCollapsed(false);
  };

  const onClickTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  const onChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    setLanguageJson(e.target.value === "pt-BR" ? portuguese : english);
  };

  const translation = useTranslation();

  useEffect(() => {
    const test = translation("MENU.HOME");
    console.log("teste da alana: ", test);
  }, [translation]);

  return (
    <View
      onClickCollapsed={onClickCollapsed}
      isCollapsed={isCollapsed}
      onClickTheme={onClickTheme}
      theme={theme}
      language={language}
      onChangeLanguage={onChangeLanguage}
    />
  );
};

export default Menu;
