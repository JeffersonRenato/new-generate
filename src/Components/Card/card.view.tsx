import { FC } from "react";
import { ITypeCard } from "../../Services";
import { CardWrapper } from "./card.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faVideo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface IProps {
  id: number;
  image: string;
  author: string | null;
  title: string;
  length: string;
  type: ITypeCard;
  cardSize: number;
  onClickFavorite: React.MouseEventHandler<SVGSVGElement>;
  isFavorite: boolean;
  theme: string;
}

const View: FC<IProps> = ({ id, image, author, title, length, type, onClickFavorite, isFavorite, theme, cardSize }) => (
  <CardWrapper theme={theme} cardSize={cardSize}>
    <Link to={`/content/${id}`} className="carousel-content-link">
      <div className="card-image-wrapper">
        <img className="card-image" draggable="false" src={image} alt="Imagem do card" />
        <FontAwesomeIcon
          icon={faHeart}
          className={`card-favorite-icon ${isFavorite ? "card-favorite-icon-active" : ""}`}
          onClick={onClickFavorite}
        />
      </div>
      <div className="card-info-wrapper">
        <h5 className="card-info-author">{author}</h5>
        <h4 className="card-info-title">{title}</h4>
        <h6 className="card-info-length">{`Duração: ${length} min`}</h6>
      </div>
      <div className="card-midia">
        <FontAwesomeIcon icon={faVideo} className="card-midia-icon" />
        <h4 className="card-midia-type">{type}</h4>
      </div>
    </Link>
  </CardWrapper>
);

export default View;
