import styled from "styled-components";
import { fontSize, fontWeight, color } from "../../Constants";

export const CardWrapper = styled.div`
  width: 290px;
  height: fit-content;
  background: ${color.cardBackground};
  border-radius: 25px;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  .card-image-area {
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
      color: ${color.cardFavoriteIcon};
      transition: 0.5s;

      &:hover {
        color: ${color.cardFavoriteIconHover};
      }
    }

    .card-favorite-icon-active {
      color: ${color.cardFavoriteIconActive};
    }
  }

  .card-description {
    height: 120px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;

    .card-author {
      font-size: ${fontSize.minorText};
      font-weight: ${fontWeight.light};
      text-transform: uppercase;
      color: ${color.cardAuthorName};
    }

    .card-title {
      font-size: ${fontSize.text};
      font-weight: ${fontWeight.bold};
      color: ${color.cardTitle};
    }

    .card-length {
      font-size: ${fontSize.description};
      font-weight: ${fontWeight.bold};
      color: ${color.cardLength};
    }
  }

  .card-midia-description {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.cardMidiaDescriptionBackground};

    .card-midia-icon {
      margin-right: 10px;
      font-size: ${fontSize.cardMidiaIcon};
      color: ${color.cardMidiaIcon};
    }

    .card-midia-type {
      font-size: ${fontSize.text};
      font-weight: ${fontWeight.light};
      color: ${color.cardType};
    }
  }
`;
