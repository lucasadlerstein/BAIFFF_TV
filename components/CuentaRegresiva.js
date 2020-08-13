import React, {useEffect, useState} from 'react';
import Countdown from "react-countdown";
import { Parallax } from 'react-parallax';
import styled from '@emotion/styled';

const DivP = styled.div`
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
        console.log(width, ' ', ancho);
        // eslint-disable-next-line
    }, []);

    const Completionist = () => <span>BAIFFF</span>;
    
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return <Completionist />;
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
        <div>
            <Parallax
                bgImage={'/img/HOME/Home_Countdown.jpg'}
                bgImageAlt={'23, 24 y 25 de Septiembre de 2020'}
                strength={ancho ? 100 : 80 }
            >   
                <DivP>
                    <div style={cuentaRegresiva}>
                        <Countdown date={1600891199000} renderer={renderer}>
                            <Completionist />
                        </Countdown>    
                    </div>
                </DivP>
            </Parallax>
 
        </div>
    );
}
 
export default CuentaRegresiva;