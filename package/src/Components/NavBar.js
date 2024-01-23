
import React from "react";
import { Link } from "react-router-dom";
import  styles from './../css/App.module.css';

import { useState } from 'react'


function NavBar() {



    const [isActive, setIsActive] = useState(false);


    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
  
  
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }




    return (

        <div>
            <div className="App">

      <header className="App-header">


      


        <nav className={`${styles.navbar}`}>


          {/* logo */}

          
         

          <h4 data-text="AI" className={`${styles.logo}`}> OuiFoto  </h4>


          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
             <Link to="/"  className={`${styles.navLink}`}>Home</Link>
              
            </li>
            <li onClick={removeActive}>
            <Link to="/about"  className={`${styles.navLink}`}>About</Link>
            </li>



            <li onClick={removeActive}>
            <Link to="/gallery"  className={`${styles.navLink}`}>Gallery</Link>
            </li>
            <li onClick={removeActive}>
            <Link to="/prices"  className={`${styles.navLink}`}>Prices</Link>
            </li>
            <li onClick={removeActive}>
            <Link to="/login"  className={`${styles.navLinkLogin}`}>Login</Link>
            </li>

          </ul>


          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>


        </header>
    </div>



        </div>

    );

}

export default NavBar;