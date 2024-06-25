import React, { useState, useEffect } from 'react';
import './MainContent.css';

function MainContent({}) {
    const [departureTo, setDepartureTo] = useState('Jakarta');
    const [adults, setAdults] = useState(0);
    const [kids, setKids] = useState(0);
    const [infants, setInfants] = useState(0);

    useEffect(() => {

        const listairasia=[]
        const listlion=[]
        const listciti=[]
        const listgaruda=[]
        const listbatik=[]

        let checkboxpesawat = document.querySelectorAll(".input-airline");
        const dari = document.getElementById("input-dari");
        const tujuan = document.getElementById("input-tujuan");
        const searchButton = document.getElementById("searchTicket");

        searchButton.addEventListener('click', function() {
            const tulisanDeparture = document.getElementById("tulisanDepartureTo");
            tulisanDeparture.textContent = `${tujuan.value}`;
            const listMaskapai = ["airasia", "lionair", "citilink", "garuda", "BatikAir"];
            const container = document.querySelector(".list-pilihan");
            container.innerHTML = '';
            console.log(dari.value);
            if(dari.value && tujuan.value){
                listMaskapai.forEach(function(x, i) {
                const Tiket = document.createElement("div");
                const fastest = document.getElementById('FastestValue');
                fastest.textContent = '2.5 Hours';
                const arrival = document.getElementById('ArrivalValue');
                const departure = document.getElementById('DepartureValue');
                arrival.textContent = '10 : 00';
                departure.textContent = ' 12 : 30';
                if (x === "airasia") {
                    Tiket.classList.add("ticket", "airasia");
                } else if (x === "lionair") {
                    Tiket.classList.add("ticket", "lionair");
                } else if (x === "citilink") {
                    Tiket.classList.add("ticket", "citilink");
                } else if (x === "garuda") {
                    Tiket.classList.add("ticket", "garuda");
                } else if (x === "BatikAir") {
                    Tiket.classList.add("ticket", "batikAir");
                }

                const table = document.createElement("table");
                table.classList.add("table", "table-borderless");
                table.setAttribute("id", `ticket${i + 1}`);

                const tray = document.createElement("tr");

                const tdLogo = document.createElement("td");
                tdLogo.setAttribute("rowspan", "2");
                tdLogo.style.verticalAlign = "middle";
                const imgLogo = document.createElement("img");

                if (x === "airasia") {
                    imgLogo.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/f/f5/AirAsia_New_Logo.svg");
                } else if (x === "lionair") {
                    imgLogo.setAttribute("src", "https://download.logo.wine/logo/Lion_Air/Lion_Air-Logo.wine.png");
                } else if (x === "citilink") {
                    imgLogo.setAttribute("src", "https://airhex.com/images/airline-logos/alt/citilink.png");
                } else if (x === "garuda") {
                    imgLogo.setAttribute("src", "https://1000logos.net/wp-content/uploads/2020/04/Garuda-Indonesia-Logo.png");
                } else if (x === "BatikAir") {
                    imgLogo.setAttribute("src", "https://1.bp.blogspot.com/-0LhrImUBias/Xn4ECOnTDLI/AAAAAAAABxo/GXXicXuEEU0mjJnAbAkKPD-ZQdQV8BRzQCLcBGAsYHQ/s1600/Logo%2BBatik%2BAir.png");
                }

                imgLogo.setAttribute("alt", "logo");
                imgLogo.setAttribute("id", "logo-pesawat");
                tdLogo.appendChild(imgLogo);

                const tdMerk = document.createElement("td");
                tdMerk.classList.add("merk-pesawat");
                tdMerk.setAttribute("rowspan", "2");
                tdMerk.style.verticalAlign = "middle";
                const h4Merk = document.createElement("h4");

                h4Merk.textContent = x.charAt(0).toUpperCase() + x.slice(1);
                tdMerk.appendChild(h4Merk);

                const tdTime1 = document.createElement("td");
                tdTime1.style.verticalAlign = "middle";
                const h4Time1 = document.createElement("h4");
                h4Time1.textContent = "10.00";
                tdTime1.appendChild(h4Time1);

                const tdDuration = document.createElement("td");
                tdDuration.style.verticalAlign = "middle";
                const h6Duration = document.createElement("h6");
                h6Duration.textContent = "2h 30min";
                tdDuration.appendChild(h6Duration);
                const imgArrow = document.createElement("img");

                const tdTime2 = document.createElement("td");
                tdTime2.style.verticalAlign = "middle";
                const h4Time2 = document.createElement("h4");
                h4Time2.textContent = "12.30";
                tdTime2.appendChild(h4Time2);

                const tdHarga = document.createElement("td");
                tdHarga.style.verticalAlign = "middle";
                const h4Harga = document.createElement("h4");
                h4Harga.setAttribute("class", "hargaTiket");
                if (x === "airasia") {
                    h4Harga.setAttribute("id", "Tair");
                } else if (x === "lionair") {
                    h4Harga.setAttribute("id", "Tlion");
                } else if (x === "citilink") {
                    h4Harga.setAttribute("id", "Tciti");
                } else if (x === "garuda") {
                    h4Harga.setAttribute("id", "Tgaruda");
                } else if (x === "BatikAir") {
                    h4Harga.setAttribute("id", "Tbatik");
                }
                const spanHarga = document.createElement("span");

                const hargaRandom = Math.floor(Math.random() * (10000000 - 700000 + 1)) + 700000;
                spanHarga.textContent = hargaRandom.toLocaleString();
                h4Harga.appendChild(spanHarga);
                tdHarga.appendChild(h4Harga);

                tray.appendChild(tdLogo);
                tray.appendChild(tdMerk);
                tray.appendChild(tdTime1);
                tray.appendChild(tdDuration);
                tray.appendChild(tdTime2);
                tray.appendChild(tdHarga);

                const tr2 = document.createElement("tr");

                const tdBandaraAsal = document.createElement("td");
                tdBandaraAsal.classList.add("bandaraAsal");
                tdBandaraAsal.textContent = `${dari.value}`;

                const tdStop = document.createElement("td");
                tdStop.textContent = "1 stop";

                const tdBandaraTujuan = document.createElement("td");
                tdBandaraTujuan.classList.add("bandaraTujuan");
                tdBandaraTujuan.textContent = `${tujuan.value}`;

                const tdTotal = document.createElement("td");
                tdTotal.textContent = "totalroundtrip/pax";

                tr2.appendChild(tdBandaraAsal);
                tr2.appendChild(tdStop);
                tr2.appendChild(tdBandaraTujuan);
                tr2.appendChild(tdTotal);

                table.appendChild(tray);
                table.appendChild(tr2);

                const divBagage = document.createElement("div");
                divBagage.classList.add("bagage");
                divBagage.setAttribute("data-bs-toggle", "collapse");
                divBagage.setAttribute("data-bs-target", `#collapseBagage${i + 1}`);
                divBagage.setAttribute("aria-expanded", "false");
                divBagage.setAttribute("aria-controls", `collapseBagage${i + 1}`);
                divBagage.textContent = "Bagage included";

                const divCollapse = document.createElement("div");
                divCollapse.classList.add("collapse");
                divCollapse.setAttribute("id", `collapseBagage${i + 1}`);

                const cardCollapse = document.createElement("div");
                cardCollapse.classList.add("card", "card-body", "Bdetail");

                const loremParagraph = document.createElement("p");
                loremParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis velit, aliquam eget ullamcorper sed, hendrerit ut nisi.";

                cardCollapse.appendChild(loremParagraph);
                divCollapse.appendChild(cardCollapse);

                divBagage.appendChild(divCollapse);

                Tiket.appendChild(table);
                Tiket.appendChild(divBagage);

                container.appendChild(Tiket);

                const hargaTiket= document.querySelectorAll(".hargaTiket");
                const tempatcheapest = document.getElementById("LowestValue");

                const bandingHarga = [];

                hargaTiket.forEach(function(x){
                    const temp = parseInt(x.textContent.trim().replace(/\D/g, ''));
                    bandingHarga.push(temp);
                });
                const lowestharga = Math.min(...bandingHarga);
                // console.log(lowestharga)
                const masukan = lowestharga.toLocaleString();
                tempatcheapest.textContent = masukan;

                const priceA= document.getElementById("hargaairasia")
                const priceB= document.getElementById("hargalion")
                const priceC= document.getElementById("hargaciti")
                const priceD= document.getElementById("hargagaruda")
                const priceE= document.getElementById("hargabatik")

                const bandingHargaPrice = [];
                if (x === "airasia") {
                    
                    const ini = document.getElementById("Tair").textContent
                    // console.log(ini)
                    const hargaTAir= parseInt(ini.trim().replace(/\D/g, ''));
                    // console.log(hargaTAir)
                    listairasia.push(hargaTAir);

                    const lowestharga = Math.min(...listairasia);
                    const masukan = lowestharga.toLocaleString();
                    priceA.textContent = masukan;


                } else if (x === "lionair") {
                                    
                    const ini = document.getElementById("Tlion").textContent
                    // console.log(ini)
                    const hargaTlion= parseInt(ini.trim().replace(/\D/g, ''));
                    // console.log(hargaTlion)
                    listlion.push(hargaTlion);

                    const lowestharga = Math.min(...listlion);
                    const masukan = lowestharga.toLocaleString();
                    priceB.textContent = masukan;


                } else if (x === "citilink") {
                    
                    const ini = document.getElementById("Tciti").textContent
                    // console.log(ini)
                    const hargaTciti= parseInt(ini.trim().replace(/\D/g, ''));
                    // console.log(hargaTciti)
                    listciti.push(hargaTciti);

                    const lowestharga = Math.min(...listciti);
                    const masukan = lowestharga.toLocaleString();
                    priceC.textContent = masukan;


                } else if (x === "garuda") {
                                    
                    const ini = document.getElementById("Tgaruda").textContent
                    // console.log(ini)
                    const hargaTgaruda= parseInt(ini.trim().replace(/\D/g, ''));
                    // console.log(hargaTgaruda)
                    listgaruda.push(hargaTgaruda);

                    const lowestharga = Math.min(...listgaruda);
                    const masukan = lowestharga.toLocaleString();
                    priceD.textContent = masukan;


                } else if (x === "BatikAir") {
                                    
                    const ini = document.getElementById("Tbatik").textContent
                    // console.log(ini)
                    const hargaTbatik= parseInt(ini.trim().replace(/\D/g, ''));
                    // console.log(hargaTbatik)
                    listbatik.push(hargaTbatik);

                    const lowestharga = Math.min(...listbatik);
                    const masukan = lowestharga.toLocaleString();
                    priceE.textContent = masukan;
                }
            });
        }

            checkboxpesawat = document.querySelectorAll(".input-airline input");
            var tickets = document.querySelectorAll(".ticket");

            checkboxpesawat.forEach(function(check) {
                check.addEventListener('change', filtering);
            });

            document.querySelectorAll('.increment-passenger').forEach(function(button) {
                button.addEventListener('click', function() {
                    increment(button.dataset.target);
                });
            });

            document.querySelectorAll('.decrement-passenger').forEach(function(button) {
                button.addEventListener('click', function() {
                    decrement(button.dataset.target);
                });
            });
        });

        function filtering() {
            const checkboxpesawat = document.querySelectorAll(".input-airline input");
            let tickets = document.querySelectorAll(".ticket");

            const yangdipilih = Array.from(checkboxpesawat)
                .filter(check => check.checked)
                .map(check => check.value.toLowerCase());

            tickets.forEach(function(ticket) {
                const airlineClasses = Array.from(ticket.classList);
                let tiketAirline = airlineClasses.find(cls => cls !== 'ticket').toLowerCase();

                if (yangdipilih.length === 0 || yangdipilih.includes(tiketAirline)) {
                    ticket.style.display = 'block';
                } else {
                    ticket.style.display = 'none';
                }
            });
        }

        document.querySelectorAll('.input-airline input').forEach(function(input) {
            input.addEventListener('change', filtering);
        });

        const volumeRange = document.getElementById('customRange3');
        const volumeValue = document.getElementById('price-range-pesawat-value');

        volumeRange.addEventListener('input', () => {
            const rangeValue = parseInt(volumeRange.value);
            volumeValue.textContent = rangeValue;
            const tes = document.querySelectorAll('.ticket');
            tes.forEach(function(ticket, i) {
                const harganya = parseInt(ticket.querySelector(".hargaTiket").textContent.trim().replace(/\D/g, ''));
                if ( harganya <= rangeValue) {
                    ticket.style.display = "block";
                } else {
                    ticket.style.display = "none";
                }
            });
        });

        document.querySelectorAll('#tambah-passenger').forEach(function(dropdown) {
            dropdown.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        });
    }, []);

    const increment = (setter) => {
        setter(prev => prev + 1);
    };

    const decrement = (setter) => {
        setter(prev => (prev > 0 ? prev - 1 : 0));
    };


    return (
        <>
        <div className="main-container">
            <div className="whereto-passenger">
                <div className="input-group">
                    <input type="text" id="input-dari" aria-label="tujuan" className="wt-p form-control" placeholder="From" value='Medan'/>
                    <input type="text" id="input-tujuan" aria-label="asal" className="wt-p form-control" placeholder="To" value='Jakarta' />
                    <input type="date" className="wt-p form-control" id="datepicker" placeholder="Select date" />
                    <input type="date" className="wt-p form-control" id="datepicker2" placeholder="Select dates" />
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" id="passenger-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Passenger
                        </button>
                        <ul className="dropdown-menu" id="tambah-passenger">
                            <li className="dropdown-item d-flex">
                                <div className="pass-item">Adults </div>
                                <button className="btn btn-sm btn-light mx-3" onClick={() => decrement(setAdults)}>-</button>
                                <input type="text" className="mx-1" id="adults" value={adults} readOnly />
                                <button className="btn btn-sm btn-light mx-3" onClick={() => increment(setAdults)}>+</button>
                            </li>
                            <li className="dropdown-item d-flex">
                                <div className="pass-item">Kids</div>
                                <button className="btn btn-sm btn-light mx-3" onClick={() => decrement(setKids)}>-</button>
                                <input type="text" className="mx-1" id="kids" value={kids} readOnly />
                                <button className="btn btn-sm btn-light mx-3" onClick={() => increment(setKids)}>+</button>
                            </li>
                            <li className="dropdown-item d-flex">
                                <div className="pass-item">Infants</div>
                                <button className="btn btn-sm btn-light mx-3" onClick={() => decrement(setInfants)}>-</button>
                                <input type="text" className="mx-1" id="infants" value={infants} readOnly />
                                <button className="btn btn-sm btn-light mx-3" onClick={() => increment(setInfants)}>+</button>
                            </li>
                        </ul>
                    </div>
                    <button className="wt-p btn btn-primary" id="searchTicket">Search</button>
                </div>
            </div>

            <div className="container">
                <aside className="col-md-3 bg-light py-3" id="sidebar">
                    <h3>Filter</h3>
                    <div className="bagian-kiri">
                        <div className="accordion" id="side-choice-first">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Airplanes
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        <div className="airline-choice">
                                            <table className="table-borderless" id="airline-choice-table">
                                                <tr>
                                                    <td className="input-airline"><input type="checkbox" value="airasia" id="checkbox1" /></td>
                                                    <td className="label-airline"><label htmlFor="checkbox1">Airasia</label></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td><small>Start From: <span id="hargaairasia">Price</span></small></td>
                                                </tr>
                                                <tr>
                                                    <td className="input-airline"><input type="checkbox" value="lionair" id="checkbox2" /></td>
                                                    <td className="label-airline"><label htmlFor="checkbox2">Lion Air</label></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td><small>Start From: <span id="hargalion">Price</span></small></td>
                                                </tr>
                                                <tr>
                                                    <td className="input-airline"><input type="checkbox" value="citilink" id="checkbox3" /></td>
                                                    <td className="label-airline"><label htmlFor="checkbox3">Citilink</label></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td><small>Start From: <span id="hargaciti">Price</span></small></td>
                                                </tr>
                                                <tr>
                                                    <td className="input-airline"><input type="checkbox" value="garuda" id="checkbox4" /></td>
                                                    <td className="label-airline"><label htmlFor="checkbox4">Garuda Indonesia</label></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td><small>Start From: <span id="hargagaruda">Price</span></small></td>
                                                </tr>
                                                <tr>
                                                    <td className="input-airline"><input type="checkbox" value="batikair" id="checkbox5" /></td>
                                                    <td className="label-airline"><label htmlFor="checkbox5">Batik Air</label></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td><small>Start From: <span id="hargabatik">Price</span></small></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        Price Range
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        <div className="price">
                                            <div className="price-range">
                                                <label htmlFor="customRange3" className="form-label">Harga Maksimal-Mu</label>
                                                <input type="range" className="form-range" id="customRange3" min="0" max="10000000" step="10000" />
                                                <p>Harga: <span id="price-range-pesawat-value"></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <main className="col-md-9 py-3" id="ticket-choice">
                    <h2>Departure to <span id="tulisanDepartureTo">{departureTo}</span></h2>
                    <div className="filtering-tickets">
                        <div className="card" style={{ width: '15rem' }}>
                            <div className="card-body">
                                <div>
                                    Cheapest
                                    <br />
                                    <span id="LowestValue" style={{ color: 'black' }}></span>
                                </div>
                                <img className="fotoatas" src="https://www.yakimahabitat.org/wp-content/uploads/2020/08/HFH_ICON_COINS_Blue-300x292.png" alt="" />
                            </div>
                        </div>
                        <div className="card" style={{ width: '15rem' }}>
                            <div className="card-body">
                                <div>
                                    Fastest
                                    <br />
                                    <span id="FastestValue" style={{ color: 'black', fontSize: 15}}></span>
                                    
                                </div>
                                <img className="fotoatas" src="https://cdn-icons-png.flaticon.com/512/2214/2214046.png" alt="bluelightning" />
                            </div>
                        </div>
                        <div className="card" style={{ width: '15rem' }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                Early Arrival
                                <span id="ArrivalValue" style={{ color: 'black', fontSize: 24, marginLeft: 20}}></span>
                            </div>
                        </div>
                        <div className="card" style={{ width: '15rem' }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                Early Departure
                                <span id="DepartureValue" style={{ color: 'black', fontSize: 24, marginLeft: 20}}></span>
                            </div>
                        </div>
                    </div>
                    <div className="list-pilihan"></div>
                </main>
            </div>
        </div>
        </>
    );
}

export default MainContent;
