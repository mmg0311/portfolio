import React from 'react'
import ProjectCard from './ProjectCard';
const Project = () => {
   const projects = [
      {
         title: 'PICT Placement Module',
         detail: 'A web-based solution for automating placement activities under guidance of Prof. G.P.Potdar in team of 5.',
         git: 'https://github.com/pictplacementmodule',
         live: 'https://placement-frontend.herokuapp.com/',
         image: ''
      },
      {
         title: 'Developers Community',
         detail: 'A platform where a user can post questions related to the project he/she is doing thereby building a community to help developers.',
         git: 'https://github.com/mmg0311/Developers-Community',
         live: '',
         image: ''
      },
      {
         title: 'Library Management System',
         detail: 'A web-based solution for library management of PICT. Where students can reserve the books by logging in to site without going to library',
         git: 'https://github.com/mmg0311/E-bookFinder',
         live: '',
         image: ''
      },
      {
         title: 'Pomodoro Clock',
         detail: 'This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.',
         git: 'https://github.com/mmg0311/pomodoro-clock-freecodecamp',
         live: 'https://codesandbox.io/s/github/mmg0311/pomodoro-clock-freecodecamp',
         image: ''
      },
   ]
   return (
      <section id="projects" className="project">
         <div className="project__container">
            <div className="project__header">
               <h3>My Projects</h3>
            </div>
            <div className="project__content">
               <div className="col">
                  <div className="row">
                     <ProjectCard data={projects[0]} />
                     <ProjectCard data={projects[1]} />
                  </div>
                  <div className="row">
                     <ProjectCard data={projects[2]} />
                     <ProjectCard data={projects[3]} />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Project
