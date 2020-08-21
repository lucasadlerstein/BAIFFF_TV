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
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'MAROU RIVERO'} rol={t('Juradxs.Roles.Directora')} instagram={'marourivero'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'MARCELA SOBERANO'} rol={t('Juradxs.Roles.Directora')} instagram={'locaxmoda'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'SHELLEY JONES'} rol={t('Juradxs.Roles.Directora')} instagram={'shelleybones'} />

                </Col>
                <Col sm={12} md={6} lg={3}>
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'NACHO LOPEZ FAGALDE'} rol={t('Juradxs.Roles.Directora')} instagram={'nacholopezfagalde'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'SOL ABADI'} rol={t('Juradxs.Roles.Directora')} instagram={'solabadi'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'HERNAN CORERA'} rol={t('Juradxs.Roles.Directora')} instagram={'hernancorera'} />

                </Col>
                <Col sm={12} md={6} lg={3}>
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'LUCA FINOTTI'} rol={t('Juradxs.Roles.Directora')} instagram={'lucafinotti'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'MATHEW LIBATIQUE'} rol={t('Juradxs.Roles.Directora')} instagram={'libatique'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'ERIK MADIGAN HECK'} rol={t('Juradxs.Roles.Directora')} instagram={'erikmadiganheck'} />

                </Col>
                <Col sm={12} md={6} lg={3}>
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'MELI GARAT'} rol={t('Juradxs.Roles.Directora')} instagram={'meligarat'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'DIANE PERNET'} rol={t('Juradxs.Roles.Directora')} instagram={'asvof'} />
                </Col>
            </RowP>
        </Contenedor>
     );
}
 
export default withTranslation('edicion-digital')(Jurados);