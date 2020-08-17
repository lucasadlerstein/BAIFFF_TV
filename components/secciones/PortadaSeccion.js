import React from 'react';
import styled from '@emotion/styled';
import {Container} from 'reactstrap';

const PortadaSeccion = ({foto, titulo}) => {
    
    const Portada = styled.div`
        background-image: url(${foto});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        position: relative;
        height: 20rem;

        @media (min-width: 768px){
            height: 35rem;
        }
    `;

    const Texto = styled.h1`
        color: white;
        font-family: 'MonumentExtended';
        font-size: 3.5rem;
        text-transform: uppercase;
        position: absolute;
        bottom: 1rem;
        left: 5%;
        right: 5%;
        text-align: center;

        @media (min-width: 540px){
            font-size: 4rem;
        }

        @media (min-width: 768px){
            /* top: 23rem; */
            font-size: 7.2rem;
            text-align: left;
        }
    `;

    return (
        <>
            <Portada>
                <Container>
                    <Texto>{titulo}</Texto>
                </Container>
            </Portada>
        </>
    );
}
 
export default PortadaSeccion;