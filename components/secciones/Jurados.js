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
                <JuradoIndividual foto={'/img/MASINFO/JURADOS/Marou.jpg'} nombre={'MAROU RIVERO'} rol={t('Juradxs.Roles.Directora')} instagram={'marourivero'} />
                <JuradoIndividual foto={'/img/MASINFO/JURADOS/NachoLopez.jpeg'} nombre={'NACHO LOPEZ FAGALDE'} rol={t('Juradxs.Roles.Directora')} instagram={'nacholopezfagalde'} />
                <JuradoIndividual foto={'/img/MASINFO/JURADOS/Luca.jpg'} nombre={'LUCA FINOTTI'} rol={t('Juradxs.Roles.Directora')} instagram={'lucafinotti'} />
                <JuradoIndividual foto={'/img/MASINFO/JURADOS/MeliGarat.jpg'} nombre={'MELI GARAT'} rol={t('Juradxs.Roles.Directora')} instagram={'meligarat'} />
                {/* <JuradoIndividual foto={'/img/MASINFO/JURADOS/MarcelaSoberano.jpg'} nombre={'MARCELA SOBERANO'} rol={t('Juradxs.Roles.Directora')} instagram={'locaxmoda'} /> */}
                <JuradoIndividual foto={'/img/MASINFO/JURADOS/SolAbadi.jpg'} nombre={'SOL ABADI'} rol={t('Juradxs.Roles.Directora')} instagram={'solabadi'} />
                <JuradoIndividual foto={'/img/MASINFO/JURADOS/Mathew.jpg'} nombre={'MATHEW LIBATIQUE'} rol={t('Juradxs.Roles.Directora')} instagram={'libatique'} />
                <JuradoIndividual foto={'/img/MASINFO/JURADOS/Diane.jpg'} nombre={'DIANE PERNET'} rol={t('Juradxs.Roles.Directora')} instagram={'asvof'} />
                <JuradoIndividual foto={'/img/MASINFO/JURADOS/Shelley.jpg'} nombre={'SHELLEY JONES'} rol={t('Juradxs.Roles.Directora')} instagram={'shelleybones'} />

                {/* <JuradoIndividual foto={'/img/MASINFO/JURADOS/Hernan.jpg'} nombre={'HERNAN CORERA'} rol={t('Juradxs.Roles.Directora')} instagram={'hernancorera'} /> */}
                {/* <JuradoIndividual foto={'/img/MASINFO/JURADOS/Erik.jpg'} nombre={'ERIK MADIGAN HECK'} rol={t('Juradxs.Roles.Directora')} instagram={'erikmadiganheck'} /> */}
            </RowP>
        </Contenedor>
     );
}
 
export default withTranslation('edicion-digital')(Jurados);