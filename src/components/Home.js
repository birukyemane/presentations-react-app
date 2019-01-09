import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-wrapper">
           <h1>Learn , discover and get visible.</h1>
           <h1>Share your ideas</h1>
           <div className="join">           
             <NavLink to='#' className="whiteFont blueBackground join">Join for free</NavLink>
           </div>
        </div>
    )
}

export default Home;