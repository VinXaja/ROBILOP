import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Form from './Components/Form.jsx'
import Calendar from './Components/Calendar.jsx'
import Type from './Components/Type.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import './Home.css'
import './Components/Calendar.css'
import './Components/Type.css'
import './Components/Form.css'

function Home() {
    const [showForm, setShowForm] = useState(false);
    const [id, setId] = useState('');
    const [from, setFrom] = useState('Medan');
    const [to, setTo] = useState('Jakarta');
    const destination = ['Bandung', 'Medan', 'Jakarta', 'Bali', 'Surabaya', 'BalikPapan'];
    let i = 0;
    function order() {
        const container = document.querySelector('.container-item');
        setShowForm(!showForm);
        if (showForm) {
            container.style.borderTopLeftRadius = '3%';
            container.style.borderBottomLeftRadius = '3%';
        } else {
            container.style.borderTopLeftRadius = '0%';
            container.style.borderBottomLeftRadius = '0%';
        }
    }

    function swap() {
        const temp = to;
        setTo(from);
        setFrom(temp);
    }
    
    function handleClick(tag_id) {
        setId(tag_id);
        order();
    }

    setInterval(() => {
        document.getElementById("dest").innerHTML = destination[i];
        i = (i + 1) % destination.length;
    }, 4000);

    return (
        <>
            <div className="background-main">
                <div className="container-main mx-auto">
                    <div className="container-main-left">
                        <p className="left-text">
                            Dapatkan Promo Menarik 
                            <br />
                            Tiket Pesawat
                            <br />
                            Ke - <span className="animate-character" id="dest"> Bandung</span>
                            
                        </p>
                    </div>

                    <div className="container-main-right" >
                        <div className="container-item">
                            <button className="item-swap shadow p-3 mb-5 bg-body-tertiary rounded" onClick={swap}><img src="https://img.icons8.com/?size=100&id=21907&format=png&color=000000"></img></button>
                            <div className="from-to dropstart">
                                <div className="from" onClick={() => handleClick('from')}>
                                    <p id="item">Dari</p>
                                    <span className="item-input" id="from">{from}</span>
                                </div>
                                <hr></hr>
                                <div className="to" onClick={() => handleClick('to')}>
                                    <p id="item">Ke</p>
                                    <span className="item-input" id="to">{to}</span>
                                </div>
                            </div>
                            <div className="date" data-bs-toggle="modal" data-bs-target="#dateModal">
                                <p id="item">Pergi</p>
                                <span className="item-input" data-bs-toggle="modal" data-bs-target="#dateModal" id="date">Sen, 3 Jun</span>
                            </div>
                            <div className="type" data-bs-toggle="modal" data-bs-target="#typeModal">
                                <span className="item-input" id="type">0 Penumpang, Bisnis</span>
                            </div>
                            <button className="inisakitkepala btn btn-primary Registbtn">
                                <Link to={{pathname: 'MainContent', state: {from: from, to: to}}} id="choose-text">Ayo Pilih Tiketmu</Link>
                            </button>
                        </div>
                    </div>
                </div>
                {showForm && <Form order={order} id={id}/>}
            </div>

            <div className="modal fade" id="dateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="typeModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Jumlah Penumpang & Kelas</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <Type />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home
