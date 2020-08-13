import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import {Row, Col} from 'reactstrap';
import Boton from './ui/Boton';
import BotonButton from './ui/BotonButton';
import styled from '@emotion/styled';

const DialogP = styled(Dialog)`
    .MuiDialog-paper {
        overflow: hidden;
    }
    .MuiDialog-paperWidthSm {
        max-width: 80rem;
    }
`;
const Titulo = styled.h2`
    text-transform: uppercase;
    color: #ff0000;
`;
const ColumnaDerecha = styled(Col)`
    background-image: url('/img/AGENDA/Agenda_1.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100%;
`;
const ColumnaIzquierda = styled(Col)`
    padding: 4rem calc(2rem + 15px);
`;
const TextFieldP = styled(TextField)`
    .MuiFormLabel-root, .MuiInputBase-input {
        font-family: 'Raleway';
        color: #ff0000!important;
        /* width: 100%; */
        font-size: 1.8rem;
        line-height: 1;
        
        &::placeholder {
            color: #ff0000;
            opacity: 1;
        }
    }
    .MuiInput-underline:before {
        border-bottom: 1px solid #ff0000;
    }
`;
const AcaBoton = styled.div`
    margin-top: 3rem;
    text-align: right;
    width: 100%;
`;
const Perror = styled.p`
    margin: .5rem 0 0 0;
    font-size: 1.2rem;
    text-align: right;
    color: #ff0000;
`;

const PopUpLive = () => {
    
    const [popUp, setPopUp] = useState(false);
    const [error, setError] = useState(null);
    const [suscriptor, setSuscriptor] = useState({
        nombre: '',
        apellido: '',
        email: ''
    });

    useEffect(() => {
        setTimeout(() => {
            const suscriptorExiste = window.localStorage.getItem('suscriptor');
            if (!suscriptorExiste) {
                setPopUp(true);
            }
        }, 15000);
        // eslint-disable-next-line
    }, []);

    const handleChange = e => {
        setSuscriptor({
            ...suscriptor,
            [e.target.name] : e.target.value
        })
    }

    const enviarFormularioSuscripcion = (e) => {
        e.preventDefault();
        if( suscriptor.nombre.trim() === '' ||
            suscriptor.apellido.trim() === '' ||
            suscriptor.email.trim() === '') {
                setError('Todos los campos son obligatorios');
        }
        setTimeout(() => {
            setError(null);
        }, 3000);

        // BDD
        // try {
            
        // } catch (error) {
        //     console.log(error);
        // }

        // LocalStorage para futuras entradas
        window.localStorage.setItem('suscriptor', true);
        setPopUp(false);
    }

    return (
        <DialogP open={popUp} aria-labelledby="form-dialog-title">
            <Row>
                <ColumnaIzquierda sm={7}>
                    <Titulo>Suscribite a<br />nuestro newsletter!</Titulo>
                    <form
                        onSubmit={(e) => enviarFormularioSuscripcion(e)}
                    >
                        <TextFieldP
                            autoFocus
                            margin="dense"
                            id="v_nombre"
                            label="Nombre"
                            type="text"
                            name="nombre"
                            required
                            fullWidth
                            color="#ff0000"
                            onChange={(e) => handleChange(e)}
                            value={suscriptor.nombre}
                        />
                        <TextFieldP
                            margin="dense"
                            id="v_apellido"
                            label="Apellido"
                            type="text"
                            name="apellido"
                            required
                            fullWidth
                            value={suscriptor.apellido}
                            onChange={(e) => handleChange(e)}
                        />
                        <TextFieldP
                            required
                            margin="dense"
                            name="email"
                            id="v_email"
                            label="Email"
                            type="email"
                            fullWidth
                            value={suscriptor.email}
                            onChange={(e) => handleChange(e)}
                        />
                        <AcaBoton>
                            <BotonButton type="submit" texto="Suscribirme" color={true} />
                            {error ? <Perror>{error}</Perror> : null}
                        </AcaBoton>
                    </form>
                </ColumnaIzquierda>
                <ColumnaDerecha sm={5}>
                </ColumnaDerecha>
            </Row>
      </DialogP>
    );
}
 
export default PopUpLive;