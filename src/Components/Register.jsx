import React, { useState } from 'react';
import './Register.css'; // Assuming this is the correct path to your CSS file
import Login from './Login.jsx'; // Assuming this is the correct path to your Login component


function Register () {

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
        <div className="Form Register-form">
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
                <div className="input-box">
                    <i className='bx bxs-user'></i>
                    <label htmlFor="#">Email</label>
                    <input type="email" placeholder="Enter Your Email*" required />
                </div>
                <div className="input-box">
                    <i className='bx bxs-envelope'></i>
                    <label htmlFor="#">Name</label>
                    <input type="text" placeholder="Enter Your Name*" />
                </div>
                <div className="input-box">
                    <i className='bx bxs-envelope'></i>
                    <label htmlFor="#">Password</label>
                    <input type="password" placeholder="Enter Your Password*" required />
                </div>
                <div className="forgot-section">
                    <label htmlFor="checkboxgorget"></label>
                    <span><input type="checkbox" name="checkboxforget" id="checkedRMR"/>Remember Me</span>
                </div>
                <div className="d-flex justify-content-center my-3">
                    <button className="btn loginBtn">Register</button>
                </div>
                
            </form>
            <p>Or Sign up using</p>
            <div className="social-media">
                <i className='bx bxl-facebook'></i>
                <i className='bx bxl-google'></i>
                <i className='bx bxl-twitter'></i>
            </div>
            <p className="LoginBtn LoginNow"><a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Login Now</a></p>

        </div>
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <Login />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};


export default Register;
