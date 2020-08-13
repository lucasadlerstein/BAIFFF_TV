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
            <ElTaller titulo={'El taller'} contenido={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis semper ipsum elementum, diam. Ultrices diam facilisi pretium semper semper nascetur et quis mi. Sem a tincidunt habitant pulvinar ut mattis. Porttitor commodo vel faucibus libero, enim quisque volutpat nisl, placerat. Lectus augue neque, risus felis morbi maecenas. Mattis tortor eu lorem diam. Sed egestas in malesuada pharetra. Ipsum ridiculus semper pharetra eros, nunc sit quis. Pharetra risus morbi auctor integer eget velit, in enim."} imagen={'img/AGENDA/Agenda_1.jpg'} />
            <ImagenParallax imagen='/img/AGENDA/Agenda_Divisor_1.jpg' nombre="Agenda BAIFFF 2020" />
        </Layout>
    );
}
 
export default Agenda;