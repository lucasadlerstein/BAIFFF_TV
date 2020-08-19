import React, {useState, useEffect} from 'react';
import clienteAxios from '../../config/axios';
import {Container} from 'reactstrap';
import AgendaContenido from './AgendaContenido';
import styled from '@emotion/styled';
import CircularProgress from '@material-ui/core/CircularProgress';

const Contenedor = styled(Container)`
    
    margin-top: 2rem;
    margin-bottom: 8rem;
    @media (min-width: 991px){
        margin-top: 3rem;
    }

`;
const BotonInvisible = styled.button`
    margin: 0;
    background-color: transparent;
    width: 100%;
    -webkit-appearance:none;
    text-align: left;
    border: none;
    &:hover{
        
    }
    &:focus{
        outline: none;
    }
`;
const Cabecera = styled.div`

    @media (min-width: 991px){
        margin: 8rem 0 3rem;
    }

    button {
        color: #ff0000;
        border: 0;
        width: 100%;
        margin: 2rem 0;
        padding: 1rem 0;
        text-align: center;
        font-family: 'MonumentExtended';
        font-size: 2rem;
        background-color: transparent;
        -webkit-appearance: none;
        transition: all .3s ease;
        width: 33.33%;

        @media (min-width: 768px){
            font-size: 3.5rem;
            border-bottom: 5px solid #ff0000;
        }

        &:hover {
            color:  white;
            background-color: #ff0000;
        }
        &:focus{
            outline:none;
        }
    }
    .actual {
        color:  white;
        background-color: #ff0000;
    }

`;

const AgendaComponente = () => {
    
    const [dia, setDia] = useState(1);
    const [prog1, setProg1] = useState([]);
    const [prog2, setProg2] = useState([]);
    const [prog3, setProg3] = useState([]);
    const [abierto, setAbierto] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const traerProgramacion = async () => {
            const programacionDB = await clienteAxios.get('/api/programacion');
            let prograUno = (programacionDB.data).filter(programa => programa.dia === 1);
            let prograDos = (programacionDB.data).filter(programa => programa.dia === 2);
            let prograTres = (programacionDB.data).filter(programa => programa.dia === 3);
            prograUno = prograUno.sort(function(a, b){
                if(a.hora < b.hora) return -1;
                if(a.hora > b.hora) return 1;
            });
            prograDos = prograDos.sort(function(a, b){
                if(a.hora < b.hora) return -1;
                if(a.hora > b.hora) return 1;
            });
            prograTres = prograTres.sort(function(a, b){
                if(a.hora < b.hora) return -1;
                if(a.hora > b.hora) return 1;
            });
            setProg1(prograUno);
            setProg2(prograDos);
            setProg3(prograTres);
            setCargando(false);
        }
        traerProgramacion();

        // eslint-disable-next-line
    }, []);

    const fechas = [
        { dia : 1, fecha: '24/09' },
        { dia : 2, fecha: '25/09' },
        { dia : 3, fecha: '26/09' }
    ]
    const cambiarFecha = (numero) => {
        setDia(numero);
    }

    const cambiarVisibilidad = e => {
        if(abierto === e) {
            setAbierto('');
        } else {
            setAbierto(e);
        }
    }

    return (
        <Contenedor>
            <Cabecera>
                <button
                    className={(dia === 1) ? 'actual' : null}
                    onClick={() => cambiarFecha(fechas[0].dia)}
                >{fechas[0].fecha}</button>
                
                <button
                    className={(dia === 2) ? 'actual' : null}
                    onClick={() => cambiarFecha(fechas[1].dia)}
                >{fechas[1].fecha}</button>
                
                <button
                    className={(dia === 3) ? 'actual' : null}
                    onClick={() => cambiarFecha(fechas[2].dia)}
                >{fechas[2].fecha}</button>
            </Cabecera>

            {
                (cargando === true) ? (
                    <div style={{textAlign: 'center'}}>
                        <CircularProgress color="black" />
                    </div>
                ) : (
                    (dia === 1) ? (
                        prog1.map((evento) => (
                                <BotonInvisible
                                    onClick={() => cambiarVisibilidad(evento.imagen)}
                                    key={evento.id}
                                >
                                    <AgendaContenido info={evento} abierto={abierto} />
                                </BotonInvisible>
                        ))
                    ) : (
                        (dia === 2) ? (
                            prog2.map((evento) => (
                                <BotonInvisible
                                    onClick={() => cambiarVisibilidad(evento.imagen)}
                                    key={evento.id}

                                >
                                    <AgendaContenido info={evento} abierto={abierto} />
                                </BotonInvisible>
                            ))
                        ) : (
                            (dia === 3) ? (
                                prog3.map((evento) => (
                                    <BotonInvisible
                                        onClick={() => cambiarVisibilidad(evento.imagen)}
                                        key={evento.id}
                                    >
                                        <AgendaContenido info={evento} abierto={abierto} />
                                    </BotonInvisible>
                                ))
                            ) : null
                        )
                    )
                )
            }
        </Contenedor>
    );
}
 
export default AgendaComponente;