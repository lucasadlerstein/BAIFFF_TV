import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import TituloSeccion from '../ui/TituloSeccion';
import EdicionAnterior from './EdicionAnterior';
import styled from '@emotion/styled';

const Contenedor = styled(Container)`
    padding-top: 3rem;
    padding-bottom: 3rem;
    @media (min-width: 768px){
        padding-top: 6rem;
        padding-bottom: 8rem;
    }
`;

const RowP = styled(Row)`
    margin-top: 3rem;
    @media (min-width: 768px){
        margin-top: 6rem;
    }
`;

const EdicionesAnteriores = () => {
    return (
        <Contenedor>
            <TituloSeccion texto={'Ediciones Anteriores'} tamano={'6rem'}/>
            <RowP>
                <Col sm={12} lg={4}>
                    <EdicionAnterior titulo={'BAIFFF 2015'} imagen={'/img/NOSOTROS/Nosotros_Ediciones_2015.jpg'} link={'/ediciones/2015'} />
                </Col>
                <Col sm={12} lg={4}>
                    <EdicionAnterior titulo={'BAIFFF 2016'} imagen={'/img/NOSOTROS/Nosotros_Ediciones_2016.jpg'} link={'/ediciones/2016'} />
                </Col>
                <Col sm={12} lg={4}>
                    <EdicionAnterior titulo={'BAIFFF 2017'} imagen={'/img/NOSOTROS/Nosotros_Ediciones_2017.jpg'} link={'/ediciones/2017'} />
                </Col>
            </RowP>
        </Contenedor>

    );
}
 
export default EdicionesAnteriores;