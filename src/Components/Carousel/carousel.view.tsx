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

const View: FC<ICarouselView> = ({
  onClickLeft,
  onClickRight,
  left,
  disabledArrowLeft,
  disabledArrowRight,
}) => (
  <div className="carousel-area">
    <div className="carousel-icon-left-area" onClick={() => onClickLeft()}>
      <FontAwesomeIcon
        icon={faAngleLeft}
        className={`carousel-icon-left ${
          disabledArrowLeft ? "disabled-arrow" : ""
        }`}
      />
    </div>
    <div className="carousel-content-area">
      <div className="carousel-content" style={{ marginLeft: left }}>
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
    <div className="carousel-icon-right-area" onClick={() => onClickRight()}>
      <FontAwesomeIcon
        icon={faAngleRight}
        className={`carousel-icon-right ${
          disabledArrowRight ? "disabled-arrow" : ""
        }`}
      />
    </div>
  </div>
);

export default View;
