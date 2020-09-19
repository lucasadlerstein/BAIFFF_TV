import React, {useEffect, useState} from 'react';
import Countdown from "react-countdown";
import styled from '@emotion/styled';

const cuentaRegresiva = {
    background: 'transparent',
    padding: 20,
    fontFamily: 'MonumentExtended',
    color: 'white', 
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};

const CuentaRegresiva = () => {
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
        background-image: url('/img/HOME/Home_Countdown.jpg');
        background-repeat: no-repeat;
        background-attachment: ${(ancho === true) ? 'fixed' : 'unset'};
        background-position: center;
        position: relative;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        padding: 0;
        height: 10rem;
        @media (min-width: 768px){
            height: 35rem;
        }   
        span {
            font-size: 2rem!important;
            letter-spacing: 2rem!important;
            @media (min-width: 768px){
                font-size: 5rem!important;
                letter-spacing: 5rem!important;
            }
            @media (min-width: 991px){
                font-size: 6rem!important;
                letter-spacing: 8rem!important;
            }
        }
    `;

    const Completionist = () => <p>BAIFFF</p>;
    
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return null;
        } else {
          // Render a countdown
          return (
            <span>
              {days}{hours}{minutes}{seconds}
            </span>
          );
        }
    };

    return (
        <ParallaxFondo>
            <div style={cuentaRegresiva}>
                <Countdown date={1600354800000} renderer={renderer}>
                    <Completionist />
                </Countdown>    
            </div>
        </ParallaxFondo>
    );
}
 
export default CuentaRegresiva;