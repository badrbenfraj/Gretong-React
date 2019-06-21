import React from 'react';
import {Link} from 'react-router-dom';

const TopBar = () => {
    return (
        <div className="topnav navbar navbar-expand-sm">
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/help">Help</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact</Link></li>
                    <li className="nav-item"><Link to="/delivery">Delivery Information</Link></li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item icon-flipped fas fa-phone"></li>
                    <li className="nav-item">Call us : 032 2352 782</li>
                </ul>
            </div>
        </div>
    );
}

export default TopBar;