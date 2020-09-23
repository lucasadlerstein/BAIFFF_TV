import React from 'react';
import styled from '@emotion/styled';
import AbiertoAgenda from './AbiertoAgenda';

import {i18n} from '../../i18n';

const Titulo = styled.h4`
    width: 90%;
    color: black;
    font-size: 2.4rem;
    text-transform: uppercase;
    margin: .5rem 0 0 0;
    
    @media (max-width: 768px){
        display: grid;
        text-align: center;
        position: relative;
        right: 5%;
        left: 5%;
        span {
            margin-bottom: .5rem;
        }
    }
    @media (max-width: 540px){
        font-size: 1.9rem;
    }

    span {
        color: #ff0000;
        @media (min-width: 991px){
            margin-right: 3rem;
        }
    }
`;
const Flecha = styled.div`
    width: 10%;
    text-align: center;
    font-size: 4rem;
    margin-top: -2rem;
    height: 1rem;
    -webkit-appearance: none;
    background-color: transparent;
    color: #ff0000;
    border: none;
    transition: all .3s ease;
    &:hover {
        color: black;
    }
    &:focus{
        outline: none;
    }
    @media (max-width: 768px){
        position: relative;
        right: 2%;
    }
`;

const AgendaContenido = ({info, abierto}) => {
    
    const Contenido = styled.div`
        width: 100%;
        border-bottom: ${abierto ? '3px solid #ff0000;' : '3px solid #ff0000;'};
        padding-bottom: 2rem;
        margin: 2rem 0 0 0;
        display: flex;
        @media (max-width: 768px){
            position: relative;
        }
    `;
    
    let imagen;
    if(abierto === info.imagen){
        imagen = 'chevron-cerrado.svg';
    } else {
        imagen = 'chevron.svg';
    }

    return (
        <>
            <Contenido>
                <Titulo>
                    <span>{info.hora}</span>{ (i18n.language === 'en') ? info.titulo_en : info.titulo_es }
                </Titulo>
                <Flecha>
                    <img src={`/img/AGENDA/${imagen}`} alt="Abrir o cerrar item de la agenda BAIFFF" />
                </Flecha>
            </Contenido>
            {
                (abierto === info.imagen) ? (
                    <AbiertoAgenda info={info} />
                ) : null
            }    
        </>
    );
}
 
export default AgendaContenido;