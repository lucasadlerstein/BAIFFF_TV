import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    margin: 0 auto;
    width: 100%;
    background-color: #ff0000;
    text-align:center;
    padding: 5rem 0;
    @media (max-width: 768px){
        padding: 5rem 0 2.5rem 0;
    }
`;
const Email = styled.a`
    text-transform: uppercase;
    color: white!important;
    font-family: 'MonumentExtended';
    font-size: 2.3rem;
    line-height: 143%;
    cursor: pointer;
    &:hover {
        text-decoration: none;
    }
    @media (min-width: 540px){
        font-size: 3rem;
    }
    @media (min-width: 768px){
        font-size: 6rem;
    }
`;
const Enlace = styled.a`
    cursor: pointer;
    font-family: 'MonumentExtended';
    font-size: 2rem;
    line-height: 69px;
    margin-right: 2rem;
    color: white!important;
    &::after {
        padding-left: 2rem;
        content: '|';
        font-size: 2.5rem;
        color: white;
    }
    &:last-of-type::after{
        content: '';
        padding-left: 0;
    }
    &:last-of-type {
        margin-right: 0;
    }
    &:hover {
        text-decoration: none;
    }
    @media (min-width: 540px){
        font-size: 2.8rem;
        &::after {
            font-size: 3rem;
        }
    }

    @media (min-width: 768px){
        font-size: 4.8rem;
        &::after {
            font-size: 5rem;
        }
    }

`;
const ContenedorEnlaces = styled.div`
    display: flex;
    justify-content: center;
    @media (min-width: 991px){
        margin-top: 1rem;
    }
`;

const ContactoFooter = () => {
    return ( 
        <Contenedor>
            <Email href="mailto:info@baifff.tv">info@baifff.tv</Email>
            <ContenedorEnlaces>
                <Enlace href="https://www.facebook.com/baifff/" target="_blank">FB</Enlace>
                <Enlace href="https://www.instagram.com/baifffoficial/" target="_blank">IG</Enlace>
                <Enlace href="https://www.youtube.com/channel/UCJE77qi7bGrN_l9nI72NAvg" target="_blank">YT</Enlace>
                <Enlace href="https://vimeo.com/baifff" target="_blank">Vimeo</Enlace>
            </ContenedorEnlaces>
        </Contenedor>
    );
}
 
export default ContactoFooter;