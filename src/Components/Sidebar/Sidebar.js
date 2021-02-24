import React from 'react'
import Logo from '../../assets/images/logo.svg';
const Sidebar = ({ Open }) => {
   // console.log(Open);
   return (
      <div className="sidebar">
         <div className="sidebar__contents">
            <center>
               <img src={Logo} alt="logo" />
               <h3>MOHAK <span>GADGE</span> </h3>
            </center>
            <div className="sidebar__links">
               <a href="#home"><i class="fas fa-home "></i> Home</a>
               <a href="#about"><i class="fas fa-user"></i> About</a>
               <a href="#skills"><i class="fas fa-heart"></i> Skills</a>
               <a href="#experience"><i class="fas fa-graduation-cap"></i> Experience</a>
               <a href="#projects"><i class="fas fa-cogs"></i> Project</a>
               <a href="#contact"><i class="fas fa-address-card"></i> Contact</a>
            </div>
         </div>
         <div className="sidebar__contact">
            <a href="https://www.linkedin.com/in/mohakgadge/" target="_blank"><i class="fab fa-linkedin-in fa-lg"></i></a>
            <a href="mailto:mohakgadge@gmail.com"><i class="fas fa-envelope fa-lg"></i></a>
            <a href="tel:+917798750281"><i class="fab fa-whatsapp fa-lg"></i></a>
            <a href="https://www.instagram.com/mohakgadge/" target="_blank"><i class="fab fa-instagram fa-lg"></i></a>
            <a href="https://www.facebook.com/mohak.gadge" target="_blank"><i class="fab fa-facebook fa-lg"></i></a>
         </div>
      </div>
   )
}

export default Sidebar
