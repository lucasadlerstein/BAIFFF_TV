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
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
    Row,
    Col
  } from 'reactstrap';
import styles from '../styles/Navegacion.module.css'

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

const Navegacion = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

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
                        className={`${styles.btnidioma} noDesktop`}
                    >EN</button>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link href="/">
                                    <a className={styles.boton}>Home</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/nosotrxs">
                                    <a className={styles.boton}>Nosotrxs</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/agenda">
                                    <a className={styles.boton}>Agenda</a>
                                </Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar id="edicionesNav">
                                <DropdownToggle nav >
                                    <a className={`${styles.boton} ${styles.botonediciones}`}>Ediciones</a>
                                </DropdownToggle>
                                <DropdownMenuP>
                                    <DropdownItem href="/ediciones/2017" className={`${styles.boton}`}>
                                    Edición 2017
                                    </DropdownItem>
                                    <DropdownItem href="/ediciones/2016" className={`${styles.boton}`}>
                                    Edición 2016
                                    </DropdownItem>
                                    <DropdownItem href="/ediciones/2015" className={`${styles.boton}`}>
                                    Edición 2015
                                    </DropdownItem>
                                </DropdownMenuP>
                            </UncontrolledDropdown>
                        </Nav>
                            <Link href="/live">
                                <a className={styles.botonlive}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63">
                                    <title>Live Icon BAIFFF</title><g id="Layer_2" data-name="Layer 2"><g id="BACKGROUND"><circle className="cls-1" cx="31.5" cy="31.5" r="25"/><path className="cls-1" d="M31.5,63A31.5,31.5,0,1,1,63,31.5,31.53,31.53,0,0,1,31.5,63Zm0-60A28.5,28.5,0,1,0,60,31.5,28.54,28.54,0,0,0,31.5,3Z"/></g></g></svg>
                                    Live
                                </a>
                            </Link>
                            
                        </Collapse>
                        <button
                            className={`${styles.btnidioma} noMobile`}
                        >EN</button>
                    </NavBarP>
                </Container>
            </div>
        </>
    );
}
 
export default Navegacion;