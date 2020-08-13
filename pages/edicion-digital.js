import React from 'react';
import Layout from '../components/Layout';
import PortadaSeccion from '../components/secciones/PortadaSeccion';
import ImagenParallax from '../components/ImagenParallax';
import EsteAno from '../components/EsteAno';
import CategoriasEdicionDigital from '../components/secciones/CategoriasEdicionDigital';
import Jurados from '../components/secciones/Jurados';


const EdicionDigital = () => {
    return (
        <Layout>
            <PortadaSeccion foto={'/img/MASINFO/MasInfo_Header.jpg'} titulo={'Baifff 2020 Digital'} />
            <EsteAno />
            <ImagenParallax imagen='/img/MASINFO/MasInfo_Divisor_1.jpg' nombre="Agenda BAIFFF 2020" />
            <CategoriasEdicionDigital />
            <ImagenParallax  imagen='/img/MASINFO/MasInfo_Divisor_2.jpg' nombre="Agenda BAIFFF 2020" />
            <Jurados />
        </Layout>
    );
}
 
export default EdicionDigital;