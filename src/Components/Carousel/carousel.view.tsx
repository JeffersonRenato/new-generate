import "./carousel.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../Card";

const View = () => (
  <div className="carousel-area">
    <div className="carousel-icon-left-area">
      <FontAwesomeIcon icon={faAngleLeft} className="carousel-icon-left" />
    </div>
    <div className="carousel-content-area">
      <div className="carousel-content">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <div className="carousel-icon-right-area">
      <FontAwesomeIcon icon={faAngleRight} className="carousel-icon-right" />
    </div>
  </div>
);

export default View;
