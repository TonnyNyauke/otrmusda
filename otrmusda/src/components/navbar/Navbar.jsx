import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import pic from '../../assets/pic.jpg';
//BEN - Block element modifier


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='my__navbar'>
      <div className='my__navbar-links'>
        <div className='my__navbar-links_logo'>
          <img src={pic} alt="pic" />
        </div>
        <div className='my__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wmy'>Music</a></p>
          <p><a href='#possibility'>Bible Study</a></p>
          <p><a href='#features'>Devotions</a></p>
          <p><a href='#blog'>About OTR</a></p>
        </div>
      </div>
      <div className='my__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='my__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
          {toggleMenu && (
          <div className='my__navbar-menu_container scale-up-center'>
            <div className='my__navbar-menu_container-links'>
            <p><a href='#home'>Home</a></p>
          <p><a href='#wmy'>Music</a></p>
          <p><a href='#possibility'>Bible Study</a></p>
          <p><a href='#features'>Devotions</a></p>
          <p><a href='#blog'>About OTR</a></p>
              <div className='my__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar