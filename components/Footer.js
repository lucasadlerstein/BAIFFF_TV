import React from 'react';
import ContactoFooter from './ContactoFooter';
import styled from '@emotion/styled';
import Link from 'next/link';

const NavFooter = styled.div`
    background-color: #727171;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    display: grid;
    @media (min-width: 768px){
        display: flex;
        align-items:center;
        justify-content: center;
    }
`;
const ItemNav = styled.a`
    font-family: 'MonumentExtended';
    text-transform: uppercase;
    color: #474646!important;
    text-align: center;
    align-items:center;
    font-size: 1.8rem;
    line-height: 22px;
    cursor: pointer;
    margin-bottom: 2rem;
    text-decoration: none;

    &:last-of-type{
        margin-bottom:0;
    }

    @media (min-width: 768px){
        margin-right: 4rem;
        margin-bottom: 0;
        &:last-of-type{
            margin-right: 0;
        }
    }
    &:hover {
        text-decoration: none;
    }
`;
const Derechos = styled.div`
    background-color: black;
    padding: 2rem;
    margin: 0 auto;
    text-align: center;
    p {
        font-family: 'Raleway';
        font-size: 1.2rem;
        line-height: 14px;
        text-align: center;
        color: #D3D3D3;
        margin: 0 auto;
        max-width: 80%;
    }
    a {
        text-decoration: none;
        color: #D3D3D3;
    }
    @media (min-width: 768px){
        padding: 1rem;
    }
`;

const Footer = () => {
    return ( 
        <>
            <ContactoFooter />
            <NavFooter>
                <Link href="/"><ItemNav>Home</ItemNav></Link>
                <Link href="/nosotrxs"><ItemNav>Nosotrxs</ItemNav></Link>
                <Link href="/agenda"><ItemNav>Agenda</ItemNav></Link>
                <Link href="/nosotrxs#ediciones-anteriores"><ItemNav>Ediciones</ItemNav></Link>
                <ItemNav target="_blank" rel="noopener noreferrer" href="/terms/BASES_Y_CONDICIONES_BAIFFF2020.pdf">Términos</ItemNav>
            </NavFooter>
            <Derechos>
                <p>
                    BAIFFF 2020 © Todos los derechos reservados. 
                    <a href="https://infinidad.com.ar" target="_blank"> Desarrollo por INFINIDAD</a>
                </p>
            </Derechos>
        </>
    );
}
 
export default Footer;