import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'


function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className="DesktopMenu">

      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
      <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portafolio</Link>
      <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contact</Link>

      </div>

      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me </button>
    </nav>
  );
}

export default NavBar