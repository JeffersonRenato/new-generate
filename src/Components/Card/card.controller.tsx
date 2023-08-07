import { FC, useState, useEffect } from "react";

import { useTheme } from "../../Contexts/States/theme";

import View from "./card.view";
import ICard from "./card.props";

const Card: FC<ICard> = ({ id, image, author, title, length, type, cardSize }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [theme] = useTheme();

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
      theme={theme}
      cardSize={cardSize}
    />
  );
};

export default Card;
