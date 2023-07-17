import styled from "styled-components";

export const AboutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 25px;

  .about-title-area {
    .about-title {
      font-size: 2em;
      font-weight: 700;
      color: #fff;
    }
  }
  .about-paragraph-area {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    .about-subtitle {
      font-size: 1.5em;
      color: #ffb300;
    }

    .about-text {
      color: #f1f1f1;
      line-height: 1.5em;
      text-align: justify;
    }
  }
`;
