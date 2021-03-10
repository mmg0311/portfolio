import React from 'react'
import Logo from '../../assets/images/logo.svg';
import { Link, animateScroll as scroll} from 'react-scroll'
const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="sidebar__contents">
            <center>
               <img src={Logo} alt="logo" />
               <h3>MOHAK <span>GADGE</span> </h3>
            </center>
            <div className="sidebar__links">
               <Link 
                  activeClass="active" 
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={100}
                  >
                     <i className="fas fa-home "></i> Home
               </Link>
               <Link 
                  activeClass="active" 
                  spy={true}
                  smooth={true}
                  duration={100}
                  to="about">
                     <i className="fas fa-user"></i> About
               </Link>
               <Link 
                  activeClass="active" 
                  spy={true}
                  smooth={true}
                  duration={100}
                  to="skills">
                     <i className="fas fa-heart"></i> Skills
               </Link>
               <Link 
                  activeClass="active" 
                  spy={true}
                  smooth={true}
                  duration={100}
                  to="experience">
                     <i className="fas fa-graduation-cap"></i> Experience
               </Link>
               <Link 
                  activeClass="active" 
                  spy={true}
                  smooth={true}
                  offset={40}
                  duration={100}
                  to="projects">
                     <i className="fas fa-cogs"></i> Project
               </Link>
               <Link 
                  activeClass="active" 
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                  to="contact">
                     <i className="fas fa-address-card"></i> Contact
               </Link>
            </div>
         </div>
         <div className="sidebar__contact">
            <a href="https://www.linkedin.com/in/mohakgadge/" target="_blank" data-tip="LinkedIn Profile" ><i className="fab fa-linkedin-in fa-lg" ></i></a>
            <a href="mailto:mohakgadge@gmail.com" data-tip="Email ID"><i className="fas fa-envelope fa-lg"></i></a>
            <a href="tel:+917798750281" data-tip="Whatsapp Number"><i className="fab fa-whatsapp fa-lg" ></i></a>
            <a href="https://www.instagram.com/mohakgadge/" target="_blank" data-tip="Instagram Profile"><i className="fab fa-instagram fa-lg" ></i></a>
            <a href="https://www.facebook.com/mohak.gadge" target="_blank" data-tip="Facebook Profile"><i className="fab fa-facebook fa-lg" ></i></a>
         </div>
      </div>
   )
}

export default Sidebar
