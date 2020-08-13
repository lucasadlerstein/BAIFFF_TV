import React from 'react';
import styled from '@emotion/styled';

const ContenedorTop = styled.div`
    width: 100%;
    background-color: white;
    margin: auto;
    padding: 3.5rem 2rem;
    text-align:center;
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

const NosotrosDerecha = () => {
    return ( 
        <>
            <img src="/img/HOME/Home_1.jpg" />
            <ContenedorTop>
                <Top5>Top 5</Top5>
                <SubTop5>Fashion film festivals<br/>por forbes<br/>international</SubTop5>
            </ContenedorTop>
            
        </>
     );
}
 
export default NosotrosDerecha;