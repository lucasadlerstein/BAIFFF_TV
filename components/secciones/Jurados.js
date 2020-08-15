import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import JuradoIndividual from './JuradoIndividual';
import TituloSeccion from '../ui/TituloSeccion';
import styled from '@emotion/styled';
import {withTranslation} from '../../i18n';

const Contenedor = styled(Container)`
    padding-top: 8rem;
    padding-bottom: 5rem;
`;
const RowP = styled(Row)`
    padding-top: 6rem;
`;

const Jurados = ({t}) => {
    return ( 
        <Contenedor id="juradxs">
            <TituloSeccion texto={t('Juradxs.Titulo')} color={false} tamano={'7rem'} />
            <RowP>
                <Col sm={12} md={6} lg={3}>
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Marou Rivero'} rol={t('Juradxs.Roles.Directora')} instagram={'marourivero'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={t('Juradxs.Roles.Directora')} instagram={'sandraok'} />

                </Col>
                <Col sm={12} md={6} lg={3}>
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={t('Juradxs.Roles.Directora')} instagram={'sandraok'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={t('Juradxs.Roles.Directora')} instagram={'sandraok'} />

                </Col>
                <Col sm={12} md={6} lg={3}>
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={t('Juradxs.Roles.Directora')} instagram={'sandraok'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={t('Juradxs.Roles.Directora')} instagram={'sandraok'} />

                </Col>
                <Col sm={12} md={6} lg={3}>
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={t('Juradxs.Roles.Directora')} instagram={'sandraok'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={t('Juradxs.Roles.Directora')} instagram={'sandraok'} />
                </Col>
            </RowP>
        </Contenedor>
     );
}
 
export default withTranslation('edicion-digital')(Jurados);