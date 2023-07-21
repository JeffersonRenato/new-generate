import { FC, useEffect, useRef, useState } from "react";

import { validateDisabledArrows } from "./library";
import { CARD_SIZE } from "./constants";

import View from "./carousel.view";
import ICarousel from "./carousel.props";
import { useTheme } from "../../Contexts/States/theme";

const Carousel: FC<ICarousel> = ({ label, cards }) => {
  const [left, setLeft] = useState(0);
  const [disabledArrowLeft, setDisabledArrowLeft] = useState(true);
  const [disabledArrowRight, setDisabledArrowRight] = useState(false);
  const [hiddenArrow, setHiddenArrow] = useState(false);
  const carouselContentWrapper = useRef<HTMLDivElement>(null);
  const carouselContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const externalElement = carouselContentWrapper?.current;
    const internalElement = carouselContent?.current;

    if (!externalElement || !internalElement) return;

    const observer = new ResizeObserver((entries) => {

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
    const wrapperWidth = carouselContentWrapper?.current?.clientWidth || 0;
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

  const [theme] = useTheme()

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
      carouselContentWrapper={carouselContentWrapper}
      carouselContent={carouselContent}
      theme={theme}
    />
  );
};

export default Carousel;
