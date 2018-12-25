import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="log"/>
            </div>
            <div className="header-titles">
                <h1 className="main-title">LINKSSOLD</h1>
                <h2 className="sub-title">share ideas and link </h2>
            </div>
        </header>
    )
}

export default Header;