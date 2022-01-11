import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    html{
        font-size: 16px;
        font-family: 'Roboto Mono Bold', monospace;
    }

    *, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 8px;
        background-color:#1DA0B5; 
    }

    ::-webkit-scrollbar-thumb {
        background:  #CA5A2F ;
    }
`