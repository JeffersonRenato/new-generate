import { FC } from "react";
import { IAboutResponse } from "../../Services";
import { AboutWrapper } from "./about.style";

interface IProps {
  about: IAboutResponse[];
  theme: string;
}

const View: FC<IProps> = (props, theme) => (
  <AboutWrapper theme={theme}>
    {props.about.map((about) => (
      <>
        <div className="about-title-wrapper">
          <h1 className="about-title">{about.title}</h1>
        </div>
        <div className="about-paragraph-wrapper">
          <h2 className="about-subtitle">{about.paragraphs[0].subtitle}</h2>
          <p className="about-text">{about.paragraphs[0].text}</p>
        </div>
        <div className="about-paragraph-wrapper">
          <h2 className="about-subtitle">{about.paragraphs[1].subtitle}</h2>
          <p className="about-text">{about.paragraphs[1].text}</p>
        </div>
        <div className="about-paragraph-wrapper">
          <h2 className="about-subtitle">{about.paragraphs[2].subtitle}</h2>
          <p className="about-text">{about.paragraphs[2].text}</p>
        </div>
      </>
    ))}
  </AboutWrapper>
);

export default View;
