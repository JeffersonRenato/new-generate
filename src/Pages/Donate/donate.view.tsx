import { FC } from "react";
import { DonateWrapper } from "./donate.style";

interface IProps {
  theme: string;
}

const View: FC<IProps> = ({ theme }) => (
  <DonateWrapper>
    <div className="under-construction-image-wrapper">
      <img
        src={theme === "dark" ? "/image/under-construction-dark.svg" : "/image/under-construction-light.svg"}
        className="under-construction-image"
        draggable={false}
      />
    </div>
  </DonateWrapper>
);

export default View;
