import React from 'react';
import styled from 'styled-components';

const Header_SC = styled.div`
    width: 100%;
`;

const PageTitle_SC = styled.p`
    color: var(--color-primary);
    font-family: var(--font-family-secondary);
    font-weight: normal;
    font-size: 24px;
`;

const Header = () => {
    return(
        <Header_SC>
            <PageTitle_SC>404 NOT FOUND</PageTitle_SC>
        </Header_SC>
    );
};

export default Header;