import React, { useState } from 'react';
import Logo from '../../assets/images/logo.svg';
const Navbar = () => {
   const [isOpen, setOpen] = useState(false);
   const handleClick = (e) => {
      e.preventDefault();
      setOpen(!isOpen);
      console.log(isOpen);
   }
   return (
      < div className="nav__container" >
         <nav className="navbar">
            <div className="navbar__left">
               <img src={Logo} alt="logo" />
            </div>
            <ul className="navbar__right">
               <li><a href="https://www.linkedin.com/in/mohakgadge/" target="_blank"><i className="fab fa-linkedin-in fa-lg"></i></a></li>
               <li><a href="http://github.com/mmg0311" target="_blank"><i className="fab fa-github fa-lg"></i></a></li>
               <li>
                  <a href="" onClick={handleClick}>
                     {(isOpen === false) ? <i className="fas fa-bars fa-lg"></i> : <i className="fas fa-times"></i>}
                  </a>
               </li>
            </ul>
         </nav>
         {isOpen &&
            <div className="navbar__full">
               <div className="navbar__fullContent">
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#skills">Skills</a>
                  <a href="#experience">Experience</a>
                  <a href="#projects">Project</a>
                  <a href="#contact">Contact</a>
               </div>
            </div>
            //<Sidebar Open={true} />
         }
      </div >
   )
}

export default Navbar
