import React from 'react';
import styled from 'styled-components';

import GlobalTheme from "./GlobalTheme";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button_SC";
import PageLayout from "./Page_Layout_SC";

const Layout_Hero_SC = styled.div`
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

const C_Hero_Infos_SC = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Img_SC = styled.img`
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

                <Layout_Hero_SC>
                    <Img_SC src={"/Scarecrow.png"}/>

                    <C_Hero_Infos_SC>
                        <H1_SC>I have bad news for you</H1_SC>
                        <H3_SC>The page you are looking for might be removed or is temporarily unavailable</H3_SC>
                        <Button>BACK TO HOMEPAGE</Button>
                    </C_Hero_Infos_SC>
                </Layout_Hero_SC>

                <Footer />

            </PageLayout>
        </GlobalTheme>
    );
};

export default App;
