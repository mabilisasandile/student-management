import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';

const Home = () => {

    const [openSideBarToggle, setOpenSideBarToggle] = useState(false);

    const OpenSideBar = () => {
        setOpenSideBarToggle(!openSideBarToggle)
    }

    return (
        <div className='grid-container'>
            <Header OpenSideBar={OpenSideBar} />
            <SideBar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar} />
            <Main />
        </div>
    );
}

export default Home;