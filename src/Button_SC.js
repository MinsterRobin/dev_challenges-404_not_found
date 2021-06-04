import styled from "styled-components";

const Button = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: var(--color-primary);
    color: var(--color-background);
    
    font-family: 'Space Mono', monospace;
    font-style: normal;
    font-weight: bold;
    font-size: var(--font-size-small);
    
    width: 216px;
    height: 68px;
`;

export default Button;