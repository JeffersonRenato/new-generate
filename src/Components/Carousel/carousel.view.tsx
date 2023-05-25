import "./carousel.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../Card";
import { FC } from "react";
import { ICard } from "../../Services";

interface ICarouselView {
  onClickRight: () => void;
  onClickLeft: () => void;
  left: number;
  disabledArrowLeft: boolean;
  disabledArrowRight: boolean;
  hiddenArrow: boolean;
  label: string;
  cards: Array<ICard>;
  carouselContentArea: React.RefObject<HTMLDivElement>;
  carouselContent: React.RefObject<HTMLDivElement>;
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
  carouselContentArea,
  carouselContent,
}) => (
  <div className="carousel-wrap">
    <h3 className="carousel-title">{label}</h3>
    <div className="carousel-area">
      <div className="carousel-arrow-area carousel-arrow-area-left" onClick={onClickLeft}>
        <div
          className={`
          carousel-arrow-hover
          ${disabledArrowLeft ? "carousel-arrow-hover-disabled" : ""}
          ${hiddenArrow ? "carousel-arrow-hidden" : ""}
          `}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className={`carousel-arrow ${disabledArrowLeft ? "disabled-arrow" : ""}`}
          />
        </div>
      </div>
      <div className="carousel-content-area" ref={carouselContentArea}>
        <div className="carousel-content" style={{ marginLeft: -left }} ref={carouselContent}>
          {cards.map((card) => (
            <Card
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
      <div className="carousel-arrow-area carousel-arrow-area-right" onClick={onClickRight}>
        <div
          className={`
          carousel-arrow-hover
          ${disabledArrowRight ? "carousel-arrow-hover-disabled" : ""}
          ${hiddenArrow ? "carousel-arrow-hidden" : ""}
          `}
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`carousel-arrow ${disabledArrowRight ? "disabled-arrow" : ""}`}
          />
        </div>
      </div>
    </div>
  </div>
);

export default View;
