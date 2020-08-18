import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import TituloSeccion from '../ui/TituloSeccion';
import EdicionAnterior from './EdicionAnterior';
import styled from '@emotion/styled';

import { i18n, withTranslation } from '../../i18n';

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

const EdicionesAnteriores = ({t}) => {
    return (
        <Contenedor id="ediciones-anteriores">
            <TituloSeccion texto={t('EdicionesAnteriores.Titulo')} tamano={'6rem'}/>
            <RowP>
                <Col sm={12} lg={4}>
                    <EdicionAnterior titulo={'BAIFFF 2015'} imagen={'/img/NOSOTROS/Nosotros_Ediciones_2015.jpg'} link={i18n.language === 'es' ? 'http://ediciones.baifff.tv/index2015.html' : 'http://ediciones.baifff.tv/indexENG2015.html'} />
                </Col>
                <Col sm={12} lg={4}>
                    <EdicionAnterior titulo={'BAIFFF 2016'} imagen={'/img/NOSOTROS/Nosotros_Ediciones_2016.jpg'} link={i18n.language === 'es' ? 'http://ediciones.baifff.tv/index2016.html' : 'http://ediciones.baifff.tv/indexENG2016.html'} />
                </Col>
                <Col sm={12} lg={4}>
                    <EdicionAnterior titulo={'BAIFFF 2017'} imagen={'/img/NOSOTROS/Nosotros_Ediciones_2017.jpg'} link={i18n.language === 'es' ? 'http://ediciones.baifff.tv/index2017.html' : 'http://ediciones.baifff.tv/indexENG2017.html'} />
                </Col>
            </RowP>
        </Contenedor>
    );
}
 
export default withTranslation('nosotros')(EdicionesAnteriores);