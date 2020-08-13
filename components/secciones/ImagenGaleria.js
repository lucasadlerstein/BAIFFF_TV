import React from 'react';
import styled from '@emotion/styled';

const ImagenGaleria = ({imagen}) => {
    const Imagen = styled.div`
        height: 100%;
        min-height: 27rem;
        background-image: url(${imagen});
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    `;

    return (
        <Imagen>
        </Imagen>
    );
}
 
export default ImagenGaleria;