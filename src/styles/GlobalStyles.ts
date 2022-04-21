import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        position: relative;
    }

    body {
        box-sizing: border-box;
        font-size: calc(10px + 2vmin);
        font-family: Verdana, sans-serif;
        overflow-x: hidden;
        z-index: 1;
    }

    a {
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    // Variables
    --primaryPrimaryColor: #0A2463;
    --primarySecondaryColor: #69BADD;
    --primaryTertiaryColor: #C8040E;
    --primaryFourthColor: #605F5E;
    --primaryFifthColor: #E2E2E2;
`
export default GlobalStyle;