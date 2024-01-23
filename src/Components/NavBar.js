import React from "react";
import { Link } from "react-router-dom";
import "./../css/Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";

function NavBar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setMenuToggle(!menuToggle);
  };

  return (
    
    <header>
      <h4 data-text="AI" className="tst">
        {" "}
        OuiFoto{" "}
      </h4>
      <nav ref={navRef}>
        <div className="divbox">
          <Link to="/" className="a">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/login" className="abb">
            Login
          </Link>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}></button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        {menuToggle ? <FaTimes /> : <FaBars />}
      </button>
    </header>
    
  );
}

export default NavBar;
