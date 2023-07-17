import styled from "styled-components";

export const CarouselWrapper = styled.div`
  margin: 10px 0;
  user-select: none;

  .carousel-title {
    margin: 25px 60px;
    font-size: 2em;
    font-weight: 700;
    color: #fff;
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
        font-size: 2em;
        color: #fff;
        transition: 0.5s color, 0.5s opacity;
      }

      &:hover {
        cursor: pointer;
        background-color: #fff;

        .carousel-arrow {
          color: #555;
        }
      }
    }

    .carousel-arrow-hover-disabled {
      pointer-events: none;
    }

    .disabled-arrow {
      pointer-events: none;
      opacity: 0.1;
    }

    .carousel-arrow-hidden {
      opacity: 0;
    }
  }
`;
