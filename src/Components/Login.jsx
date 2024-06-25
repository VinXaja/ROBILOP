import React, { useState } from 'react';
import './Register.css';
import Register from './Register.jsx';



function Login () {
    const [showRegister, setShowRegister] = useState(false);

    const handleRegisterClick = () => {
        setShowRegister(true); 
    };

    return (
        <>
        <div className="Form login-form">
            <h2>Login</h2>
            <form action="#">
                <div className="input-box">
                    <i className='bx bxs-user'></i>
                    <label htmlFor="#">Email</label>
                    <input type="email" placeholder="Enter Your Email*" required />
                </div>
                <div className="input-box">
                    <i className='bx bxs-envelope'></i>
                    <label htmlFor="#">Password</label>
                    <input type="password" placeholder="Enter Your Password*" required />
                </div>
                <div className="forgot-section">
                    <div className='d-flex'>
                        <label htmlFor="checkbox"></label>
                        <span><input type="checkbox" name="checkbox" id="checkedRML" />Remember Me</span>
                    </div>
                    <span><a href="#">Forgot Password ?</a></span>
                </div>
                <div className="d-flex justify-content-center my-4"><button className="btn Regisbtn loginBtn">Login</button></div>
                
            </form>
            <p>Or Sign up using</p>
            <div className="social-media">
                <i className='bx bxl-facebook'></i>
                <i className='bx bxl-google'></i>
                <i className='bx bxl-twitter'></i>
            </div>
            <p className="RegistBtn RegiBtn"><a href="#" data-bs-toggle="modal" data-bs-target="#registerModal">Register Now</a></p>

        </div>
        {/* <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <Register />
                    </div>
                </div>
            </div>
        </div> */}
        </>
    );
}

export default Login;
