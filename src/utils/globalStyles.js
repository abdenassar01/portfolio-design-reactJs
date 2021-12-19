import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    html{
        font-size: 16px;
        font-family: 'Roboto Mono', monospace;
    }

    *, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }
`