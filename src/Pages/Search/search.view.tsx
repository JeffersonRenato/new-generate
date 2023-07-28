import { FC } from "react";
import { SearchWrapper } from "./search.style";

interface IProps {
  theme: string;
}

const View: FC<IProps> = ({ theme }) => (
  <SearchWrapper>
    <div className="under-construction-image-wrapper">
      <img
        src={`${theme === "dark" ? "/image/under-construction-dark.svg" : "/image/under-construction-light.svg"}`}
        className="under-construction-image"
        draggable={false}
      />
    </div>
  </SearchWrapper>
);

export default View;
