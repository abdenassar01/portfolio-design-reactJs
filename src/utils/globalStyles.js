import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    html{
        font-size: 16px;
        box-sizing: border-box;
    }

    *, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        font-family: "jetBraines Mono" , monospace;
    }
`