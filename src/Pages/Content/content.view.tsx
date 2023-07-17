import { FC } from "react";
import ReactPlayer from "react-player";
import { IContentResponse } from "../../Services";
import { ContentWrapper } from "./content.style";

interface IProps {
  content: IContentResponse | null;
  formatedType: string;
}

const View: FC<IProps> = ({ content, formatedType }) => (
  <ContentWrapper>
    <div className="content-area">
      <div className="content-title-area">
        <h1 className="content-title">{content?.title}</h1>
      </div>
      <div className="player-wrapper">
        <ReactPlayer className="react-player" url={content?.url} controls width="100%" height="100%" />
      </div>
      <div className="content-description-area">
        <p className="content-description">{content?.description}</p>
      </div>
      <div className="content-tag-wrap">
        <div className="content-tag-area">
          <p className="content-tag-title">Autor:</p>
          <p className="content-tag">{content?.author}</p>
        </div>
        <div className="content-tag-area">
          <p className="content-tag-title">Data:</p>
          <p className="content-tag">{content?.data}</p>
        </div>
        <div className="content-tag-area">
          <p className="content-tag-title">Formato:</p>
          <p className="content-tag">{formatedType}</p>
        </div>
        <div className="content-tag-area">
          <p className="content-tag-title">Duração:</p>
          <p className="content-tag">{content?.time}</p>
        </div>
        <div className="content-tag-area">
          <p className="content-tag-title">Tags:</p>
          <p className="content-tag">{content?.tags}</p>
        </div>
      </div>
    </div>
  </ContentWrapper>
);

export default View;
