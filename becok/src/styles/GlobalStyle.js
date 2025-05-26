// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html, body {
  margin: 0;
  padding: 0 !important;
  overflow-x: hidden; /* 수평 스크롤 방지 */
}

#app {
  display: flex;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 0 !important;
}

.sidebar {
  width: 240px; /* 사이드바 너비 */
  height: 100%;
}

.main-content {
  flex: 1;
  overflow-y: auto;
}
`;

export default GlobalStyle;
