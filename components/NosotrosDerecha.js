import React from 'react';
import styled from '@emotion/styled';

import { i18n, withTranslation } from '../i18n';

const Con1 = styled.p`
    font-family: 'MonumentExtended';
    text-transform: uppercase;
    color: #000000;
    text-align: center;
    margin: 0;
    /* font-size: 3rem; */
    font-size: 3.2rem;

`;
const Con1es = styled.p`
    font-family: 'MonumentExtended';
    text-transform: uppercase;
    color: #000000;
    text-align: center;
    margin: 0;
    /* font-size: 3rem; */
    font-size: 2.1rem;
`;
const Con2 = styled.p`
font-family: 'MonumentExtended';
    text-transform: uppercase;
    color: #000000;
    text-align: center;
    margin: 0;
    /* font-size: 5.2rem; */
    font-size: 5.4rem;
    margin-top: -1.8rem;
`;
const Con3 = styled.p`
font-family: 'MonumentExtended';
    text-transform: uppercase;
    color: #ff0000;
    text-align: center;
    margin: 0;
    font-size: 7rem;
    /* font-size: 6.8rem; */
    margin-top: -3.5rem;
`;
const Con4 = styled.p`
font-family: 'MonumentExtended';
    text-transform: uppercase;
    color: #000000;
    text-align: center;
    margin: 0;
    /* font-size: 2.9rem; */
    font-size: 3.1rem;
    margin-top: -3rem;

`;
const Con5 = styled.p`
font-family: 'MonumentExtended';
    text-transform: uppercase;
    color: #000000;
    text-align: center;
    margin: 0;
    font-size: 4rem;
    /* font-size: 3.8rem; */
    margin-top: -1.8rem;
`;

const NosotrosDerecha = ({t}) => {
    const ContenedorTop = styled.div`
        width: 100%;
        background-color: white;
        margin: auto;
        padding: ${(i18n.language === 'es' ? '4rem 2rem' : '3.2rem 2rem' )};
        text-align:center;
        align-items: center;
    `;
    return ( 
        <>
            <img src="/img/HOME/Home_1.jpg" />
            <ContenedorTop>
                <a rel="noopener noreferrer" className="aSinClase" href="https://www.forbes.com/sites/stephanrabimov/2018/07/30/top-5-fashion-film-festivals-to-watch/#25a8df515b04" target="_blank">
                    {(i18n.language === 'es') ? <Con1es>Seleccionado por</Con1es> : <Con1>Selected by</Con1>}   
                    <Con2>Forbes</Con2>
                    <Con3>Top 5</Con3>
                    <Con4>Fashion film</Con4>
                    <Con5>Festivals</Con5>
                </a>
            </ContenedorTop>
        </>
     );
}
 
export default withTranslation('inicio')(NosotrosDerecha);