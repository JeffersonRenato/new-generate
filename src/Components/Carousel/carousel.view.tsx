import "./carousel.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../Card";
import { FC } from "react";

interface ICarouselView {
  onClickRight: () => void;
  onClickLeft: () => void;
  left: number;
  disabledArrowLeft: boolean;
  disabledArrowRight: boolean;
}

const View: FC<ICarouselView> = ({ onClickLeft, onClickRight, left, disabledArrowLeft, disabledArrowRight }) => (
  <div className="carousel-area">
    <div className="carousel-arrow-area" onClick={onClickLeft}>
      <div className={`carousel-arrow-hover ${disabledArrowLeft ? "carousel-arrow-hover-disabled" : ""}`}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          className={`carousel-arrow ${disabledArrowLeft ? "disabled-arrow" : ""}`}
        />
      </div>
    </div>
    <div className="carousel-content-area">
      <div className="carousel-content" style={{ marginLeft: -left }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <div className="carousel-arrow-area" onClick={onClickRight}>
      <div className={`carousel-arrow-hover ${disabledArrowRight ? "carousel-arrow-hover-disabled" : ""}`}>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={`carousel-arrow ${disabledArrowRight ? "disabled-arrow" : ""}`}
        />
      </div>
    </div>
  </div>
);

export default View;
