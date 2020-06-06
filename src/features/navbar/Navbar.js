import React from "react";
import './Navbar.scss';
import logo from '../../pokeball.png';

function Navbar() {
    return (
        <div className="Navbar">
            <img alt="logo" src={logo} width="48px"/>
            <span className="title">PokéMessenger</span>
        </div>
    );
}

export default Navbar;