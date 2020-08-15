import React from 'react';
import Layout from '../components/Layout';
import PortadaSeccion from '../components/secciones/PortadaSeccion';
import NosotrosParteUno from '../components/secciones/NosotrosParteUno';
import GaleriaNosotros from '../components/secciones/GaleriaNosotros';
import Staff from '../components/secciones/Staff';
import EdicionesAnteriores from '../components/secciones/EdicionesAnteriores';

import { withTranslation } from '../i18n';

const Nosotrxs = ({t}) => {
    return ( 
        <Layout>
            <PortadaSeccion foto={'/img/NOSOTROS/Nosotros_Header.jpg'} titulo={t('Nosotros.Titulo')} />
            <NosotrosParteUno />
            <GaleriaNosotros />
            <Staff />
            <EdicionesAnteriores />
        </Layout>
    );
}

Nosotrxs.getInitialProps = async () => ({
    namespacesRequired: ['nosotros'],
});
 
export default withTranslation('nosotros')(Nosotrxs);