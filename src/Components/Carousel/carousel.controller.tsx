import { FC, useState } from "react";
import View from "./carousel.view";

const Carousel: FC = () => {
  const [left, setLeft] = useState(0);
  const [disabledArrowLeft, setDisabledArrowLeft] = useState(false);
  const [disabledArrowRight, setDisabledArrowRight] = useState(false);

  function onClickLeft() {
    if (left < 0) {
      setLeft(left + 230);
      setDisabledArrowRight(false);
    } else {
      setDisabledArrowLeft(true);
    }
  }

  function onClickRight() {
    const wrapperDiv = document.getElementsByClassName("carousel-content-area")[0];
    const innerDiv = document.getElementsByClassName("carousel-content")[0];
    if (left > -innerDiv.clientWidth + wrapperDiv.clientWidth) {
      setLeft(left - 230);
      setDisabledArrowLeft(false);
    } else {
      setDisabledArrowRight(true);
    }
  }

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
