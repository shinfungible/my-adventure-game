import 'reset-css/reset.css';

import baseStyled, {
  createGlobalStyle,
  ThemedStyledInterface,
} from 'styled-components';

// グローバル スタイル 定義
// tslint:disable-next-line:no-unused-expression
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "M PLUS 1p";
    src: url('./fonts/MPLUS1p-Thin.ttf');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: "M PLUS 1p";
    src: url('./fonts/MPLUS1p-Light.ttf');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "M PLUS 1p";
    src: url('./fonts/MPLUS1p-Regular.ttf');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "M PLUS 1p";
    src: url('./fonts/MPLUS1p-Bold.ttf');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "M PLUS 1p";
    src: url('./fonts/MPLUS1p-Black.ttf');
    font-weight: 900;
    font-style: normal;
  }
  * {
    font-family: 'M PLUS 1p', sans-serif;
    margin: 0;
    user-select: none;
  }
  html, body {
    font-size: 1.2vw;
    height: 100vh;
    width: 100vw;
  }
  button {
    background-color: transparent;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    padding: .5em;
    transition-property: all;
    transition-duration: .2s;
    &:hover {
      box-shadow: 3px 3px 3px rgba(200,200,200,4);
      transform: translate(-2px, -2px);
    }
    &:active {
      background-color: #cccc00;
    }
  }
  input[type=text] {
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: .5em;
  }
`;

// テーマの設定
// SASS style sheet */
// Palette color codes */
// Palette URL: http://paletton.com/#uid=54r1g0knvBjdsPDiZI7sCwOvApZ */

// Feel free to copy&paste color codes to your application */

// As hex codes */
export const theme = {
  PRIMARY_0: '#723FBD', // MAIN PRIMARY COLOR */
  PRIMARY_1: '#AE8CE2',
  PRIMARY_2: '#8C5FCF',
  PRIMARY_3: '#5A21AF',
  PRIMARY_4: '#410E8D',
  SECONDARY_1_0: '#30B698', // MAIN SECONDARY COLOR (1) */
  SECONDARY_1_1: '#81DFCA',
  SECONDARY_1_2: '#52CAAF',
  SECONDARY_1_3: '#12A785',
  SECONDARY_1_4: '#028568',
  SECONDARY_2_0: '#FF5644', // MAIN SECONDARY COLOR (2) */
  SECONDARY_2_1: '#FF9E94',
  SECONDARY_2_2: '#FF7668',
  SECONDARY_2_3: '#FF311B',
  SECONDARY_2_4: '#CF1603',
  FOREGROUND: '#333',
  FOREGROUND_REVERSE: '#fff',
};

export type Theme = typeof theme;

export const styled = baseStyled as ThemedStyledInterface<Theme>;