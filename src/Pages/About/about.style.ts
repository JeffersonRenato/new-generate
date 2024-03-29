import styled from "styled-components";
import { fontSize, fontWeight, getColor } from "../../Constants";

export const AboutWrapper = styled.div<{ theme: string }>`
  display: flex;
  flex-direction: column;
  gap: 1em;
  min-height: 100vh;
  margin: 25px;

  .about-title-wrapper {
    .about-title {
      font-size: ${fontSize.title};
      font-weight: ${fontWeight.bold};
      color: ${(props) => getColor(props.theme, "whiteLevel1")};
    }
  }
  .about-paragraph-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    .about-subtitle {
      font-size: ${fontSize.subtitle};
      color: ${(props) => getColor(props.theme, "orangeLevel1")};
    }

    .about-text {
      color: ${(props) => getColor(props.theme, "whiteLevel1")};
      line-height: 1.5em;
      text-align: justify;
    }
  }
`;
