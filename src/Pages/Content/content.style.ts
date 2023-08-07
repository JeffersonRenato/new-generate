import styled from "styled-components";
import { fontSize, fontWeight, getColor } from "../../Constants";

export const ContentWrapper = styled.div<{ theme: string }>`
  display: flex;
  justify-content: space-around;
  min-height: 100vh;
  
  .content-wrapper {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    color: ${(props) => getColor(props.theme, "whiteLevel1")};

    .content-title-wrapper {
      margin: 20px 0;

      .content-title {
        font-size: ${fontSize.title};
        font-weight: ${fontWeight.bold};
      }
    }

    .player-wrapper {
      position: relative;
      padding-top: 56.25%;

      .react-player {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .content-description-wrapper {
      margin: 20px 0;
      line-height: 1.5em;
    }

    .content-info-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .content-info-area {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-right: 20px;
        margin-bottom: 10px;

        .content-info-title {
          font-weight: ${fontWeight.bold};
        }

        .content-info {
          font-weight: ${fontWeight.light};
        }
        
        .content-info-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
      }
    }
  }
`;
