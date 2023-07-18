import { FC } from "react";
import { ITypeCard } from "../../Services";
import { CardWrapper } from "./card.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faVideo } from "@fortawesome/free-solid-svg-icons";

interface ICard {
  id: number;
  image: string;
  author: string | null;
  title: string;
  length: string;
  type: ITypeCard;
  onClickFavorite: () => void;
  isFavorite: boolean;
}

const View: FC<ICard> = ({ image, author, title, length, type, onClickFavorite, isFavorite }) => (
  <CardWrapper>
    <div className="card-image-area">
      <img className="card-image" src={image} alt="Imagem do card" />
      <FontAwesomeIcon
        icon={faHeart}
        className={`card-favorite-icon ${isFavorite ? "card-favorite-icon-active" : ""}`}
        onClick={onClickFavorite}
      />
    </div>
    <div className="card-description">
      <h5 className="card-author">{author}</h5>
      <h4 className="card-title">{title}</h4>
      <h6 className="card-length">{`Duração: ${length} min`}</h6>
    </div>
    <div className="card-midia-description">
      <FontAwesomeIcon icon={faVideo} className="card-midia-icon" />
      <h4 className="card-midia-type">{type}</h4>
    </div>
  </CardWrapper>
);

export default View;
