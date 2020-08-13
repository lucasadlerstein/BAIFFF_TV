import React from 'react';
import {Row, Col} from 'reactstrap';
import Boton from './ui/Boton';
import styled from '@emotion/styled';

const Izquierda = styled.div`
    padding: 2rem 0;
    margin: 0 auto;
    h2 {
        color: #FF0000;
        font-family: 'MonumentExtended';
        line-height: 86px;
        font-size: 3rem;
        text-align: center;
        text-transform: uppercase;
    }
    p {
        font-family: 'Raleway';
        font-size: 1.8rem;
        line-height: 21px;
        text-align: justify;
        color: black;
        margin-bottom: 2rem;
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
        max-width: 85%;
            margin: 0 auto;
        h2 {
            font-size: 7.2rem;
        }
    }
    
`;
const Lista = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
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
        content: '▪';
        color: #ff0000!important;
        font-size: 5rem;
        float: left;
        margin-right: 5px;
    }
`;
const Botones = styled.div`
    margin-top: 5rem;
    text-align: left;
    @media (max-width: 768px){
        margin: 3rem auto;
        display: grid;
        text-align: center;
        /* max-width: 90%; */
        row-gap: 1.5rem;
    }
    @media (max-width: 1155px) and (min-width: 991px) {
        margin: 3rem auto;
        display: grid;
        text-align: center;
        row-gap: 1.5rem;
        a {
            margin-right: 0;
        }
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
    font-size: 4.2rem;
    text-align:center;
    line-height: 50px;
    text-transform: uppercase;
    padding: 4rem 3rem 4rem calc(3rem + 15px);
    margin: 0;
    span {
        font-size: 2rem;
        display: block;
        line-height: 1.2;
    }
    @media (min-width: 768px){
        span {
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
        min-height: 60rem;
        /* min-width: 120%; */
        max-width:100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: auto;
        z-index: -1;
        background-image: url('/img/HOME/Home_2.jpg');
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
        width: 85%;
        margin: 0 auto;
    }
`;

const ElFestival = () => {
    return ( 
        <RowP>
            <Columna sm={12} lg={7}>
                <Izquierda>
                    <ContenidoIzq>
                        <h2>El festival</h2>
                        <p>
                            En un momento como el que estamos viviendo, debemos estar más presentes que nunca para apoyarnos entre toda la comunidad de artistas, realizadores audiovisuales y diseñadores de moda. Por esta razón la edición de BAIFFF 2020 no se detiene y se hará de forma on line. Continuaremos con la labor de convocar, promocionar y premiar a los mejores profesionales de la industria en 12 categorías:
                        </p>
                        <Lista>
                            <li>Mejor Fashion Film Nacional | Internacional | Emergente</li>
                            <li>Mejor videoclip</li>
                            <li>Mejor contenido digital corto</li>
                            <li>Mejor film experimental</li>
                            <li>Premio del público</li>
                            <li>Mejor idea</li>
                            <li>Mejor performance</li>
                            <li>Mejor cinematografía</li>
                            <li>Mejor dirección de arte</li>
                            <li>Mejor estilismo</li>
                            <li>Mejor makeup & hair</li>
                            <li>Mejor música original</li>
                        </Lista>
                        <Botones>
                            <Boton
                                color={true}
                                texto={'Más info'}
                                destino={'/nosotrxs'}
                                mr={'3rem'}
                            />
                            <Boton
                                color={true}
                                texto={'Juradxs'}
                                destino={'hola'}
                            />
                        </Botones>
                    </ContenidoIzq>
                </Izquierda>
            </Columna>
            <Columna sm={12} lg={5}>
                <Derecha>
                    <RowP>
                        <Columna xs={{size: 12, order: 'last'}}>
                            <Cartel>
                                Primer festival <span>latinoamericano de fashion films</span>
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
 
export default ElFestival;