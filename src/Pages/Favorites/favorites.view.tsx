import { FC } from "react";
import { FavoritesWrapper } from "./favorites.style";
import { ICard } from "../../Services";
import { Card } from "../../Components/Card";

interface IProps {
  favorites: ICard[];
  theme: string;
  cardSize: number;
  cardGap: number;
}

const View: FC<IProps> = ({ favorites, cardSize, cardGap, theme }) => (
  <FavoritesWrapper theme={theme} cardGap={cardGap}>
    {favorites.map((favorite) => (
      <Card
        id={favorite.id}
        image={favorite.image}
        author={favorite.author}
        title={favorite.title}
        length={favorite.length}
        type={favorite.type}
        cardSize={cardSize}
      />
    ))}
  </FavoritesWrapper>
);

export default View;
