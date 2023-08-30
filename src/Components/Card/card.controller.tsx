import { FC, useState } from "react";

import { useTheme } from "../../Contexts/States/theme";

import View from "./card.view";
import ICard from "./card.props";

const Card: FC<ICard> = ({ id, image, author, title, length, type, cardSize }) => {
  const [theme] = useTheme();
  const [isFavorite, setIsFavorite] = useState(JSON.parse(localStorage.getItem("favorites") as string)?.includes(id));

  const onClickFavorite = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();

    let favoritesStorage = localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites") as string)
      : [];

    if (isFavorite) {
      setIsFavorite(false);
      const filteredFavorites = favoritesStorage.filter((favoriteID: number) => favoriteID !== id);
      favoritesStorage = filteredFavorites;
    } else {
      setIsFavorite(true);
      favoritesStorage.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favoritesStorage));
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
