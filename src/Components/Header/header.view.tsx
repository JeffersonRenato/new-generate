import { FC } from "react";
import { IImageProps } from "./header.controller";
import { HeaderWrapper } from "./header.style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface IProps {
  allImages: IImageProps[];
}

const View: FC<IProps> = ({ allImages }) => (
  <HeaderWrapper>
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: "fade",
        rewind: true,
        arrows: false,
        drag: false,
        autoplay: true,
        interval: 5000,
        speed: 1000,
        pauseOnHover: true,
      }}
    >
      {allImages.map((image) => (
        <SplideSlide key={image.index}>
          <img className="slider-image" src={image.src} />
        </SplideSlide>
      ))}
    </Splide>
  </HeaderWrapper>
);

export default View;
