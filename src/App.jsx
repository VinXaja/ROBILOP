import {Routes, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './Home.jsx'
import MainContent from './MainContent.jsx'
import Header from './Components/Header.jsx'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="Home"element={<Home />}></Route>
                <Route path="MainContent"element={<MainContent />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
