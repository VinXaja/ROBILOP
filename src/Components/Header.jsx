import React from 'react';
import Register from './Register.jsx'
import Login from './Login.jsx'
import './Header.css'

function Header() {
    return (
        <>
        <nav className="nav-header d-flex align-items-center px-5">
            <img src="/src/assets/icon.jpg" alt="logoini lopasd" className="logo" />
            <div>
                <button className="btn btn-light mx-4 px-4 register" data-bs-toggle="modal" data-bs-target="#registerModal" >Register</button>
                <button className="btn btn-primary px-4 login" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
            </div>
        </nav>

        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <Login />
                        </div>
                    </div>
                </div>
        </div>

        <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <Register />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}   

export default Header;
