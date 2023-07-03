import { FC } from "react";
import View from "./header.view";
import IMAGES from "./constants/IMAGES.json";

export interface IImageProps {
  index: number;
  src: string;
}

const Header: FC = () => {
  return <View allImages={IMAGES} />;
};

export default Header;
