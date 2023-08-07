import { FC, useEffect, useRef, useState, useMemo } from "react";

import { validateDisabledArrows } from "./library";
import { useTheme } from "../../Contexts/States/theme";
import setCardValues from "./library/cardValues";

import View from "./carousel.view";
import ICarousel from "./carousel.props";

const Carousel: FC<ICarousel> = ({ label, cards }) => {
  const [left, setLeft] = useState(0);
  const [disabledArrowLeft, setDisabledArrowLeft] = useState(true);
  const [disabledArrowRight, setDisabledArrowRight] = useState(false);
  const [hiddenArrow, setHiddenArrow] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [theme] = useTheme();
  const carouselContentWrapper = useRef<HTMLDivElement>(null);
  const carouselContent = useRef<HTMLDivElement>(null);
  const cardValues = useMemo(() => setCardValues(windowSize), [windowSize])

  const onClickLeft = () => handleClick("left");
  const onClickRight = () => handleClick("right");

  const handleClick = (position: "left" | "right") => {
    const wrapperWidth = carouselContentWrapper?.current?.clientWidth || 0;
    const innerWidth = carouselContent?.current?.clientWidth || 0;
    let updatedLeft = left;

    if (position === "right" && left < innerWidth - wrapperWidth) {
      setLeft(left + cardValues.cardDisplacement);
      updatedLeft += cardValues.cardDisplacement;
    }

    if (position === "left" && left > 0) {
      setLeft(left - cardValues.cardDisplacement);
      updatedLeft -= cardValues.cardDisplacement;
    }

    const { disabledArrowRight, disabledArrowLeft } = validateDisabledArrows({
      left: updatedLeft,
      wrapperWidth,
      innerWidth,
    });

    setDisabledArrowRight(disabledArrowRight);
    setDisabledArrowLeft(disabledArrowLeft);
  };

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

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
      cardSize={cardValues.cardSize}
      cardGap={cardValues.cardGap}
    />
  );
};

export default Carousel;
