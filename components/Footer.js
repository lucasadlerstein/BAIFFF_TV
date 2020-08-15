import React from 'react';
import ContactoFooter from './ContactoFooter';
import styled from '@emotion/styled';
import Link from 'next/link';

import {withTranslation} from '../i18n';

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

const Footer = ({t}) => {
    return ( 
        <>
            <ContactoFooter />
            <NavFooter>
                <Link href="/"><ItemNav>{t('Nav.Inicio')}</ItemNav></Link>
                <Link href="/nosotrxs"><ItemNav>{t('Nav.Nosotros')}</ItemNav></Link>
                <Link href="/agenda"><ItemNav>{t('Nav.Agenda')}</ItemNav></Link>
                <Link href="/nosotrxs#ediciones-anteriores"><ItemNav>{t('Nav.Ediciones')}</ItemNav></Link>
                <ItemNav target="_blank" rel="noopener noreferrer" href={`/terms/${t('Nav.PDF')}`}>{t('Nav.Terminos')}</ItemNav>
            </NavFooter>
            <Derechos>
                <p>
                    {t('Footer.Derechos')} 
                    <a href="http://infinidad.com.ar" target="_blank"> {t('Footer.Infinidad')}</a>
                </p>
            </Derechos>
        </>
    );
}
 
export default withTranslation('common')(Footer);