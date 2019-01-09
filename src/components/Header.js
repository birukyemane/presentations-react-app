import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1 className="main-title">LINKSOLD</h1>
            <h2 className="sub-title">share ideas and link </h2>
            <ul className="blackBackground">
              <li className="menu"><NavLink to='/' className="whiteFont">Home</NavLink></li>            
              <li className="menu"><NavLink to='/presentations' className="whiteFont">presentations</NavLink></li>
              <li className="menu"><NavLink to='#' className="whiteFont">Login</NavLink></li>            
            </ul>
        </header>
    )
}

export default Header;