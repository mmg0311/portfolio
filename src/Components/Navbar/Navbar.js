import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  };
  const handleClick2 = () => {
    setTimeout(() => {
      setOpen(!isOpen);
    }, 1000);
  };
  return (
    <div className="nav__container">
      <nav className="navbar">
        <div className="navbar__left">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="navbar__right">
          <li>
            <a href="https://www.linkedin.com/in/mohakgadge/" target="_blank">
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="http://github.com/mmg0311" target="_blank">
              <i className="fab fa-github fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="" onClick={handleClick}>
              {isOpen === false ? (
                <i className="fas fa-bars fa-lg"></i>
              ) : (
                <i className="fas fa-times fa-lg"></i>
              )}
            </a>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div className="navbar__full">
          <div className="navbar__fullContent">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth="easeInOutCubic"
              onClick={handleClick2}
              duration={100}
            >
              <i className="fas fa-home "></i> Home
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth="easeInOutCubic"
              duration={100}
              to="about"
              onClick={handleClick2}
            >
              <i className="fas fa-user"></i> About
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth="easeInOutCubic"
              duration={100}
              to="skills"
              onClick={handleClick2}
            >
              <i className="fas fa-heart"></i> Skills
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth="easeInOutCubic"
              duration={100}
              onClick={handleClick2}
              to="experience"
            >
              <i className="fas fa-graduation-cap"></i> Experience
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth="easeInOutCubic"
              offset={40}
              duration={100}
              onClick={handleClick2}
              to="projects"
            >
              <i className="fas fa-cogs"></i> Project
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth="easeInOutCubic"
              offset={50}
              duration={100}
              onClick={handleClick2}
              to="contact"
            >
              <i className="fas fa-address-card"></i> Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
