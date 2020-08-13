import React from 'react';
import {Row, Col} from 'reactstrap';
import styled from '@emotion/styled';

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

const ElFestival = () => {
    return ( 
        <RowP id="this_year">
            <Columna sm={12} lg={7}>
                <Izquierda>
                    <ContenidoIzq>
                        <p>
                            <strong>BAIFFF 2020 Edición Digital</strong> es una expansión del festival al modo on line. El público podrá disfrutar de las experiencia BAIFFF en primera fila, desde donde quieran y en cualquier parte del mundo.
                        </p>
                        <p>
                            Como todos los años tendremos proyecciones de los films en competencia, charlas con destacados representantes de la mundo del fashion film international, performances artísticas, proyecciones curadas por invitados internacionales, música en vivo, exposición de fotos de moda y muchas más actividades.
                        </p>
                        <p>
                            Este año tenemos 3 nuevas categorías:                        
                        </p>
                        <Lista>
                            <li>Mejor videoclip</li>
                            <li>Mejor contenido digital corto</li>
                            <li>Mejor film experimental</li>
                        </Lista>
                        <p>
                            Estas piezas deben destacar por su valor Estético/Visual relacionado con Moda, Lifestyle y/o Belleza [ Estilismo, Maquillaje, Pelo, Vestuario o Accesorios ].
                        </p>
                        <p>
                            El público podrá participar votando por sus films favoritos a través de nuestras redes sociales. 
                        </p>
                        <p>
                            <strong>Seguinos y está atento a las novedades a través de nuestras redes.</strong>
                        </p>
                    </ContenidoIzq>
                </Izquierda>
            </Columna>
            <Columna sm={12} lg={5}>
                <Derecha>
                    <RowP>
                        <Columna xs={{size: 12, order: 'last'}}>
                            <Cartel>
                                ¡Este año <span>BAIFFF lo vivís desde donde estés!</span>
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