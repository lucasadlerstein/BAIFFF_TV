import React from 'react';
import styled from '@emotion/styled';
import {withTranslation} from '../../i18n';

const Parrafo = styled.p`
    font-family: 'MonumentExtended';
    text-align: center;
    margin: 0 auto;
    padding: 3rem 0 0 0;
    font-size: 2.5rem;
    text-transform: uppercase;
    @media (min-width: 768px){
        font-size: 4rem;
    }
`;

const AgendaEnProceso = ({t}) => {
    return (
        <Parrafo>{t('Agenda.EnProceso')}</Parrafo>
    );
}
 
export default withTranslation('agenda')(AgendaEnProceso);