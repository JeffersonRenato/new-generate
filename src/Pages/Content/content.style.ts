import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;

  .content-area {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    color: #fff;

    .content-title-area {
      margin: 20px 0;

      .content-title {
        font-size: 2em;
        font-weight: 700;
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

    .content-description-area {
      margin: 20px 0;
    }

    .content-tag-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .content-tag-area {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;

        .content-tag-title {
          font-weight: 700;
        }

        .content-tag {
          font-weight: 300;
        }
      }
    }
  }
`;
