import React from 'react';
import {
  BsBook, BsBookFill, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
  from 'react-icons/bs';
import '../App.css';
import { useNavigate } from 'react-router-dom';


function SideBar({ openSideBarToggle, OpenSideBar }) {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  }

  return (
    <aside id='sidebar' className={openSideBarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand' onClick={handleHome}>
          <BsBook className='icon-header' /> Academy
        </div>
        <span className='icon close-icon' onClick={OpenSideBar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href='/'>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href='/books'>
            <BsBookFill className='icon' /> Books
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href='/courses'>
            <BsFillGrid3X3GapFill className='icon' /> Courses
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href='/student'>
            <BsPeopleFill className='icon' /> Students
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href=''>
            <BsListCheck className='icon' /> Inventory
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href=''>
            <BsMenuButtonWideFill className='icon' /> Report
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href=''>
            <BsFillGearFill className='icon' /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;