import { FC, useState } from "react";
import View from "./menu.view";

const Menu: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onClickCollapsed = () => {
    !isCollapsed ? setIsCollapsed(true) : setIsCollapsed(false);
  };

  return <View onClickCollapsed={onClickCollapsed} isCollapsed={isCollapsed} />;
};

export default Menu;
