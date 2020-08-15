import React from 'react';
import Layout from '../components/Layout';
import PortadaSeccion from '../components/secciones/PortadaSeccion';
import ImagenParallax from '../components/ImagenParallax';
import EsteAno from '../components/EsteAno';
import CategoriasEdicionDigital from '../components/secciones/CategoriasEdicionDigital';
import Jurados from '../components/secciones/Jurados';

import {withTranslation} from '../i18n';

const EdicionDigital = ({t}) => {
    return (
        <Layout>
            <PortadaSeccion foto={'/img/MASINFO/MasInfo_Header.jpg'} titulo={t('Edicion.Titulo')} />
            <EsteAno />
            <ImagenParallax imagen='/img/MASINFO/MasInfo_Divisor_1.jpg' nombre={t('Edicion.Titulo')} />
            <CategoriasEdicionDigital />
            <ImagenParallax  imagen='/img/MASINFO/MasInfo_Divisor_2.jpg' nombre={t('Edicion.Titulo')} />
            <Jurados />
        </Layout>
    );
}

EdicionDigital.getInitialProps = async () => ({
    namespacesRequired: ['edicion-digital'],
});
 
export default withTranslation('edicion-digital')(EdicionDigital);