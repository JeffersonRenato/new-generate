import { FC, useState } from "react";

import View from "./card.view";
import ICard from "./card.props";

const Card: FC<ICard> = ({ id, image, author, title, length, type }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  const onClickFavorite = () => {
    !isFavorite ? setIsFavorite(true) : setIsFavorite(false);
  };

  return (
    <View
      id={id}
      image={image}
      author={author}
      title={title}
      length={length}
      type={type}
      onClickFavorite={onClickFavorite}
      isFavorite={isFavorite}
    />
  );
};

export default Card;
