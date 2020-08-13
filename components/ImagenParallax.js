import React, {useEffect, useState} from 'react';
import { Parallax } from 'react-parallax';
import styled from '@emotion/styled';

const DivP = styled.div`
    height: 15rem;
    @media (min-width: 768px){
        height: 40rem;
    }
`;

const ImagenParallax = ({imagen, nombre}) => {

    const [ancho, setAncho] = useState(null);

    useEffect(() => {
        let width = window.innerWidth;
        if(width > 540) {
            setAncho(true);
        } else {
            setAncho(false);
        }
        console.log(width, ' ', ancho);
        // eslint-disable-next-line
    }, []);

    return ( 
        <div>
            <Parallax
                bgImage={imagen}
                bgImageAlt={nombre}
                strength={ancho ? 200 : 80 }
            >   
                <DivP />
            </Parallax>
 
        </div>
    );
}
 
export default ImagenParallax;