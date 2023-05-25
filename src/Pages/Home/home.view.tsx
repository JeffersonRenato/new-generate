import { FC } from "react";
import { Carousel } from "../../Components/Carousel";
import { ICarouselResponse } from "../../Services";
import "./home.style.scss";

interface IProps {
  carousels: ICarouselResponse[];
}

const View: FC<IProps> = (props) => (
  <div className="home-area">
    {
      props.carousels.map((carousel, index) => (
        <Carousel 
          key={index}
          label={carousel.label}
          cards={carousel.cards}
        />
      ))
    }
  </div>
);

export default View;
