import { FC } from "react";
import { FavoritesWrapper } from "./favorites.style";

interface IProps {
  theme: string;
}

const View: FC<IProps> = ({ theme }) => (
  <FavoritesWrapper>
    <div className="under-construction-image-wrapper">
      <img
        src={`${theme === "dark" ? "/image/under-construction-dark.svg" : "/image/under-construction-light.svg"}`}
        className="under-construction-image"
        draggable={false}
      />
    </div>
  </FavoritesWrapper>
);

export default View;
