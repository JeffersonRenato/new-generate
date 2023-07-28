import { FC } from "react";
import { PlaylistWrapper } from "./playlist.style";

interface IProps {
  theme: string;
}

const View: FC<IProps> = ({ theme }) => (
  <PlaylistWrapper>
    <div className="under-construction-image-wrapper">
      <img
        src={`${theme === "dark" ? "/image/under-construction-dark.svg" : "/image/under-construction-light.svg"}`}
        className="under-construction-image"
      />
    </div>
  </PlaylistWrapper>
);

export default View;
