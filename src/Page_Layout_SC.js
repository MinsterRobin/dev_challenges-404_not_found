import styled from 'styled-components';

const PageLayout = styled.div`
    font-family: var(--font-family-tertiary);
    background-color: var(--color-background);
    
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    padding: 40px;
    
    @media (max-width: 768px) {
        padding: 20px;
    }
`;

 export default PageLayout;