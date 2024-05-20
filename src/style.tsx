import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Neucha', cursive;
  }
`;

export const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f74c0;
  font-family: "Neucha", cursive;
`;
export const TitleSpan = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: inline-block;
`;
