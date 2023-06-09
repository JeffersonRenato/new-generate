import { FC } from "react";
import { IAboutResponse } from "../../Services";
import "./about.style.scss";

interface IProps {
  about: IAboutResponse[];
}

const View: FC<IProps> = (props) => (
  <div className="about-area">
    {props.about.map((about) => (
      <>
        <div className="about-title-area">
          <h1 className="about-title">{about.title}</h1>
        </div>
        <div className="about-paragraph-area">
          <h2 className="about-subtitle">{about.paragraphs[0].subtitle}</h2>
          <p className="about-text">{about.paragraphs[0].text}</p>
        </div>
        <div className="about-paragraph-area">
          <h2 className="about-subtitle">{about.paragraphs[1].subtitle}</h2>
          <p className="about-text">{about.paragraphs[1].text}</p>
        </div>
        <div className="about-paragraph-area">
          <h2 className="about-subtitle">{about.paragraphs[2].subtitle}</h2>
          <p className="about-text">{about.paragraphs[2].text}</p>
        </div>
      </>
    ))}
  </div>
);

export default View;
