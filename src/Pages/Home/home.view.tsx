import { FC } from "react";
import { Header } from "../../Components/Header";
import { Carousel } from "../../Components/Carousel";
import { ICarouselResponse } from "../../Services";
import { HomeWrapper } from "./home.style";

interface IProps {
  carousels: ICarouselResponse[];
}

const View: FC<IProps> = (props) => (
  <HomeWrapper>
    <Header />
    {
      props.carousels.map((carousel, index) => (
        <Carousel 
          key={index}
          label={carousel.label}
          cards={carousel.cards}
        />
      ))
    }
  </HomeWrapper>
);

export default View;
