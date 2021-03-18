import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #EE4D64;
    --background: #F5F5F5;

    --text-body: #666666;
    --text-title: #444444;
    --border: #dddddd;

    --button-color: #999999;

    --shape: #ffffff;
  }

   * {
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;
   }

   html {
     height: 100%;

     @media (max-width: 1080px) {
       font-size: 93.75%;
     }

     @media (max-width: 720px) {
       font-size: 87.5%;
     }
   }

   body {
     height: auto;
     background-color: var(--background);
     -webkit-font-smoothing: antialiased !important;
   }

   body, #root {
     min-height: 100vh;
     height: 100%;
   }

   body, input, textarea, button {
     font-family: 'Roboto', sans-serif;
     font-weight: 400;
   }

   h1, h2, h3, h4, h5, h6, strong {
     font-weight: 600
   }

   button {
     cursor: pointer;
   }
`;
