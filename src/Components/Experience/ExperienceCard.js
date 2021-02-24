import React from 'react'
import Dailykit from '../../assets/images/dailykit.svg';
const ExperienceCard = () => {
   return (
      <div className="exp__card">
         <div className="exp__imgContainer">
            <a href="https://www.dailykit.org/" target="_blank"><img src={Dailykit} alt="dailykit" /></a>
         </div>
         <div className="exp__cardContainer">
            <div className="exp__cardHeader">
               <h3>Full Stack Intern @Dailykit</h3>
               <span className="exp__links">
                  <a href="https://www.linkedin.com/company/dailykit/" target="_blank"><i class="fab fa-linkedin-in fa-lg"></i></a>
               </span>
            </div>
            <p>
               <ul>
                  <li>
                     DailyKit is a meal kit brand which delivers ingredients pre-portioned
                     according to a recipe.
            </li>
                  <li>
                     Worked on the Ingredient App (core web-app), in React,
                     GraphQL and node.js.
            </li>
                  <li>
                     Build mailing-service and template-engine backend for
                     sending dynamic email templates using nodemailer, node.js, HTML, CSS.
            </li>
                  <li>
                     Worked on translation of web-apps in around 8 international languages using
                     I18next Framework and crowdin platform.
            </li>
               </ul>
            </p>
         </div>
      </div>
   )
}

export default ExperienceCard
