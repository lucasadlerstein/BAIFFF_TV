import React from 'react';
import Layout from '../components/Layout';
import PortadaSeccion from '../components/secciones/PortadaSeccion';
import ImagenParallax from '../components/ImagenParallax';
import AgendaComponente from '../components/agenda/Agenda'; 
import ElTaller from '../components/ElTaller';

const Agenda = () => {
    return ( 
        <Layout>
            <PortadaSeccion foto={'/img/AGENDA/Agenda_Header.jpg'} titulo={'Agenda 2020'} />
            <AgendaComponente />
            <ElTaller titulo={'El taller'} contenido={""} imagen={'img/AGENDA/Agenda_1.jpg'} />
            <ImagenParallax imagen='/img/Agenda/Agenda_Divisor_1.jpg' nombre="Agenda BAIFFF 2020" />
        </Layout>
    );
}
 
export default Agenda;