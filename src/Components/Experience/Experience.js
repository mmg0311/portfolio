import React from 'react'
import ExperienceCard from './ExperienceCard';
const Experience = () => {
   return (
      <section id="experience" className="exp">
         <div className="exp__container">
            <div className="exp__header">
               <h3>My Experience</h3>
            </div>
            <div className="exp__content">
               <div className="row">
                  <div className="col">
                     <ExperienceCard />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Experience
