import React from "react";
import './Navbar.scss';

function Navbar() {
    return (
        <div className="Navbar">
            <img alt="logo" src="pokeball.png" width="48px"/>
            <span className="title">PokéMessenger</span>
        </div>
    );
}

export default Navbar;