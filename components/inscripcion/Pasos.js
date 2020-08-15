import React from 'react';
import Paso from './Paso';
import styled from '@emotion/styled';

import { withTranslation }  from '../../i18n';

const Contenedor = styled.div`
    margin: 0 auto 3rem auto;
    text-align: center;
`;

const Pasos = ({actual, t}) => {
    return ( 
        <Contenedor>
            <Paso nombre={t('Inscripcion.Etapas.Uno')} orden={1} actual={actual} />
            <Paso nombre={t('Inscripcion.Etapas.Dos')} orden={2} actual={actual} />
            <Paso nombre={t('Inscripcion.Etapas.Tres')} orden={3} actual={actual} />
        </Contenedor>
     );
}
 
export default withTranslation('inscripcion')(Pasos);