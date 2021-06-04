import React from 'react';
import styled from 'styled-components';

import GlobalTheme from "./GlobalTheme";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button_SC";
import PageLayout from "./Page_Layout_SC";

const LayoutHeroSC = styled.div`
    flex: 1;
    
    max-width: 1600px;
    min-width: 180px;
    margin:  60px auto ;
    
    column-gap: 100px;
    row-gap: 60px;
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const LayoutHeroInfosSC = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const ImgSC = styled.img`
    flex: 1;
    width: 100%;
    max-width: 540px;
`;

const H1_SC = styled.p`
    color: var(--color-primary);
    font-family: var(--font-family-primary);
    font-weight: bold;
    font-size: var(--font-size-large);
`;

const H3_SC = styled.p`
    color: var(--color-secondary);
    font-family: var(--font-family-primary);
    font-weight: normal;
    font-size: var(--font-size-medium);
`;

const App = () => {
    return (
        <GlobalTheme>
            <PageLayout>

                <Header />

                <LayoutHeroSC>
                    <ImgSC src={"/Scarecrow.png"}/>

                    <LayoutHeroInfosSC>
                        <H1_SC>I have bad news for you</H1_SC>
                        <H3_SC>The page you are looking for might be removed or is temporarily unavailable</H3_SC>
                        <Button>BACK TO HOMEPAGE</Button>
                    </LayoutHeroInfosSC>
                </LayoutHeroSC>

                <Footer />

            </PageLayout>
        </GlobalTheme>
    );
};

export default App;
