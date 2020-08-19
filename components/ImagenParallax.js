import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';

const ImagenParallax = ({imagen, nombre}) => {
    const [ancho, setAncho] = useState(null);

    useEffect(() => {
        let width = window.innerWidth;
        if(width > 540) {
            setAncho(true);
        } else {
            setAncho(false);
        }
        // eslint-disable-next-line
    }, []);

    const ParallaxFondo = styled.div`
        background-image: ${`url(${imagen});`};
        background-repeat: no-repeat;
        background-attachment: ${(ancho === true) ? 'fixed' : 'unset'};
        background-position: center;
        position: relative;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        height: ${(ancho === true) ? '35rem' : '15rem'};
        padding: 0;
    `;

    return (
        <ParallaxFondo>
        </ParallaxFondo>
    );
}
 
export default ImagenParallax;