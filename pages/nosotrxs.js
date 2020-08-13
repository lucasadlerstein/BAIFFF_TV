import React from 'react';
import Layout from '../components/Layout';
import PortadaSeccion from '../components/secciones/PortadaSeccion';
import NosotrosParteUno from '../components/secciones/NosotrosParteUno';
import GaleriaNosotros from '../components/secciones/GaleriaNosotros';
import Staff from '../components/secciones/Staff';
import EdicionesAnteriores from '../components/secciones/EdicionesAnteriores';

const Nosotrxs = () => {
    return ( 
        <Layout>
            <PortadaSeccion foto={'/img/NOSOTROS/Nosotros_Header.jpg'} titulo={'Nosotrxs'} />
            <NosotrosParteUno />
            <GaleriaNosotros />
            <Staff />
            <EdicionesAnteriores />
        </Layout>
    );
}
 
export default Nosotrxs;