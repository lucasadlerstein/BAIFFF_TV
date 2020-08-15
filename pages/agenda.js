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
            <ElTaller titulo={t('Agenda.ElTaller.Titulo')} contenido={t('Agenda.ElTaller.Texto')} imagen={'img/AGENDA/Agenda_1.jpg'} />
            <ImagenParallax imagen='/img/AGENDA/Agenda_Divisor_1.jpg' nombre={t('Agenda.Titulo')} />
        </Layout>
    );
}

Agenda.getInitialProps = async () => ({
    namespacesRequired: ['agenda'],
});
 
export default withTranslation('agenda')(Agenda);