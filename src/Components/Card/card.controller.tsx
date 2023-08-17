import { FC, useState } from "react";

import { useTheme } from "../../Contexts/States/theme";

import View from "./card.view";
import ICard from "./card.props";

const Card: FC<ICard> = ({ id, image, author, title, length, type, cardSize }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [theme] = useTheme();

  const onClickFavorite = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
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
      cardSize={cardSize}
      onClickFavorite={onClickFavorite}
      isFavorite={isFavorite}
      theme={theme}
    />
  );
};

export default Card;
