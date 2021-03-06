import { createGlobalStyle } from "styled-components";
import breakpoint from "styled-components-breakpoint";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily.secondary}, sans-serif;
    background: ${({ theme }) => theme.colors.backgroundLighten};
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
    line-height: normal;
  }
  
  h1, h2, h3, h4, h5 {
    margin: 0;
  }
  
    a {
      color: inherit;
      text-decoration: none;
    }
    
    * {
      box-sizing: border-box;
    }
    
    @font-face {
      font-family: "Roboto";
      src: url("/static/fonts/Roboto/Roboto-Light.ttf");
      font-style: normal;
      font-weight: 300;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Roboto";
      src: url("/static/fonts/Roboto/Roboto-Regular.ttf");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Roboto";
      src: url("/static/fonts/Roboto/Roboto-Bold.ttf");
      font-style: normal;
      font-weight: 700;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Poppins";
      src: url("/static/fonts/Poppins/Poppins-Light.ttf");
      font-style: normal;
      font-weight: 300;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Poppins";
      src: url("/static/fonts/Poppins/Poppins-Bold.ttf");
      font-style: normal;
      font-weight: 700;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Poppins";
      src: url("/static/fonts/Poppins/Poppins-ExtraBold.ttf");
      font-style: normal;
      font-weight: 800;
      font-display: swap;
    }

  .container {
    max-width: ${({ theme }) => theme.breakpoints.xl}px;
    margin: 0 0.5rem;
    position: relative;
    width: calc(100% - 1rem);
  
    ${breakpoint("xl")`
      margin: auto;
    `};
  }
  
  .fade-enter {
    opacity: 0;
    }
    
    .fade-enter-active {
        opacity: 1;
        transition: opacity 200ms;
    }
    
    .fade-exit {
        opacity: 1;
    }
    
    .fade-exit-active {
        opacity: 0;
        transition: opacity 200ms;
    }
`;

export default GlobalStyle;
