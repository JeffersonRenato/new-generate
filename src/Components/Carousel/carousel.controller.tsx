import { FC, useEffect, useRef, useState } from "react";

import { validateDisabledArrows } from "./library";
import { CARD_SIZE } from "./constants";

import View from "./carousel.view";
import ICarousel from "./carousel.props";

const Carousel: FC<ICarousel> = ({ label, cards }) => {
  const [left, setLeft] = useState(0);
  const [disabledArrowLeft, setDisabledArrowLeft] = useState(true);
  const [disabledArrowRight, setDisabledArrowRight] = useState(false);
  const [hiddenArrow, setHiddenArrow] = useState(false);
  const carouselContentArea = useRef<HTMLDivElement>(null);
  const carouselContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const externalElement = carouselContentArea?.current;
    const internalElement = carouselContent?.current;

    if (!externalElement || !internalElement) return;

    const observer = new ResizeObserver((entries) => {
      console.log("\n");
      console.log(label);
      console.log("de fora ", entries[0].contentRect.width);
      console.log("de dentro ", carouselContent.current?.clientWidth);

      if (entries[0].contentRect.width >= internalElement.clientWidth) {
        setHiddenArrow(true);
      } else {
        setHiddenArrow(false);
      }
    });

    observer.observe(externalElement);
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (position: "left" | "right") => {
    const wrapperWidth = carouselContentArea?.current?.clientWidth || 0;
    const innerWidth = carouselContent?.current?.clientWidth || 0;
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
      hiddenArrow={hiddenArrow}
      label={label}
      cards={cards}
      carouselContentArea={carouselContentArea}
      carouselContent={carouselContent}
    />
  );
};

export default Carousel;
