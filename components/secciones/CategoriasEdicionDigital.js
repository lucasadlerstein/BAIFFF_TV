import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import TituloSeccion from '../ui/TituloSeccion';
import styled from '@emotion/styled';
import CategoriaIndividual from './CategoriaIndividual';

const Contenedor = styled(Container)`
    padding-top: 8rem;
    padding-bottom: 5rem;
    @media (max-width: 540px){
        padding: 3rem;
        width: 90%;
        margin: 3rem auto 0;
    }
`;
const Lista = styled.ul`
    margin: 0;
    padding: 0;
`;
const RowP = styled(Row)`
    padding-top: 6rem;
`;

const CategoriasEdicionDigital = () => {
    return (
        <Contenedor>
            <TituloSeccion texto="Categorías" color={false} tamano={'7rem'} />
            <RowP>
                <Col sm={12} lg={5}>
                    <Lista>
                        <CategoriaIndividual categoria={'Mejor fashion film nacional'} />
                        <CategoriaIndividual categoria={'Mejor fashion film internacional'} />
                        <CategoriaIndividual categoria={'Mejor fashion film emergente'} />
                        <CategoriaIndividual categoria={'Mejor videoclip'} />
                        <CategoriaIndividual categoria={'Mejor contenido digital corto'} />
                    </Lista>
                </Col>
                <Col sm={12} lg={4}>
                    <CategoriaIndividual categoria={'Mejor film experimental'} />
                    <CategoriaIndividual categoria={'Premio del público'} />
                    <CategoriaIndividual categoria={'Mejor idea'} />
                    <CategoriaIndividual categoria={'Mejor performance'} />
                    <CategoriaIndividual categoria={'Mejor cinematografía'} />                    
                </Col>
                <Col sm={12} lg={3}>
                    <CategoriaIndividual categoria={'Mejor dirección de arte'} />
                    <CategoriaIndividual categoria={'Mejor estilismo'} />
                    <CategoriaIndividual categoria={'Mejor Makeup & Hair'} />
                    <CategoriaIndividual categoria={'Mejor música original'} />
                </Col>
            </RowP>
        </Contenedor>
    );
}
 
export default CategoriasEdicionDigital;