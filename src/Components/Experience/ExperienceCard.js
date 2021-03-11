import React from "react";
import Dailykit from "../../assets/images/dailykit.svg";
const ExperienceCard = () => {
  return (
    <div className="exp__card">
      <div className="exp__imgContainer">
        <a href="https://www.dailykit.org/" target="_blank">
          <img src={Dailykit} alt="dailykit" />
        </a>
      </div>
      <div className="exp__cardContainer">
        <div className="exp__cardHeader">
          <h3>Full Stack Intern @Dailykit</h3>
          <span className="exp__links">
            <a
              href="https://www.linkedin.com/company/dailykit/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
          </span>
        </div>
        <p>
          <ul>
            <li>
              Worked on building front-end of Ingredient App (core web-app).
            </li>
            <li>
              Pioneered the idea of developing mailing-service and
              template-engine backend for sending dynamic email templates.
            </li>
            <li>
              Worked on translation of web-apps in 8 international languages
              thereby helped in diversifying the app worldwide.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
