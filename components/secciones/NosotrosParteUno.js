import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';

const Parrafo = styled.p`
    padding: 3.5rem;
    font-size: 1.8rem;
    text-align: left;
    line-height: 2.1rem;
    color: black;
    span {
        text-decoration: underline;
        font-style: italic;
    }
    @media (min-width: 768px){
        padding: 7rem;
        text-align: justify;
    }
`;

const CartelRojo = styled.p`
    padding: 6rem;
    background-color: #ff0000;
    margin: 0;
    font-size: 2.6rem;
    line-height: 4.8rem;
    text-align: center;
    font-family: 'MonumentExtended';
    text-transform: uppercase;
    color: white;
    @media (min-width: 540px){
        font-size: 3.2rem;
    }
    @media (min-width: 768px){
        font-size: 4rem;
        padding: 5rem 8rem;
    }
    @media (min-width: 991px) and (max-width: 1370px){
        font-size: 2.5rem;
    }
    span {
        display: none;
        @media (min-width: 768px){
            display: inline-block;
        }
    }
`;

const ImagenDerecha = styled.div`
    background-image: url('/img/NOSOTROS/Nosotros_1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    max-height: 100%;
    width: calc(100% + 0.1px);
    @media (max-width: 768px){
        min-height: 50rem;
        height: 100%;
        max-height: 15rem;
    }
`;

const ColumnaDer = styled(Col)`
    padding-left: 0;
    @media (max-width: 768px){
        padding: 0;
    }
`;

const ColumnaIzq = styled(Col)`
    padding-right: 0;
    @media (max-width: 768px){
        padding: 0;
    }
`;

const NosotrosParteUno = () => {
    return (
        <>
            <Row className="nmm">
                <ColumnaIzq sm={12} lg={7} style={{paddingRight: '0'}}>
                    <Parrafo>
                        Somos un festival internacional que promueve la interacción entre la <strong>moda, el cine, las artes visuales, la música, la tecnología y la publicidad.</strong> Convocamos, promocionamos y premiamos el trabajo de realizadores audiovisuales, diseñadores, fotógrafos, músicos, influencers y marcas, en un espacio creativo, inclusivo y cultural.
                        <br /><br />
                        El mundo digital cambió la manera en la que nos comunicamos. Hoy en día, diseñadores, marcas y artistas, interactúan con su público a través de contenidos audiovisuales de entretenimiento, de alto valor estético y creativo, que conecten con sus valores, gustos y emociones, mediante nuevas plataformas digitales de difusión. <strong>BAIFFF</strong> reconoce estos trabajos y destaca el aporte que hacen a la cultura visual de nuestros tiempos.
                        <br /><br />
                        Luego de 3 exitosas ediciones, <strong>BAIFFF</strong> se ha convertido en un festival único en su estilo. Seleccionado por la revista <span>Forbes Internacional</span>, como uno de los 5 mejores festivales de Fashion Film en el mundo, es un referente internacional en el desarrollo de este género audiovisual.
                    </Parrafo>
                    <CartelRojo className="noMobile">
                         Moda <span>-</span> Música <span> - </span> Cine <br/> Arte <span> - </span> Publicidad 
                    </CartelRojo>
                </ColumnaIzq>
                
                <ColumnaDer sm={12} lg={5}>
                    <ImagenDerecha>
                    </ImagenDerecha>
                    
                    <CartelRojo className="noDesktop">
                         Moda <span>-</span> Música <span> - </span> Cine <br/> Arte <span> - </span> Publicidad 
                    </CartelRojo>
                </ColumnaDer>

            </Row>
        </>
    );
}
 
export default NosotrosParteUno;