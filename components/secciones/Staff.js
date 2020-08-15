import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import TituloSeccion from '../ui/TituloSeccion';
import StaffIndividual from './StaffIndividual';
import { withTranslation } from '../../i18n';

const Fondo = styled.div`
    padding: 10rem 0 5rem;
    background-image: url('img/NOSOTROS/Nosotros_Staff.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    min-height: 50rem;
`;

const Staff = ({t}) => {
    return (
        <Fondo>
            <Container>
                    <TituloSeccion texto={'Staff'} color={'#ffffff'} tamano={'7rem'}/>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <StaffIndividual nombre={'Willmer Williams'} rol={t('Staff.Director')} />
                        <StaffIndividual nombre={'Valentina Ferlise'} rol={t('Staff.AsistenteProd')} />
                        <StaffIndividual nombre={'Remo Albornoz'} rol={t('Staff.ContenidoRRSS')} mb0={true} />
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <StaffIndividual nombre={'Damián Moon'} rol={t('Staff.Productor')} />
                        <StaffIndividual nombre={'Golden Brown'} rol={t('Staff.Agencia')} />
                        <StaffIndividual nombre={'Walter Williams'} rol={t('Staff.ContenidoRRSS')} mb0={true} />
                    </Col>
                    <Col sm={12} md={12} lg={4}>
                        <StaffIndividual nombre={'Omar Lamuño'} rol={t('Staff.GerenteProd')} />
                        <StaffIndividual nombre={'Adrián Tosta'} rol={t('Staff.Logo')} />
                         <StaffIndividual nombre={'Infinidad'} rol={t('Staff.DesarrolloWeb')} mb0={true} />
                    </Col>
                </Row>
            </Container>
        </Fondo>
    );
}
 
export default withTranslation('nosotros')(Staff);