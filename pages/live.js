import React from 'react';
import Layout from '../components/Layout';
import {Container, Col, Row} from 'reactstrap';
import styled from '@emotion/styled';
import PopUpLive from '../components/PopUpLive';

import {withTranslation} from '../i18n';

const Contenedor = styled(Container)`
    padding: 4rem 0 2rem;
    margin: 0 auto;
    h1 {
        text-transform: uppercase;
        color: #ff0000;
        font-family: 'MonumentExtended';
        font-size: 4rem;
        text-align: center;
        line-height: 45px;
        margin-bottom: 2rem;
    }
    @media (min-width: 768px){
        padding: 10rem 8rem;
        h1 {
            font-size: 6.5rem;
            text-align:left;
            line-height: 80px;
            margin-bottom: 4rem;

        }
    }
`;
const Caja = styled.div`
    position:relative; width:100%; height:0px; padding-bottom:56.25%;
`;
const YT = styled.iframe`
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
`;
const DivBoton = styled.div`
    align-items: bottom;
    position: relative;
    top: 0;
`;
const BotonUI = styled.a`
    position: absolute;
    right: 0;
    text-transform: uppercase;
    font-size: 1.8rem;
    padding: 1.5rem 5rem;
    font-family: 'MonumentExtended', sans-serif;
    text-decoration: none;
    background-color: #FF0000;
    color: #FFFFFF;
    text-align: center;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
        background-color: #FFFFFF;
        color: #FF0000;
        border: 2px solid #FF0000;
        text-decoration: none;
    }
`;
const BotonMobile = styled.a`
    @media (max-width: 768px){
        display: block;
    }
    width: 90%;
    margin: 3rem auto;
    text-transform: uppercase;
    font-size: 1.8rem;
    text-align: center;
    padding: 1.5rem 2rem;
    font-family: 'MonumentExtended', sans-serif;
    text-decoration: none;
    background-color: #FF0000;
    color: #FFFFFF;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
        background-color: #FFFFFF;
        color: #FF0000;
        border: 2px solid #FF0000;
        text-decoration: none;
    }
`;
const RowP = styled(Row)`
    @media (max-width: 768px ){
        margin-right: 0;
        margin-left: 0;
    }
`;

const Index = ({t}) => {
    return ( 
        <Layout>
            <Contenedor>
                <RowP>
                    <Col>
                        <h1>{t('Live.TituloA')}<br/>{t('Live.TituloB')}</h1>
                    </Col>
                    <Col lg={4}>
                        <DivBoton>
                            <BotonUI className="noMobile" href="https://www.youtube.com/watch?v=wHn1_QVoXGM" target="_blank">{t('Live.YT')}</BotonUI>
                        </DivBoton>
                    </Col>
                </RowP>
                <Caja>
                    <YT src="https://www.youtube.com/embed/wHn1_QVoXGM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></YT>
                </Caja>
                <DivBoton>
                    <BotonMobile className="noDesktop" href="https://www.youtube.com/watch?v=wHn1_QVoXGM" target="_blank">{t('Live.YT')}</BotonMobile>
                </DivBoton>
            </Contenedor>
            <PopUpLive/>
        </Layout>
    );
}

Index.getInitialProps = async () => ({
    namespacesRequired: ['live'],
});
 
export default withTranslation('live')(Index);