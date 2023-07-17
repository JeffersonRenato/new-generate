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
    <div className="card-area-imagem">
      <img className="card-imagem-principal" src={image} alt="Imagem do card" />
      <FontAwesomeIcon
        icon={faHeart}
        className={`card-icone-favorito ${isFavorite ? "card-icone-favorito-ativo" : ""}`}
        onClick={onClickFavorite}
      />
    </div>
    <div className="card-area-descricao">
      <h3 className="card-autor">{author}</h3>
      <p className="card-titulo">{title}</p>
      <p className="card-duracao">{`Duração: ${length} min`}</p>
    </div>
    <div className="card-area-midia-descricao">
      <FontAwesomeIcon icon={faVideo} className="card-icone-midia" />
      <p className="card-midia-tipo">{type}</p>
    </div>
  </CardWrapper>
);

export default View;
