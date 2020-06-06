import React from "react";
import './Navbar.scss';

function Navbar() {
    return (
        <div className="Navbar">
            <img alt="logo" src="speech-bubble.svg" />
            <span className="Navbar-title">My Messenger</span>
        </div>
    );
}

export default Navbar;