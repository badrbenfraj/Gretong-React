import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="container">
            <nav className="navbar navbars navbar-default navbar-expand-sm navbar-dark">
                <ul className="nav navbar-nav">
                    <li className="nav-item active"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/new-arrivals">New Arrivals</Link></li>
                    <li className="nav-item"><Link to="/">TUXEDO</Link></li>
                    <li className="nav-item"><Link to="/">SWEATER</Link></li>
                    <li className="nav-item"><Link to="/">SHOES</Link></li>
                    <li className="nav-item"><Link to="/">GLASSES</Link></li>
                    <li className="nav-item"><Link to="/">T-SHIRT</Link></li>
                    <li className="nav-item"><Link to="/">WATCHES</Link></li>
                </ul>
            </nav>
        </div>            
    );
}

export default NavBar;