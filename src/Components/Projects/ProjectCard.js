import React from "react";
const ProjectCard = ({ data }) => {
  return (
    <div className="project__card">
      <div className="card__details">
        <h3>{data.title}</h3>
        <p>{data.detail}</p>
        <div className="chips-container">
          {data.tech.split(",").map((t, ind) => (
            <div key={ind} className="chip">
              {"#" + t.toLowerCase()}
            </div>
          ))}
        </div>
        <div className="project__cardlinks">
          <a href={data.git} target="_blank">
            <i className="fab fa-github fa-lg"></i> Github
          </a>
          {data.live && (
            <a href={data.live} target="_blank">
              <i className="far fa-play-circle fa-lg"></i> Live Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
