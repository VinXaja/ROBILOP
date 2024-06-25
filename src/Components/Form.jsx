import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import './Form.css';

function Form({ order ,id}) {
    const destination = ['Bandung', 'Medan', 'Jakarta', 'Bali', 'Surabaya', 'BalikPapan'];
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    function data_input (data) {
        const container = document.getElementById(`${id}`);
        container.textContent = data;
        order()
    }

    const handleSearchChange = (e) => {
        const input = e.target.value;
        setSearchInput(input);

        if (input) {
            const filtered = destination.filter((item) => 
                item.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredResults(filtered);
        } else {
            setFilteredResults([]);
        }
    };

    const recommendItems = destination.map((item, index) => (
        <div className='pop' key={index} onClick={() => data_input(item)}>
            {item}
        </div>
    ));

    const searchResults = filteredResults.map((item, index) => (
        <div className='res d-flex border-top border-bottom' key={index} onClick={() => data_input(item)}>
            <div className="icon"><LiaPlaneDepartureSolid /></div>
            {item}
        </div>
    ));

    return (
        <div className="form-container">
            <div className="header d-flex justify-content-between">
                <h2 className="d-flex align-items-end"><b>Pilih Kota</b></h2>
                <button className="close-btn d-flex align-items-start" onClick={order}>
                    <img src="https://img.icons8.com/?size=100&id=71200&format=png&color=000000" alt="close button" className="close-btn-img" />
                </button>
            </div>
            <div className="form-main d-flex align-items-center my-3">
                <FaSearch />
                <div className="div-search mx-2">
                    <input 
                        type="search" 
                        className="search-main" 
                        value={searchInput} 
                        onChange={handleSearchChange} 
                        placeholder="Search city..."
                    />
                </div>
            </div>

            {searchInput === '' ? (
                <div className="popular-container">
                    <span id="text" className="d-flex mb-3">Recommendation</span>
                    <div className="pop-container">{recommendItems}</div>
                </div>
            ) : (
                <div className="result-search my-3">
                    {searchResults}
                </div>
            )}
        </div>
    );
}

export default Form;
