import React from 'react';
import styled from 'styled-components';

const HeaderSC = styled.div`
    width: 100%;
`;

const PageTitleSC = styled.p`
    color: var(--color-primary);
    font-family: var(--font-family-secondary);
    font-weight: normal;
    font-size: 24px;
`;

const Header = () => {
    return(
        <HeaderSC>
            <PageTitleSC>404 NOT FOUND</PageTitleSC>
        </HeaderSC>
    );
};

export default Header;