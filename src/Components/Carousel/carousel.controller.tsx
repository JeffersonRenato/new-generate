import { FC, useState, useCallback } from "react";

import { validateDisabledArrows } from "./library";
import { CARD_SIZE } from "./constants";

import View from "./carousel.view";

const Carousel: FC = () => {
  const [left, setLeft] = useState(0);
  const [disabledArrowLeft, setDisabledArrowLeft] = useState(true);
  const [disabledArrowRight, setDisabledArrowRight] = useState(false);

  const handleClick = (position: "left" | "right") => {
    const wrapperWidth = document.getElementsByClassName("carousel-content-area")[0]?.clientWidth;
    const innerWidth = document.getElementsByClassName("carousel-content")[0]?.clientWidth;
    let updatedLeft = left;

    if (position === "right" && left < innerWidth - wrapperWidth) {
      setLeft(left + CARD_SIZE);
      updatedLeft += CARD_SIZE;
    }

    if (position === "left" && left > 0) {
      setLeft(left - CARD_SIZE);
      updatedLeft -= CARD_SIZE;
    }

    const { disabledArrowRight, disabledArrowLeft } = validateDisabledArrows({
      left: updatedLeft,
      wrapperWidth,
      innerWidth,
    });

    setDisabledArrowRight(disabledArrowRight);
    setDisabledArrowLeft(disabledArrowLeft);
  };

  const onClickLeft = () => handleClick("left");
  const onClickRight = () => handleClick("right");

  return (
    <View
      left={left}
      onClickLeft={onClickLeft}
      onClickRight={onClickRight}
      disabledArrowLeft={disabledArrowLeft}
      disabledArrowRight={disabledArrowRight}
    />
  );
};

export default Carousel;
