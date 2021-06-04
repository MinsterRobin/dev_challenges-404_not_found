import React from 'react';
import styled from 'styled-components';

const FooterSC = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
`;

const AuthorSC = styled.p`
    color: var(--color-tertiary);
    font-family: var(--font-family-tertiary);
    font-weight: normal;
    font-size: var(--font-size-small);
`;

const Footer = () => {
    return(
        <FooterSC>
            <AuthorSC>created by <b>Minster Robin</b> - devChallenges.io</AuthorSC>
        </FooterSC>
    );
};

export default Footer;