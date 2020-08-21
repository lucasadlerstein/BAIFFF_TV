import React from 'react';
import Layout from '../components/Layout';
import PortadaSeccion from '../components/secciones/PortadaSeccion';
import ImagenParallax from '../components/ImagenParallax';
import AgendaComponente from '../components/agenda/Agenda'; 
import ElTaller from '../components/ElTaller';

import {withTranslation} from '../i18n';

const Agenda = ({t}) => {
    return ( 
        <Layout>
            <PortadaSeccion foto={'/img/AGENDA/Agenda_Header.jpg'} titulo={t('Agenda.Titulo')} />
            <AgendaComponente />
            <ElTaller />
            <ImagenParallax imagen='/img/AGENDA/Agenda_Divisor_1.jpg' nombre={t('Agenda.Titulo')} />
        </Layout>
    );
}

Agenda.getInitialProps = async () => ({
    namespacesRequired: ['agenda'],
});
 
export default withTranslation('agenda')(Agenda);