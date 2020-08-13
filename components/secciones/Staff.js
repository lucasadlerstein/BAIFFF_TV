import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import TituloSeccion from '../ui/TituloSeccion';
import StaffIndividual from './StaffIndividual';

const Fondo = styled.div`
    padding: 10rem 0 5rem;
    background-image: url('img/NOSOTROS/Nosotros_Staff.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    min-height: 50rem;
`;

const Staff = () => {
    return (
        <Fondo>
            <Container>
                    <TituloSeccion texto={'Staff'} color={'#ffffff'} tamano={'7rem'}/>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <StaffIndividual nombre={'Willmer Williams'} rol={'Director'} />
                        <StaffIndividual nombre={'Valentina Ferlise'} rol={'Asistente de producción'} />
                        <StaffIndividual nombre={'Remo Albornoz'} rol={'Contenido para RRSS'} mb0={true} />
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <StaffIndividual nombre={'Damián Moon'} rol={'Productor Ejecutivo'} />
                        <StaffIndividual nombre={'Golden Brown'} rol={'Agencia Digital'} />
                        <StaffIndividual nombre={'Wañter Williams'} rol={'Contenido para RRSS'} mb0={true} />
                    </Col>
                    <Col sm={12} md={12} lg={4}>
                        <StaffIndividual nombre={'Omar Lamuño'} rol={'Gerente de producción y creatividad'} />
                        <StaffIndividual nombre={'Adrián Tosta'} rol={'Diseño Logo'} />
                         <StaffIndividual nombre={'Infinidad'} rol={'Agencia de diseño y desarrollo web'} mb0={true} />
                    </Col>
                </Row>
            </Container>
        </Fondo>
    );
}
 
export default Staff;