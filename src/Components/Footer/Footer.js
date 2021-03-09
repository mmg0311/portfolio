import React from 'react'
const Footer = () => {
   return (
      <footer id="footer">
         <div className="footer__container">
            <div className="footer__content">
               <div className="footer__icons">
                  <span><a href="https://www.linkedin.com/in/mohakgadge/" target="_blank"><i className="fab fa-linkedin-in fa-lg"></i></a></span>
                  <span><a href="mailto:mohakgadge@gmail.com"><i className="fas fa-envelope fa-lg"></i></a></span>
                  <span><a href="tel:+917798750281"><i className="fab fa-whatsapp fa-lg"></i></a></span>
                  <span><a href="http://github.com/mmg0311" target="_blank"><i className="fab fa-github fa-lg"></i></a></span>
                  <span><a href="https://www.facebook.com/mohak.gadge" target="_blank"><i className="fab fa-facebook fa-lg"></i></a></span>
                  <span><a href="https://www.instagram.com/mohakgadge/" target="_blank"><i className="fab fa-instagram fa-lg"></i></a></span>
               </div>
               <p>
                  <i className="far fa-copyright"></i> Copyright Mohak Gadge
               </p>
            </div>
         </div>
      </footer>
   )
}

export default Footer
