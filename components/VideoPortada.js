import React from 'react';
import styled from '@emotion/styled';

const ContenedorVideo = styled.div`
    position: relative;
    z-index: 50;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
`;
const Logo = styled.img`
    position: absolute;
    bottom: 45%;
    left: 42%;
    width: 15%;
    z-index:99;
`;

const VideoPortada = () => {
    return ( 
        <ContenedorVideo>
            <video
                loop
                style={{
                    width: '100%',
                    height: '100%',
                }}
                src="img/PORTADA.mp4" autoPlay />
            <Logo src="img/logo.svg" />
        </ ContenedorVideo>
    );
}
 
export default VideoPortada;