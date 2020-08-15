import React from 'react';
import {Row, Col} from 'reactstrap';
import styled from '@emotion/styled';

import { i18n, withTranslation } from '../../i18n';

const Parrafo = styled.p`
    padding: 3.5rem;
    font-size: 1.8rem;
    text-align: left;
    line-height: 2.1rem;
    color: black;
    a {
        text-decoration: underline;
        font-style: italic;
        text-decoration-color: black;
        color: black;
    }
    @media (min-width: 768px){
        padding: 7rem;
        text-align: justify;
    }
`;

const CartelRojo = styled.p`
    padding: 6rem;
    background-color: #ff0000;
    margin: 0;
    font-size: 2.6rem;
    line-height: 4.8rem;
    text-align: center;
    font-family: 'MonumentExtended';
    text-transform: uppercase;
    color: white;
    @media (min-width: 370px){
        font-size: 3rem;
    }
    @media (min-width: 540px){
        font-size: 3.2rem;
    }
    @media (min-width: 768px){
        font-size: 4rem;
        padding: 5rem 8rem;
    }
    @media (min-width: 991px) and (max-width: 1370px){
        font-size: 2.5rem;
    }
    span {
        display: none;
        @media (min-width: 768px){
            display: inline-block;
        }
    }
    #music {
        @media (min-width: 1373px){
            display: none;
        }
    }
`;

const ImagenDerecha = styled.div`
    background-image: url('/img/NOSOTROS/Nosotros_1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    max-height: 100%;
    width: calc(100% + 0.1px);
    @media (max-width: 768px){
        min-height: 50rem;
        height: 100%;
        max-height: 15rem;
    }
`;

const ColumnaDer = styled(Col)`
    padding-left: 0;
    @media (max-width: 768px){
        padding: 0;
    }
`;

const ColumnaIzq = styled(Col)`
    padding-right: 0;
    @media (max-width: 768px){
        padding: 0;
    }
`;

const NosotrosParteUno = ({t}) => {
    return (
        <>
            <Row className="nmm">
                <ColumnaIzq sm={12} lg={7} style={{paddingRight: '0'}}>
                    <Parrafo>
                        {t('Nosotros.Texto.1a')}<strong>{t('Nosotros.Texto.1b')}</strong>{t('Nosotros.Texto.1c')}
                        <br /><br />
                        {t('Nosotros.Texto.2a')}<strong>BAIFFF</strong> {t('Nosotros.Texto.2b')}
                        <br /><br />
                        {t('Nosotros.Texto.3a')}<strong> BAIFFF</strong> {t('Nosotros.Texto.3b')} <a href="https://www.forbes.com/sites/stephanrabimov/2018/07/30/top-5-fashion-film-festivals-to-watch/#79f4386f5b04" target="_blank" rel="noopener noreferrer">Forbes Internacional</a>{t('Nosotros.Texto.3c')}
                    </Parrafo>
                    <CartelRojo className="noMobile">
                        {t('Nosotros.Items.1')} <span> -</span> {t('Nosotros.Items.2')} <span  id={ i18n.language === 'en' ? 'music' : null}> - </span> {t('Nosotros.Items.3')} <br/> {t('Nosotros.Items.4')} <span> - </span> {t('Nosotros.Items.5')} 
                    </CartelRojo>
                </ColumnaIzq>
                
                <ColumnaDer sm={12} lg={5}>
                    <ImagenDerecha>
                    </ImagenDerecha>
                    
                    <CartelRojo className="noDesktop">
                        {t('Nosotros.Items.1')} <span> -</span> {t('Nosotros.Items.2')} <span> - </span> {t('Nosotros.Items.3')} <br/> {t('Nosotros.Items.4')} <span> - </span> {t('Nosotros.Items.5')} 
                    </CartelRojo>
                </ColumnaDer>

            </Row>
        </>
    );
}
 
export default withTranslation('nosotros')(NosotrosParteUno);