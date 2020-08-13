import React from 'react';
import Layout from '../components/Layout';
import VideoPortada from '../components/VideoPortada';
import ImagenParallax from '../components/ImagenParallax';
import SeccionNosotros from '../components/SeccionNosotros';
import ElFestival from '../components/ElFestival';
import Sponsors from '../components/Sponsors';
import Inscripcion from '../components/Inscripcion';
import CuentaRegresiva from '../components/CuentaRegresiva';

const Index = () => {
    return ( 
        <Layout>
            <VideoPortada />
            <ImagenParallax imagen='/img/HOME/Home_Divisor_1.jpg' nombre="Separador uno" />
            <SeccionNosotros />
            <ImagenParallax imagen='/img/HOME/Home_Divisor_2.gif' nombre="Separador dos" />
            <ElFestival />
            <ImagenParallax imagen='/img/HOME/Home_Divisor_3.jpg' nombre="Separador tres" />
            <Sponsors />
            <CuentaRegresiva />
            <Inscripcion />
            <ImagenParallax imagen='/img/HOME/Home_Divisor_4.jpg' nombre="Separador tres" />
        </Layout>
    );
}
 
export default Index;