import React from 'react';
import {
BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
  from 'react-icons/bs';
import '../App.css';


function SideBar ({openSideBarToggle, OpenSideBar}) {
  return (
    <aside id='sidebar' className={openSideBarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon-header' /> SHOP
        </div>
        <span className='icon close-icon' onClick={OpenSideBar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href=''>
            <BsFillArchiveFill className='icon' /> Products
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href=''>
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href=''>
            <BsPeopleFill className='icon' /> Customers
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