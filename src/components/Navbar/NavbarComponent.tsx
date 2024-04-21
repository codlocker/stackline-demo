import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { images } from "../../constants";
import './navbar.scss'

const NavbarComponent = () => {
    return (
        <>
            <Navbar>
                <Navbar.Brand href="#">
                    <img src={images.stackline_logo} width="50" height="50" alt="Stackline Logo"/>
                </Navbar.Brand>
            </Navbar>
        </>
    );
};

export default NavbarComponent;

