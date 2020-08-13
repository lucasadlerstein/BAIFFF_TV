import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import JuradoIndividual from './JuradoIndividual';
import TituloSeccion from '../ui/TituloSeccion';
import styled from '@emotion/styled';

const Contenedor = styled(Container)`
    padding-top: 8rem;
    padding-bottom: 5rem;
`;
const RowP = styled(Row)`
    padding-top: 6rem;
`;

const Jurados = () => {
    return ( 
        <Contenedor id="juradxs">
            <TituloSeccion texto="Juradxs" color={false} tamano={'7rem'} />
            <RowP>
                <Col sm={12} md={6} lg={3}>
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Marou Rivero'} rol={'Directora'} instagram={'marourivero'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={'Directora'} instagram={'sandraok'} />

                </Col>
                <Col sm={12} md={6} lg={3}>
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={'Directora'} instagram={'sandraok'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={'Directora'} instagram={'sandraok'} />

                </Col>
                <Col sm={12} md={6} lg={3}>
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={'Directora'} instagram={'sandraok'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={'Directora'} instagram={'sandraok'} />

                </Col>
                <Col sm={12} md={6} lg={3}>
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={'Directora'} instagram={'sandraok'} />
                    <JuradoIndividual foto={'/img/HOME/Home_1.jpg'} nombre={'Sandra'} rol={'Directora'} instagram={'sandraok'} />
                </Col>
            </RowP>
        </Contenedor>
     );
}
 
export default Jurados;