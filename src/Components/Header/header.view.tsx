import { FC } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { HeaderWrapper } from "./header.style";
import { IImages } from "./types";

interface IProps {
  allImages: IImages[];
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
          <Link to={`/content/${image.id}`}>
            <img className="slider-image" src={image.src} />
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  </HeaderWrapper>
);

export default View;
