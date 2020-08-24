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
    z-index:99;
    left: 40%;
    right: 5%;
    width: 8rem;
    bottom: 35%;
    @media (min-width: 540px ){
        bottom: 45%;
        left: 42%;
        width: 15%;
    }
    @media (max-width: 768px){
        display: none!important;
    }
`;

const VideoPortada = () => {
    return ( 
        <ContenedorVideo>
            <video
                playsInline 
                loop
                autoPlay
                muted
                style={{
                    width: '100%',
                    height: '100%',
                }}
                src="img/PORTADA.mp4" />
            <Logo src="img/logo.svg" />
        </ ContenedorVideo>
    );
}
 
export default VideoPortada;