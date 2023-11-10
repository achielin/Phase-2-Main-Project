import React,{useRef} from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import './Navbar.css'
import Logo from "./icon.jpg";


const Navbar = () => {
    const navRef = useRef();

    function showNavbar(){
        navRef.current.classList.toggle("responsive_nav)")
    }
  return (
    <header>
      <img src={Logo} alt="logo" className="logo" />
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;