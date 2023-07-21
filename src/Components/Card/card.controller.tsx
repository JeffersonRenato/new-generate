import { FC, useState } from "react";
import View from "./card.view";
import ICard from "./card.props";
import { useTheme } from "../../Contexts/States/theme";

const Card: FC<ICard> = ({ id, image, author, title, length, type }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickFavorite = () => {
    !isFavorite ? setIsFavorite(true) : setIsFavorite(false);
  };

  const [theme] = useTheme();

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
    />
  );
};

export default Card;
