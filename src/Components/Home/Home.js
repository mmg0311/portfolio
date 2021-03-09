import React from 'react'
const Home = () => {
   return (
      <section id="home" className="home">
         <div className="home__container">
            <div className="home__content">
               <div className="home__header">
                  <h3>
                     Hey 👋,<br /> I am <span>MOHAK GADGE</span>
                  </h3>
               </div>
               <div className="home__subtitle">
                  <h4>Web Developer</h4>
               </div>
               <div className="home__actionbtn">
                  <a href="#experience"><span className="btn workbtn">My Work</span></a>
                  <a href="#contact"><span className="btn hirebtn">Hire Me</span></a>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Home
