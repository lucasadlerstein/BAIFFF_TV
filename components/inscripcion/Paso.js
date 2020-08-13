import React from 'react';
import styled from '@emotion/styled';

const Paso = ({orden, actual, nombre}) => {

    const Etapa = styled.p`
        font-family: 'MonumentExtended';
        font-size: 1.9rem;
        line-height: 29px;
        text-transform: uppercase;
        color: #ff0000;
        box-sizing: border-box;
        width: 90%;
        border: ${(actual === orden) ? '2px solid #ff0000' : '2px solid transparent'};
        text-align: center;
        padding: 1rem 0;
        transition: all .3s ease;
        margin: 0 auto;
        margin-bottom: 2rem;
        @media (min-width: 991px){
            font-size: 2.4rem;
        }
        @media (min-width: 1100px){
            width: 70%;
        }
    `;

    const EtapaLista = styled.p`
        font-family: 'MonumentExtended';
        font-size: 1.9rem;
        line-height: 29px;
        text-transform: uppercase;
        color: #D3D3D3;
        text-align:center;
        box-sizing: border-box;
        width: 90%;
        padding: 1rem 0;
        margin: 0 auto;
        margin-bottom: 2rem;
        transition: all .3s ease;

        &::before {
            content: '✔';
            margin-right: 1rem;
        }
        @media (min-width: 991px){
            font-size: 2.4rem;
        }
        @media (min-width: 1100px){
            width: 70%;
        }
    `;

    let lista = true;
    if (actual > orden) {
        lista = false;
    }

    return (
        <>
        { lista ? <Etapa>{nombre}</Etapa> : <EtapaLista>{nombre}</EtapaLista> }
        </>
    );
}
 
export default Paso;