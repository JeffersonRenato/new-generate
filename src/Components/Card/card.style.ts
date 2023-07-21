import styled from "styled-components";
import { colorDark, fontSize, fontWeight, getColor  } from "../../Constants";

export const CardWrapper = styled.div<{ theme: string }>`
  width: 290px;
  height: fit-content;
  background: ${(props) => getColor(props.theme, "grayLevel3")};
  border-radius: 25px;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  .card-image-wrapper {
    height: auto;
    position: relative;
    overflow: hidden;

    .card-image {
      width: 290px;
    }

    .card-favorite-icon {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: ${fontSize.cardFavoriteIcon};
      color: ${colorDark.whiteLevel1};
      transition: 0.5s;

      &:hover {
        color: ${colorDark.redLevel1};
      }
    }

    .card-favorite-icon-active {
      color: ${colorDark.redLevel1};
    }
  }

  .card-info-wrapper {
    height: 120px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;

    .card-info-author {
      font-size: ${fontSize.minorText};
      font-weight: ${fontWeight.medium};
      text-transform: uppercase;
      color: ${(props) => getColor(props.theme, "grayLevel6")};
    }

    .card-info-title {
      font-size: ${fontSize.text};
      font-weight: ${fontWeight.bold};
      color: ${(props) => getColor(props.theme, "whiteLevel1")};
    }

    .card-info-length {
      font-size: ${fontSize.description};
      font-weight: ${fontWeight.bold};
      color: ${(props) => getColor(props.theme, "grayLevel6")};
    }
  }

  .card-midia {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => getColor(props.theme, "grayLevel4")};

    .card-midia-icon {
      margin-right: 10px;
      font-size: ${fontSize.cardMidiaIcon};
      color: ${(props) => getColor(props.theme, "whiteLevel1")};
    }

    .card-midia-type {
      font-size: ${fontSize.text};
      font-weight: ${fontWeight.light};
      color: ${(props) => getColor(props.theme, "whiteLevel1")};
    }
  }
`;
