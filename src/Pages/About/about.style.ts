import styled from "styled-components";
import { fontSize, fontWeight, getColor } from "../../Constants";

export const AboutWrapper = styled.div<{ theme: string }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 25px;

  .about-title-wrapper {
    .about-title {
      font-size: ${fontSize.title};
      font-weight: ${fontWeight.bold};
      color: ${(props) => getColor(props.theme, "whiteLevel1", true)};
    }
  }
  .about-paragraph-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    .about-subtitle {
      font-size: ${fontSize.subtitle};
      /* color: ${(props) => getColor(props.theme, "orangeLevel1")}; */
    }

    .about-text {
      /* color: ${(props) => getColor(props.theme, "whiteLevel1")}; */
      line-height: 1.5em;
      text-align: justify;
    }
  }
`;
