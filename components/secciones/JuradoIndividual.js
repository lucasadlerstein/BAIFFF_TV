import React from 'react';
import styled from '@emotion/styled';
import {Col} from 'reactstrap';

const Tarjeta = styled.div`
    margin: 0 auto;
    text-align: center;
    background-color: #ff0000;
    margin-bottom: 3rem;
`;
const FooterTarjeta = styled.div`
    padding: 2rem 0;
    margin: 0 auto;
    color: #ffffff;
    text-align: center;
    @media (min-width: 768px){
        padding: 3rem 0;
    }
`;
const Nombre = styled.h5`
    font-family: 'MonumentExtended';
    font-size: 1.8rem;
    line-height: 22px;
    text-transform: uppercase;
`;
const Rol = styled.p`
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.4rem;
    line-height: 16px;
`;

const Instagram = styled.a`
    font-family: 'Raleway';
    font-size: 1.8rem;
    text-decoration-line: underline;
    line-height: 21px;
    margin-top: 2rem;
    color: white;
    &:hover {
        color: white;
        text-decoration: none;
    }
`;

const JuradoIndividual = ({foto, nombre, rol, instagram}) => {
    const Imagen = styled.div`
        min-height: 30rem;
        width: 100%;
        background-image: url(${foto});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        filter: grayscale(100%);
        transition: all .3s ease;
    `;
    return (
        <Col sm={12} md={6} lg={3}>
            <Tarjeta>
                <Imagen></Imagen>
                <FooterTarjeta>
                    {/* <Rol>{rol}</Rol> */}
                    <Nombre>{nombre}</Nombre>
                    <Instagram target="_blank" href={`https://instagram.com/${instagram}`}>@{instagram}</Instagram>
                </FooterTarjeta>
            </Tarjeta>
        </Col>
    );
}
 
export default JuradoIndividual;