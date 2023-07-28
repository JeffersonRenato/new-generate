import { FC } from "react";
import ReactPlayer from "react-player";
import { IContentResponse } from "../../Services";
import { ContentWrapper } from "./content.style";

interface IProps {
  content: IContentResponse | null;
  formatedType: string;
  theme: string;
}

const View: FC<IProps> = ({ content, formatedType, theme }) => (
  <ContentWrapper theme={theme}>
    <div className="content-wrapper">
      <div className="content-title-wrapper">
        <h1 className="content-title">{content?.title}</h1>
      </div>
      <div className="player-wrapper">
        <ReactPlayer className="react-player" url={content?.url} controls width="100%" height="100%" />
      </div>
      <div className="content-description-wrapper">
        <p className="content-description">{content?.description}</p>
      </div>
      <div className="content-info-wrapper">
        <div className="content-info-area">
          <p className="content-info-title">Autor:</p>
          <p className="content-info">{content?.author}</p>
        </div>
        <div className="content-info-area">
          <p className="content-info-title">Data:</p>
          <p className="content-info">{content?.data}</p>
        </div>
        <div className="content-info-area">
          <p className="content-info-title">Formato:</p>
          <p className="content-info">{formatedType}</p>
        </div>
        <div className="content-info-area">
          <p className="content-info-title">Duração:</p>
          <p className="content-info">{content?.length}</p>
        </div>
        <div className="content-info-area">
          <p className="content-info-title">Tags:</p>
          <div className="content-info-tags">
            {content?.tags?.map((tag) => (
            <p className="content-info">{tag}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </ContentWrapper>
);

export default View;
