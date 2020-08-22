import React, {useState} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
  } from 'reactstrap';
import styles from '../styles/Navegacion.module.css'

import { i18n, withTranslation } from '../i18n';

const NavBarP = styled(Navbar)`
    padding: 0;
`;
const NavbarBrandP = styled(NavbarBrand)`
    padding: 0;
    @media (max-width: 768px){
        margin-right: 0;
    }
`;
const DropdownMenuP = styled(DropdownMenu)`
    z-index: 999;
    background-color: black;
    margin: 0 auto;
    left: 0;
    right: 0;
    button, a {
        font-size: 1.2rem;
        padding: 2rem 1rem;
        color: #D3D3D3;
        transition: all .3s ease;
    }
    a:hover, button:hover{
        background-color:white;
        color: black;
        text-decoration: none;
    }
    @media (min-width: 991px){
        margin-top: 1rem;
    }
`;
const NavbarTogglerP = styled(NavbarToggler)`
    border-color: transparent;
    &:focus{
        outline: none;
    }

    .navbar-toggler-icon{
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
`;

const Navegacion = ({t}) => {
    const [isOpenHoverA, setIsOpenHover] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const mouseNav = (estado) => { setIsOpenHover(estado); }

    return (
        <>
            <div className={styles.bgblack} id="navegacionCompleta">
                <Container>
                    <NavBarP color="black" dark expand="lg">
                    <NavbarTogglerP onClick={toggle} />
                    <NavbarBrandP href="/">
                        <img src="/img/logo.svg" alt="Logo BAIFFF" className={styles.logo} />
                    </NavbarBrandP>
                    <button
                        className={`${styles.btnidioma} noDesktop991`}
                        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                    >{i18n.language === 'en' ? 'ES' : 'EN'}</button>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link href="/">
                                    <a className={styles.boton}>{t('Nav.Inicio')}</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/nosotrxs">
                                    <a className={styles.boton}>{t('Nav.Nosotros')}</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/agenda">
                                    <a className={styles.boton}>{t('Nav.Agenda')}</a>
                                </Link>
                            </NavItem>
                            <UncontrolledDropdown isOpen={isOpenHoverA} onMouseEnter={() => mouseNav(true)} onMouseLeave={() => mouseNav(false)} nav inNavbar id="edicionesNav">
                                <DropdownToggle nav >
                                    <a disabled className={`${styles.boton} ${styles.botonediciones}`}>{t('Nav.Ediciones')}</a>
                                </DropdownToggle>
                                <DropdownMenuP>
                                    <DropdownItem target="_blank" href={(i18n.language === 'es') ? "http://ediciones.baifff.tv/index2015.html" : "http://ediciones.baifff.tv/indexENG2015.html"} className={`${styles.boton}`}>
                                    {t('Nav.Edicion15')}
                                    </DropdownItem>
                                    <DropdownItem target="_blank" href={(i18n.language === 'es') ? "http://ediciones.baifff.tv/index2016.html" : "http://ediciones.baifff.tv/indexENG2016.html"} className={`${styles.boton}`}>
                                    {t('Nav.Edicion16')}
                                    </DropdownItem>
                                    <DropdownItem target="_blank" href={(i18n.language === 'es') ? "http://ediciones.baifff.tv/index2017.html" : "http://ediciones.baifff.tv/indexENG2017.html"} className={`${styles.boton}`}>
                                    {t('Nav.Edicion17')}
                                    </DropdownItem>
                                </DropdownMenuP>
                            </UncontrolledDropdown>
                        </Nav>
                            {/* <Link href="/live">
                                <a className={styles.botonlive}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63">
                                    <title>Live Icon BAIFFF</title><g id="Layer_2" data-name="Layer 2"><g id="BACKGROUND"><circle className="cls-1" cx="31.5" cy="31.5" r="25"/><path className="cls-1" d="M31.5,63A31.5,31.5,0,1,1,63,31.5,31.53,31.53,0,0,1,31.5,63Zm0-60A28.5,28.5,0,1,0,60,31.5,28.54,28.54,0,0,0,31.5,3Z"/></g></g></svg>
                                    Live
                                </a>
                            </Link> */}
                            
                        </Collapse>
                        <button
                            className={`${styles.btnidioma} justDesktop`}
                            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                        >{i18n.language === 'en' ? 'ES' : 'EN'}</button>
                    </NavBarP>
                </Container>
            </div>
        </>
    );

}

Navegacion.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});
 
export default withTranslation('common')(Navegacion);