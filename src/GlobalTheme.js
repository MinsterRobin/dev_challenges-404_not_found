import {createGlobalStyle} from 'styled-components';
import React from "react";

const GlobalStyles = createGlobalStyle`
    html {
        --color-background: white;
        --color-primary: #333333;
        --color-secondary: #4F4F4F;
        --color-tertiary: #BDBDBD;
        
        --font-family-primary: 'Space Mono', monospace;
        --font-family-secondary: 'Inconsolata', monospace;
        --font-family-tertiary: 'Montserrat', sans-serif;
      
        --font-size-small: 14px;
        --font-size-medium: 24px;
        --font-size-large: 64px;
        
        @media (max-width: 768px) {
            --font-size-medium: 18px;
            --font-size-large: 48px;
        }      
    }
    
    * {
        margin: 0;
        box-sizing: border-box;
    }
    
    .page_layout {
        font-family: var(--font-family-tertiary);
        background-color: red;
        
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        
        padding: 40px;
        
        @media (max-width: 768px) {
            padding: 20px;
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