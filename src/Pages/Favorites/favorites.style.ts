import styled from "styled-components";

export const FavoritesWrapper = styled.div<{ theme: string; cardGap: number }>`
  display: flex;
  min-height: 100vh;
  margin: 10px;
  gap: ${(props) => props.cardGap}px;
`;
