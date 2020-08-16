import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import {Row, Col} from 'reactstrap';
import BotonButton from './ui/BotonButton';
import styled from '@emotion/styled';
import IconButton from '@material-ui/core/IconButton';
import clienteAxios from '../config/axios';

import {withTranslation} from '../i18n';

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
    text-align: right;
    
`;
const IconButtonP = styled(IconButton)`
    img {
        width: 2rem;
    }
    .MuiIconButton-root {
        &:focus {
            outline: none;
        }
    }
    @media (max-width: 576px){
        margin: .5rem 2rem 0 auto;
    }
`;
const ColumnaIzquierda = styled(Col)`
    padding: 4rem calc(2rem + 15px);
    @media (max-width: 576px){
        padding-top: 0rem;
    }
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

const PopUpLive = ({t}) => {
    
    const [popUp, setPopUp] = useState(false);
    const [error, setError] = useState(null);
    const [ancho, setAncho] = useState(null);
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

        let anchoNow = window.innerWidth;
        if (anchoNow > 576){
            setAncho(true);
        } else {
            setAncho(false);
        }
        // eslint-disable-next-line
    }, []);

    const handleChange = e => {
        setSuscriptor({
            ...suscriptor,
            [e.target.name] : e.target.value
        })
    }

    const enviarFormularioSuscripcion = async (e) => {
        e.preventDefault();
        if( suscriptor.nombre.trim() === '' ||
            suscriptor.apellido.trim() === '' ||
            suscriptor.email.trim() === '') {
                setError(t('Live.PopUp.Error'));
        }
        setTimeout(() => {
            setError(null);
        }, 3000);

        // BDD
        try {
            const nuevoUsuario = await clienteAxios.post('/api/asistentes', suscriptor);
            window.localStorage.setItem('suscriptor', suscriptor.nombre);

        } catch (error) {
            window.localStorage.setItem('suscriptor', 'error');
        }

        // LocalStorage para futuras entradas
        setPopUp(false);
    }

    const cerrarPopUp = () => {
        setPopUp(false);
        window.localStorage.setItem('suscriptor', Date.now());
    }

    return (
        <DialogP open={popUp} aria-labelledby="form-dialog-title">
            <Row>
                {
                    (ancho === true) ? null : (
                        <IconButtonP onClick={() => cerrarPopUp()}>
                            <img src="/img/cruz.png" alt="Cerrar newsletter Live BAIFFF" />
                        </IconButtonP>
                    )
                }
                <ColumnaIzquierda sm={7}>
                    <Titulo>{t('Live.PopUp.Titulo')}</Titulo>
                    <form
                        onSubmit={(e) => enviarFormularioSuscripcion(e)}
                    >
                        <TextFieldP
                            autoFocus
                            margin="dense"
                            id="v_nombre"
                            label={t('Live.PopUp.Nombre')}
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
                            label={t('Live.PopUp.Apellido')}
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
                            label={t('Live.PopUp.Email')}
                            type="email"
                            fullWidth
                            value={suscriptor.email}
                            onChange={(e) => handleChange(e)}
                        />
                        <AcaBoton>
                            <BotonButton type="submit" texto={t('Live.PopUp.Boton')} color={true} />
                            {error ? <Perror>{error}</Perror> : null}
                        </AcaBoton>
                    </form>
                </ColumnaIzquierda>
                <ColumnaDerecha sm={5}>
                    {
                        (ancho === true) ? (
                            <IconButtonP onClick={() => cerrarPopUp()}>
                                <img src="/img/cruz_blanca.png" alt="Cerrar newsletter Live BAIFFF" />
                            </IconButtonP>
                        ) : null
                    }
                </ColumnaDerecha>
            </Row>
      </DialogP>
    );
}
 
export default withTranslation('live')(PopUpLive);