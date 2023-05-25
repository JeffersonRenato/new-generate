import { FC } from "react";

import View from "./card.view";
import ICard from "./card.props";

const Card: FC<ICard> = ({ id, image, author, title, length, type }) => {
  return (
    <View
      id={id}
      image={image}
      author={author}
      title={title}
      length={length}
      type={type}
    />
  );
};

export default Card;
