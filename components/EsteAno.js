import React from 'react';
import {Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import {withTranslation} from '../i18n';

const Izquierda = styled.div`
    padding: 2rem 0;
    margin: 0 auto;
    h2 {
        color: #FF0000;
        font-family: 'MonumentExtended';
        line-height: 60px;
        font-size: 3rem;
        text-transform: uppercase;
    }
    p {
        font-family: 'Raleway';
        font-size: 1.8rem;
        line-height: 21px;
        text-align: justify;
        color: black;
        margin-bottom: 2.5rem;
    }
    @media (min-width: 400px){
        h2 {
            font-size: 3.5rem;
        }
    }
    @media (min-width: 540px){
        h2 {
            font-size: 5rem;
            text-align: left;
        }
    }
    @media (min-width: 768px){
        padding: 6rem 5rem;
        max-width: 90%;
        margin: 0 auto;
        h2 {
            font-size: 6.5rem;
            line-height: 86px;
        }
    }
    @media (min-width: 991px){
        h2 {
            font-size: 5rem;
        }
    }
    @media (min-width: 1150px){
        h2 {
            font-size: 6rem;
        }
    }
    @media (min-width: 1280px){
        h2 {
            font-size: 6.5rem;
        }
    }
    @media (min-width: 1395px){
        padding: 6rem 5rem;
        /* max-width: 85%;
        margin: 0 auto; */
        h2 {
            font-size: 7.2rem;
        }
    }
    
`;
const Lista = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 3.5rem;
    @media (min-width: 768px){
        width: 120%;
    }
    li {
        font-family: 'MonumentExtended';
        line-height: 28px;
        text-transform: uppercase;
        color: black;
        font-size: 1.4rem;
        word-wrap: break-word;
    }
    li::before {
        display: block;
        content: '';
        margin-top: .5rem;
        background-color: #ff0000;
        background-size: 28px 28px;
        height: 1.5rem;
        width: 1.5rem;
        float: left;
        margin-right: 5px;
        /* color: #ff0000!important; */
        /* content: '▪'; */
        /* font-size: 5rem; */
    }
`;
const Derecha = styled.div`
    @media (min-width: 768px){
        overflow-x: hidden;
        width: calc(100% + 0.1px);
    }
`;
const Cartel = styled.h4`
    color: white;
    background-color: #ff0000;
    font-size: 4rem;
    text-align:center;
    line-height: 40px;
    text-transform: uppercase;
    padding: 4rem 3rem 4rem calc(3rem + 15px);
    margin: 0;
    span {
        margin-top: 1rem;
        font-size: 1.95rem;
        display: block;
        line-height: 1.2;
    }
    @media (min-width: 540px){
        font-size: 4.2rem;
        span {
            font-size: 2rem;
        }
    }
    @media (min-width: 768px){
        line-height: 50px;
        span {
            margin-top: 0;
            line-height: 1.3;
            font-size: 3.2rem;
        }
    }
    @media (min-width: 991px) and (max-width: 1215px){
        span {
            font-size: 2.8rem;
        }
    }
`;
const Imagen = styled.div`
    float: right;
    width: 100%;
    position: relative;
    z-index: 2;

    &:before {
        content:'';
        display: block;
        position: relative;
        min-height: 50rem;
        /* min-width: 120%; */
        max-width:100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: auto;
        z-index: -1;
        background-image: url('/img/MASINFO/MasInfo_1.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`;
const Columna = styled(Col)`
    padding: 0;
`;
const RowP = styled(Row)`
    margin-right: 0;
    @media (max-width: 768px){
        padding: 0;
        margin: 0;
    }
`;
const ContenidoIzq = styled.div`
    @media (max-width: 768px){
        padding: 3rem;
        width: 90%;
        margin: 0 auto;
    }
`;

const ElFestival = ({t}) => {
    return (
        <RowP id="this_year">
            <Columna sm={12} lg={7}>
                <Izquierda>
                    <ContenidoIzq>
                        <p>
                            <strong>{t('Edicion.Texto.1a')}</strong>{t('Edicion.Texto.1b')}
                        </p>
                        <p>
                            {t('Edicion.Texto.2')}
                        </p>
                        <p>
                            {t('Edicion.Texto.3')}
                        </p>
                        <Lista>
                            <li>{t('Edicion.Texto.NewCat.1')}</li>
                            <li>{t('Edicion.Texto.NewCat.2')}</li>
                            <li>{t('Edicion.Texto.NewCat.3')}</li>
                        </Lista>
                        <p>
                            {t('Edicion.Texto.4')}
                        </p>
                        <p>
                            {t('Edicion.Texto.5')}
                        </p>
                        <p>
                            <strong>{t('Edicion.Texto.6')}</strong>
                        </p>
                    </ContenidoIzq>
                </Izquierda>
            </Columna>
            <Columna sm={12} lg={5}>
                <Derecha>
                    <RowP>
                        <Columna xs={{size: 12, order: 'last'}}>
                            <Cartel>
                                {t('Edicion.Cartel.Titulo')}<span>{t('Edicion.Cartel.Subtitulo')}</span>
                            </Cartel>
                        </Columna>
                        <Columna xs={{size: 12, order: 'first'}}>
                            <Imagen></Imagen>
                        </Columna>
                    </RowP>
                </Derecha>
            </Columna>
        </RowP>
    );
}
 
export default withTranslation('edicion-digital')(ElFestival);