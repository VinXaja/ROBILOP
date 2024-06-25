import React from 'react';
import './Header.css'

function Header() {
    return (
        <nav className="nav-header d-flex align-items-center px-5">
            <img src='../assets/icon.jpg' alt="logo" className="logo" />
            <div>
                <button className="btn btn-light mx-4 px-4">Register</button>
                <button className="btn btn-primary px-4">Login</button>
            </div>
        </nav>
    );
}   

export default Header;
