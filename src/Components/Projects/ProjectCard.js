import React from 'react'
const ProjectCard = ({ data }) => {
   return (
      <div className="project__card">
         <div className="project__cardContainer">
            <div className="project__imgContainer">
               <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="pic1" />
            </div>
            <div className="card__details">
               <h3>{data.title}</h3>
               <p>
                  {data.detail}
               </p>
               <div className="project__cardlinks">
                  <a href={data.git} target="_blank"><i class="fab fa-github fa-lg"></i></a>
                  {data.live && <a href={data.live} target="_blank"><i class="far fa-play-circle fa-lg"></i></a>}
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectCard
