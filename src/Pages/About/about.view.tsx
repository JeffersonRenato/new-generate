import { FC } from "react";
import { IAboutResponse } from "../../Services";
import { AboutWrapper } from "./about.style";

interface IProps {
  about: IAboutResponse[];
  theme: string;
}

const View: FC<IProps> = ({about, theme}) => (
  <AboutWrapper theme={theme}>
    {about.map((item) => (
      <>
        <div className="about-title-wrapper">
          <h1 className="about-title">{item.title}</h1>
        </div>
        <div className="about-paragraph-wrapper">
          <h2 className="about-subtitle">{item.paragraphs[0].subtitle}</h2>
          <p className="about-text">{item.paragraphs[0].text}</p>
        </div>
        <div className="about-paragraph-wrapper">
          <h2 className="about-subtitle">{item.paragraphs[1].subtitle}</h2>
          <p className="about-text">{item.paragraphs[1].text}</p>
        </div>
        <div className="about-paragraph-wrapper">
          <h2 className="about-subtitle">{item.paragraphs[2].subtitle}</h2>
          <p className="about-text">{item.paragraphs[2].text}</p>
        </div>
      </>
    ))}
  </AboutWrapper>
);

export default View;
