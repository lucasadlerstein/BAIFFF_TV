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
const RowP = styled(Row)`
    margin-top: 3rem;
    @media (min-width: 991px){
        margin-top: 4rem;
    }
`;

const Staff = ({t}) => {
    return (
        <Fondo>
            <Container>
                <TituloSeccion texto={'Staff'} color={'#ffffff'} tamano={'7rem'}/>
                <RowP>
                    <StaffIndividual nombre={'Willmer Williams'} rol={t('Staff.Director')} />
                    <StaffIndividual nombre={'Damián Moon'} rol={t('Staff.Productor')} />
                    <StaffIndividual nombre={'Omar Lamuño'} rol={t('Staff.GerenteProd')} />
                    <StaffIndividual nombre={'Valentina Ferlise'} rol={t('Staff.AsistenteProd')} />
                    <StaffIndividual nombre={'Golden Brown'} rol={t('Staff.Agencia')} />
                    <StaffIndividual nombre={'Wann Teems'} rol={t('Staff.DisenoImagen')} />
                    <StaffIndividual nombre={'Adrián Tosta'} rol={t('Staff.Logo')} />
                    <StaffIndividual nombre={'Remo Albornoz'} rol={t('Staff.ContenidoRRSS')} />
                    <StaffIndividual nombre={'Walter Williams'} rol={t('Staff.ContenidoRRSS')} />
                    <Col sm={12} md={6} lg={4} className="justDesktop">
                    </Col>
                    <StaffIndividual nombre={'Infinidad'} rol={t('Staff.DesarrolloWeb')} />
                </RowP>
            </Container>
        </Fondo>
    );
}
 
export default withTranslation('nosotros')(Staff);