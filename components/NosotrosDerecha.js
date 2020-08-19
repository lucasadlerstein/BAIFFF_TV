import React from 'react';
import styled from '@emotion/styled';

import { i18n, withTranslation } from '../i18n';

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
        line-height: 86px;
        margin-bottom: -10px;
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
const Top5es = styled.p`
    font-family: 'MonumentExtended';
    color: #FF0000;
    font-size: 6rem;
    line-height: 60px;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 1rem;
    @media (min-width: 768px){
        font-size: 6rem;
        line-height: 86px;
        margin-bottom: -10px;
    }
`;
const SubTop5es = styled.h4`
    color: black;
    text-transform: uppercase;
    font-family: 'MonumentExtended';
    font-size: 1.8rem;
    width: 90%;
    margin: 0 auto;
    /* line-height: 86px; */

    @media (min-width: 768px){
        font-size: 2.4rem;
        width:100%;
    }
`;

const NosotrosDerecha = ({t}) => {
    const ContenedorTop = styled.div`
        width: 100%;
        background-color: white;
        margin: auto;
        padding: ${(i18n.language === 'es' ? '6.2rem 2rem' : '3.2rem 2rem' )};
        text-align:center;
        align-items: center;
    `;
    return ( 
        <>
            <img src="/img/HOME/Home_1.jpg" />
            <ContenedorTop>
                <a rel="noopener noreferrer" className="aSinClase" href="https://www.forbes.com/sites/stephanrabimov/2018/07/30/top-5-fashion-film-festivals-to-watch/#25a8df515b04" target="_blank">
                {
                    (i18n.language === 'es') ? (
                        <>  
                            <Top5es>{t('Nosotros.Top')}</Top5es>
                            <SubTop5es>{t('Nosotros.TopContenido1')}<br/>{t('Nosotros.TopContenido2')} {t('Nosotros.TopContenido3')}</SubTop5es>
                        </>
                    ) : (
                        <>  
                            <Top5>{t('Nosotros.Top')}</Top5>
                            <SubTop5>{t('Nosotros.TopContenido1')}<br/>{t('Nosotros.TopContenido2')}<br/>{t('Nosotros.TopContenido3')}</SubTop5>
                        </>
                    )
                }
                </a>
            </ContenedorTop>
            
        </>
     );
}
 
export default withTranslation('inicio')(NosotrosDerecha);