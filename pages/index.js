import React from 'react';
import Layout from '../components/Layout';
import VideoPortada from '../components/VideoPortada';
import ImagenParallax from '../components/ImagenParallax';
import SeccionNosotros from '../components/SeccionNosotros';
import ElFestival from '../components/ElFestival';
import Sponsors from '../components/Sponsors';
// import Inscripcion from '../components/Inscripcion';
import CuentaRegresiva from '../components/CuentaRegresiva';

import { withTranslation } from '../i18n';

const Index = ({t}) => {
    return ( 
        <Layout>
            <VideoPortada />
            <ImagenParallax imagen='/img/HOME/Home_Divisor_1.jpg' nombre={t('Separadores.1')} />
            <SeccionNosotros />
            <ImagenParallax imagen='/img/HOME/Home_Divisor_2.gif' nombre={t('Separadores.2')} />
            <ElFestival />
            <ImagenParallax imagen='/img/HOME/Home_Divisor_3.jpg' nombre={t('Separadores.3')} />
            {/* <Sponsors /> */}
            {/* <CuentaRegresiva /> */}
            {/* <Inscripcion /> */}
            <ImagenParallax imagen='/img/HOME/Home_Divisor_4.jpg' nombre={t('Separadores.4')} />
        </Layout>
    );
}

Index.getInitialProps = async () => ({
    namespacesRequired: ['inicio'],
});
 
export default withTranslation('inicio')(Index);