import React from "react";
import './Navbar.scss';
import logo from '../../pokeball.png';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="branding">
                <img alt="logo" src={logo} width="48px"/>
                <span className="title">PokéMessenger</span>
            </div>
            <div className="signature">
                made with &#10084; by <a href="http://www.github.com/begozcan" target="_blank">begozcan</a>
            </div>
        </div>
    );
}

export default Navbar;