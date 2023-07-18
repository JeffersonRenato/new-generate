import styled from "styled-components";
import { color, fontSize, fontWeight } from "../../Constants";

export const CarouselWrapper = styled.div`
  margin: 10px 0;
  user-select: none;

  .carousel-title {
    margin: 25px 60px;
    font-size: ${fontSize.title};
    font-weight: ${fontWeight.bold};
    color: ${color.carouselTitle};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .carousel-area {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;
    position: relative;

    .carousel-content-area {
      width: 95%;
      display: flex;
      justify-content: flex-start;
      overflow: hidden;

      .carousel-content {
        display: flex;
        gap: 20px;
        transition: 0.5s all;
      }
    }

    .carousel-arrow-area-left {
      padding-left: 15px;
      padding-right: 5px;
    }

    .carousel-arrow-area-right {
      padding-left: 5px;
      padding-right: 15px;
    }

    .carousel-arrow-hover {
      width: 36px;
      height: 36px;
      border-radius: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s background-color, 0.5s color;

      .carousel-arrow {
        font-size: ${fontSize.carouselArrow};
        color: ${color.carouselArrow};
        transition: 0.5s color, 0.5s opacity;
      }

      &:hover {
        cursor: pointer;
        background-color: ${color.carouselArrowBackgroundHover};

        .carousel-arrow {
          color: ${color.carouselArrowHover};
        }
      }
    }

    .carousel-arrow-hover-disabled {
      pointer-events: none;
    }

    .carousel-arrow-disabled {
      opacity: 0.1;
    }

    .carousel-arrow-hidden {
      pointer-events: none;
      opacity: 0;
    }
  }
`;
