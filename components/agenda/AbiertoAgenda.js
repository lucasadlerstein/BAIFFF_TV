import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import {withTranslation} from '../../i18n';

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
        white-space: pre-line;
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

const AbiertoAgenda = ({info, t}) => {

    const Imagen = styled.div`
        background-image: ${`url('https://api.baifff.tv/static/${info.imagen}');`};
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
                <p>{info.texto}</p>
                <Botones>
                    <BotonDU>{info.duracion}</BotonDU>
                    <Link href="/live">
                        <BotonYT>{t('Agenda.Ver')}</BotonYT>
                    </Link>
                </Botones>
            </ContenidoIzquierda>
            <Imagen></Imagen>
        </AbiertoContenido>
    );
}
 
export default withTranslation('agenda')(AbiertoAgenda);