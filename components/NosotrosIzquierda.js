import React from 'react';
import styled from '@emotion/styled';
import Boton from './ui/Boton';

import { withTranslation } from '../i18n';

const ContenedorUno = styled.div`
    width: 100%;
    background-color: white;
    margin: 0 auto;
    padding: 2rem 0;
    text-align: center;

    h4 {
        font-size: 4rem; /* 6.8rem */
        color: #FF0000;
        line-height: 52px;
        margin-bottom: 0;
        text-align: center;
    }
    h3 {
        font-size: 2rem; /* 4.4rem */
        color: black;
        text-transform: uppercase;
        line-height: 20px;
        font-style: normal;
        font-weight: normal;
        margin-bottom: 0;
    }   
    @media (min-width: 540px){
        h3 {
            font-size: 2.5rem;
            line-height: 30px;
        }
    }
    @media (min-width: 550px){
        h4 {
            font-size: 5.1rem; /* 5rem */
        }
        h3 {
            font-size: 3.2rem; /* 4.4rem */
            line-height: 50px;
        }
    }
    @media (min-width: 768px){
        padding: 3.5rem 5rem;
        /* padding-left: 0; */
        h4 {
            font-size: 3.6rem; /* 5rem */
        }
        h3 {
            font-size: 2.3rem; /* 4.4rem */
            line-height: 50px;

        }
    }
    @media (min-width: 991px){
        h4 {
            font-size: 5rem;
        }
        h3 {
            font-size: 3.2rem; /* 4.4rem */
        }
    }
    @media (min-width: 1175px){
        padding: 3.5rem 5rem;
        /* padding-left: 0; */
        h4 {
            font-size: 6.2rem; /* 6.8rem */
        }
        h3 {
            font-size: 3.8rem; /* 4.4rem */
        }
    }
    
`;
const Mini = styled.span`
    font-size: 3rem!important;
    position: relative;
    top: -4px;
    color: #ff0000!important;
    @media (max-width: 540px){
        display: none;
    }
    @media (min-width: 768px){
        font-size: 3.5rem!important;
        top: 0;
    }
    @media (min-width: 991px){
        font-size: 6rem!important;
        top: 0;
    }
`;
const ContenedorDos = styled.div`
    background-color: #FF0000;
    padding: 3rem;
    margin: 0 auto;
  
    h2 {
        text-transform: uppercase;
        font-size: 3rem;
        line-height: 8.6rem;
        color: white;
        margin-bottom: 0;
    }
    p {
        font-family: 'Raleway', sans-serif;
        font-size: 1.8rem;
        line-height: 26px;
        color: white;
        margin-bottom: 5rem;
        /* margin-bottom: 7.5rem; */
    }

    div {
        text-align: left;
        margin-left: 0;
    }

    .normal {
        width: 90%;
        margin: 0 auto;
    }
    @media (min-width: 540px){
        h2 {
            font-size: 3.7rem;
        }
    }
    @media (max-width: 768px){
        .botonInfo {
            text-align: center;
            a {
                display: block;
                width: 100%;
                border: none;
                background-color: white;
                border: 2px solid transparent;
                cursor: pointer;
                transition: all .3s ease;
            }
            a:hover {
                background-color: #ff0000;
                border: 2px solid white;
                color: white;
            }
        }
    }
    
    @media (min-width: 768px){
        padding: 5rem; /* 9rem 5rem */
        text-align: center;
        min-height: 52rem;
        h2 {
            font-size: 3.2rem;
        }
        p {
            /* margin: 0 auto; */
            margin-bottom: 5rem;
            width: 97%;
            text-align: justify;
        }
        div {
            /* margin-left: 3rem; */
        }
    }
    
    @media (min-width: 900px){
        h2 {
            font-size: 4rem;
        }
    }
    @media (min-width: 991px){
        padding: 9rem 5rem;
        h2 {
            font-size: 4.5rem;
        }
    }
    @media (min-width: 1100px){
        h2 {
            font-size: 5rem;
        }
    }
    @media (min-width: 1220px){
        h2 {
            font-size: 6rem;
        }
    }
    @media (min-width: 1400px){
        h2 {
            font-size: 7rem;
        }
    }
`;

const NosotrosIzquierda = ({t}) => {
    return ( 
        <>
            <ContenedorUno>
                <div>
                    <h4>24 <Mini>▪</Mini> 25 <Mini>▪</Mini> 26</h4>
                    <h3>{t('Inicio.Septiembre')}</h3>
                </div>
            </ContenedorUno>
            <ContenedorDos>
                <div className="normal">
                    <h2>{t('Nosotros.Titulo')}</h2>
                    <p>
                        {t('Nosotros.Contenido1')}<strong>{t('Nosotros.ContenidoBold2')}</strong> {t('Nosotros.Contenido3')}
                    </p>
                    <div className="botonInfo">
                        <Boton
                            color={false}
                            texto={t('Nosotros.Boton')}
                            destino={'/nosotrxs'}
                        />
                    </div>
                </div>
            </ContenedorDos>

        </>
    );
}
 
export default withTranslation('inicio')(NosotrosIzquierda);