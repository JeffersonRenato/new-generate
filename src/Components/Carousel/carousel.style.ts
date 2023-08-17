import styled from "styled-components";
import { fontSize, fontWeight, getColor } from "../../Constants";

export const CarouselWrapper = styled.div<{ theme: string; cardGap: number }>`
  margin: 10px 0;
  /* user-select: none; */

  .carousel-title {
    margin: 25px 60px;
    font-size: ${fontSize.title};
    font-weight: ${fontWeight.bold};
    color: ${(props) => getColor(props.theme, "whiteLevel1")};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .carousel-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;
    position: relative;

    .carousel-content-wrapper {
      width: 95%;
      display: flex;
      justify-content: flex-start;
      overflow: hidden;

      .carousel-content {
        display: flex;
        gap: ${(props) => props.cardGap}px;
        transition: 0.5s;
      }
    }

    .carousel-arrow-left-wrapper {
      padding-left: 15px;
      padding-right: 5px;
    }

    .carousel-arrow-right-wrapper {
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
      transition: 0.5s;

      .carousel-arrow {
        font-size: ${fontSize.carouselArrow};
        color: ${(props) => getColor(props.theme, "whiteLevel1")};
        transition: 0.5s;
      }

      &:hover {
        cursor: pointer;
        background-color: ${(props) => getColor(props.theme, "whiteLevel1")};

        .carousel-arrow {
          color: ${(props) => getColor(props.theme, "grayLevel3")};
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
