import React from 'react';
import styled from '@emotion/styled';
import Boton from '../ui/Boton';

const Tarjeta = styled.div`
    margin: 0 auto;
    text-align: center;
    background-color: #ff0000;
    margin-bottom: 3rem;
    @media (min-width: 768px){
        margin-bottom: 0;
    }
`;

const Titulo = styled.h3`
    color: white;
    font-size: 3rem;
    padding: 2.5rem 0;
    line-height: 3.5rem;
    margin: 0;
    @media (min-width: 768px){
        font-size: 3.5rem;
    }
`;

const FooterBoton = styled.div`
    padding: 2rem 0;
    margin: 0 auto;
    text-align: center;
    @media (min-width: 768px){
        padding: 3.5rem 0;
    }
`;

const EdicionAnterior = ({imagen, titulo, link}) => {
    return (
        <>
            <Tarjeta>
                <Titulo>{titulo}</Titulo>
                <img src={imagen} alt={titulo} />
                <FooterBoton>
                    <Boton color={false} texto={'Más info'} destino={link} anchoMobile={'80%'}  />
                </FooterBoton>
            </Tarjeta>
        </>
    );
}
 
export default EdicionAnterior;