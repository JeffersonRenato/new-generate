import { FC } from "react";
import { Card } from "../Card";
import { ICard } from "../../Services";
import { CarouselWrapper } from "./carousel.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface ICarouselView {
  onClickRight: () => void;
  onClickLeft: () => void;
  left: number;
  disabledArrowLeft: boolean;
  disabledArrowRight: boolean;
  hiddenArrow: boolean;
  label: string;
  cards: Array<ICard>;
  carouselContentWrapper: React.RefObject<HTMLDivElement>;
  carouselContent: React.RefObject<HTMLDivElement>;
  theme: string;
  cardSize: number;
  cardGap: number;
}

const View: FC<ICarouselView> = ({
  onClickLeft,
  onClickRight,
  left,
  disabledArrowLeft,
  disabledArrowRight,
  hiddenArrow,
  label,
  cards,
  carouselContentWrapper,
  carouselContent,
  theme,
  cardSize,
  cardGap,
}) => (
  <CarouselWrapper theme={theme} cardGap={cardGap}>
    <h1 className="carousel-title">{label}</h1>
    <div className="carousel-wrapper">
      <div className="carousel-arrow-wrapper carousel-arrow-left-wrapper" onClick={onClickLeft}>
        <div
          className={`
          carousel-arrow-hover
          ${disabledArrowLeft ? "carousel-arrow-hover-disabled" : ""}
          ${hiddenArrow ? "carousel-arrow-hidden" : ""}
          `}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className={`carousel-arrow ${disabledArrowLeft ? "carousel-arrow-disabled" : ""}`}
          />
        </div>
      </div>
      <div className="carousel-content-wrapper" ref={carouselContentWrapper}>
        <div className="carousel-content" style={{ marginLeft: -left }} ref={carouselContent}>
          {cards.map((card) => (
            <Card cardSize={cardSize}
              id={card.id}
              image={card.image}
              author={card.author}
              title={card.title}
              length={card.length}
              type={card.type}
            />
          ))}
        </div>
      </div>
      <div className="carousel-arrow-wrapper carousel-arrow-right-wrapper" onClick={onClickRight}>
        <div
          className={`
          carousel-arrow-hover
          ${disabledArrowRight ? "carousel-arrow-hover-disabled" : ""}
          ${hiddenArrow ? "carousel-arrow-hidden" : ""}
          `}
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`carousel-arrow ${disabledArrowRight ? "carousel-arrow-disabled" : ""}`}
          />
        </div>
      </div>
    </div>
  </CarouselWrapper>
);

export default View;
