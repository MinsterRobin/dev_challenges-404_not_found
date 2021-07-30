import {createGlobalStyle} from 'styled-components';
import React from "react";

const GlobalStyles = createGlobalStyle`  
    * {
        margin: 0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%;
        --color-background: white;
        --color-primary: #333333;
        --color-secondary: #4F4F4F;
        --color-tertiary: #BDBDBD;
        
        --font-family-primary: 'Space Mono', monospace;
        --font-family-secondary: 'Inconsolata', monospace;
        --font-family-tertiary: 'Montserrat', sans-serif;
      
        --font-size-small: 1.4rem;
        --font-size-medium: 2.4rem;
        --font-size-large: 6.4rem;
        
        @media (max-width: 768px) {
            --font-size-medium: 1.8rem;
            --font-size-large: 4.8rem;
        }      
    }
`;

const GlobalTheme = ({children}) => {
    return (
        <>
            <GlobalStyles/>
            {children}
        </>
    );
};

export default GlobalTheme;