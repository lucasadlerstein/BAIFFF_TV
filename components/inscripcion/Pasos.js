import React from 'react';
import Paso from './Paso';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    margin: 0 auto 3rem auto;
    text-align: center;
`;

const Pasos = ({actual}) => {
    return ( 
        <Contenedor>
            <Paso nombre="Inscripción" orden={1} actual={actual} />
            <Paso nombre="Director" orden={2} actual={actual} />
            <Paso nombre="Film" orden={3} actual={actual} />
        </Contenedor>
     );
}
 
export default Pasos;