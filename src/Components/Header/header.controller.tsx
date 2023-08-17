import { FC } from "react";
import View from "./header.view";
import IMAGES from "./constants/IMAGES.json";

const Header: FC = () => {
  return <View allImages={IMAGES} />;
};

export default Header;
