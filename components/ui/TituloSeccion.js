import React from 'react';
import styled from '@emotion/styled';

const TituloSeccion = ({texto, tamano, tamanoSm, color}) => {
    
    const Titulo = styled.h3`
        font-family: 'MonumentExtended';
        text-transform: uppercase;
        font-size: ${tamanoSm ? tamanoSm : '3.5rem'};
        line-height:58px;
        color: ${color ? color : '#ff0000'};
        text-align:center;
        @media (min-width: 768px){
            font-size: ${tamano ? tamano : '4.8rem'};   
        }
    `;

    return ( 
       <Titulo>{texto}</Titulo>
    );
}
 
export default TituloSeccion;