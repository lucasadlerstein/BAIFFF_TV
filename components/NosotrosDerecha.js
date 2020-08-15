import React from 'react';
import styled from '@emotion/styled';

import { withTranslation } from '../i18n';

const ContenedorTop = styled.div`
    width: 100%;
    background-color: white;
    margin: auto;
    padding: 3.5rem 2rem;
    text-align:center;
    align-items: center;
`;
const Top5 = styled.p`
    font-family: 'MonumentExtended';
    color: #FF0000;
    font-size: 6.8rem;
    line-height: 86px;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: -10px;
    @media (min-width: 768px){
        font-size: 7.2rem;
    }
`;
const SubTop5 = styled.h4`
    color: black;
    text-transform: uppercase;
    font-family: 'MonumentExtended';
    font-size: 2rem;
    /* line-height: 86px; */

    @media (min-width: 768px){
        font-size: 3rem;
    }

`;

const NosotrosDerecha = ({t}) => {
    return ( 
        <>
            <img src="/img/HOME/Home_1.jpg" />
            <ContenedorTop>
                <Top5>{t('Nosotros.Top')}</Top5>
                <SubTop5>{t('Nosotros.TopContenido1')}<br/>{t('Nosotros.TopContenido2')}<br/>{t('Nosotros.TopContenido3')}</SubTop5>
            </ContenedorTop>
            
        </>
     );
}
 
export default withTranslation('inicio')(NosotrosDerecha);