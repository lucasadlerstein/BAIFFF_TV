import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const AbiertoContenido = styled.div`
    width: 100%;
    border: 3px solid #ff0000;
    border-top: none;
    margin-bottom: 3rem;
    @media (min-width: 768px){
        display: flex;
    }
`;
const ContenidoIzquierda = styled.div`
    padding: 2.5rem;
    p {
        margin: 0;
        color: black;
        margin-bottom: 3rem;
        font-size: 1.4rem;
        line-height: 27px;
    }
    @media (min-width: 768px){
        padding: 4rem;
        width: 65%;
    }
`;
const Botones = styled.div`
    font-family: 'MonumentExtended';
    text-transform: uppercase;
    color: white;
    @media (min-width: 768px){
        display: flex;
    }
`;
const BotonYT = styled.a`
    background-color: #ff0000;
    color: white;
    padding: 1.9rem 0 1.6rem;
    font-size: 1.6rem;
    text-align: center;
    border: 2px solid transparent;
    transition: all .3s ease;
    display: inline-block;
    margin-top: 2rem;
    width: 100%;
    &:hover{
        text-decoration: none;
        color: #ff0000!important;
        background-color: white;
        border: 2px solid #ff0000;
    }
    @media (min-width: 768px){
        margin-top: 0;
        margin-left: 2rem;
        width: 20rem;
    }
    
`;
const BotonDU = styled.h6`
    margin: 0;
    background-color: #D3D3D3;
    vertical-align: middle;
    color: white;
    padding: 1.9rem 0 1.6rem;
    line-height: 30px;
    font-size: 1.6rem;
    text-align: center;
    display: inline-block;
    width: 100%;
    @media (min-width: 768px){
        width: 20rem;
        display: block;
    }
`;

const AbiertoAgenda = ({info}) => {

    const Imagen = styled.div`
        background-image: ${`url(${info.imagen});`};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 30rem;
        @media (min-width: 768px){
            min-height: 100%;
            width: 36%;
        }
    `;

    return (
        <AbiertoContenido>
            <ContenidoIzquierda>
                <p>
                    DOG DAYS by Femke Huurdeman – HOLANDA
                    <br />EKEKO by Jon Jacobsen – CHILE
                    <br />LITOST by Gsus Lopez – ESPAÑA
                    <br />INSPIRACION by Carlos Perez Benito – ARGENTINA
                    <br />STOP US by Fermín Cimadevilla – FRANCIA
                    <br />FATAL by alexan sarikamichian – ARGENTINA
                    <br />KAGURA by Martín Ojeda y Guillermo Montiel – VENEZUELA/ARGENTINA
                    <br />LONGCHAMP CITY BLOSSOM by Victor Claramunt – ESPAÑA
                    <br />CRIMSON ROOM by Sebastian Cantillo – ARGENTINA
                    <br />IN PROGRESS by Celeste Ahumada Maceratta – CHILE
                    <br />BRUM by Juan Pablo Felix – ARGENTINA
                    <br />MIDNIGHT WALK by Mathilde Nocquet – AUSTRALIA
                    <br />GYMNAST by Glen MacKay – GRECIA
                    <br />THE NEW FACE by Solana Keenan – ARGENTINA
                    <br />WHISPERING INDIA by GUS&LO – ESPAÑA
                </p>
                <Botones>
                    <BotonDU>60 mins.</BotonDU>
                    <Link href="/live">
                        <BotonYT>Ver en vivo</BotonYT>
                    </Link>
                </Botones>
            </ContenidoIzquierda>
            <Imagen>

            </Imagen>
        </AbiertoContenido>
    );
}
 
export default AbiertoAgenda;