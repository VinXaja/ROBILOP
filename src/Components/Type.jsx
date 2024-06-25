import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";
import './Type.css'
import { useState } from "react";

function Type () {
    const [parent, setParent] = useState(0);
    const [adult, setAdult] = useState(0);
    const [kid, setKid] = useState(0);
    const [btn,setBtn] = useState('Bisnis');

    function tambah(id) {
        if (id === 'parent') setParent(parent + 1);
        else if (id === 'adult') setAdult(adult + 1);
        else setKid(kid + 1);
    }

    function kurang(id) {
        if (id === 'parent' && parent) setParent(parent - 1);
        else if (id === 'adult' && adult) setAdult(adult - 1);
        else if (id === 'kid' && kid) setKid(kid - 1 );
    }

    function choose(id) {
        const button = document.getElementById(`${id}`);
        button.setAttribute('class','actived');
        if(id){
            const change = document.getElementById('0');
            change.setAttribute('class','choose');
            setBtn('Ekonomi');
        } else {
            const change = document.getElementById('1');
            change.setAttribute('class','choose');
            setBtn('Bisnis');
        }
    }

    function data_type() {
        const container = document.getElementById('type');
        container.textContent = `${parent + adult + kid} Penumpang, ${btn}`;
    }

    return (
        <>
        <div className="modal-body">
            <div className="quantity">
                <div className="place d-flex justify-content-between align-items-center">
                    <div className="info">Dewasa (Diatas 17 Tahun)</div>
                    <div className="minplus d-flex justify-content-between align-items-center">
                        <button className="min" onClick={() => kurang('parent')}><FaMinus /></button>
                        <span id="parent">{parent}</span>
                        <button className="plus" onClick={() => tambah('parent')}><FiPlus /></button>
                    </div>
                </div>
                <div className="place d-flex justify-content-between align-items-center border-top border-bottom">
                    <div className="info">Remaja (2 - 17 Tahun)</div>
                    <div className="minplus d-flex justify-content-between align-items-center">
                        <button className="min" onClick={() => kurang('adult')}><FaMinus /></button>
                        <span id="adult">{adult}</span>
                        <button className="plus" onClick={() => tambah('adult')}><FiPlus /></button>
                    </div>
                </div>
                <div className="place d-flex justify-content-between align-items-center">
                    <div className="info">Bayi (0 - 2 Tahun)</div>
                    <div className="minplus d-flex justify-content-between align-items-center">
                        <button className="min" onClick={() => kurang('kid')}><FaMinus /></button>
                        <span id="kid">{kid}</span>
                        <button className="plus" onClick={() => tambah('kid')}><FiPlus /></button>
                    </div>
                </div>
            </div>

            <div className="d-flex my-4">
                <button className="actived" id='0' onClick={() => choose(0)}>Bisnis</button>
                <button className="choose" id='1' onClick={() => choose(1)}>Ekonomi</button>
            </div>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={data_type}>Confirm</button>
        </div>
        </>
    )
};

export default Type;