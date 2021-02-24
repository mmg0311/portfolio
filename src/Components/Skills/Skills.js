import React from 'react'
import js from '../../assets/images/js.svg';
import cplus from '../../assets/images/c++.svg';
import c from '../../assets/images/c.svg';
import node from '../../assets/images/nodejs.svg';
import spring from '../../assets/images/springboot.svg';
import react from '../../assets/images/reactjs.svg';
import redux from '../../assets/images/redux.svg';
import graphql from '../../assets/images/graphql.svg';
import firebase from '../../assets/images/firebase.svg';
import figma from '../../assets/images/figma.svg';
import mysql from '../../assets/images/mysql.svg';
import postgresql from '../../assets/images/postgresql.svg';
import aws from '../../assets/images/aws.svg';
import html from '../../assets/images/html5.svg';
import css from '../../assets/images/css.svg';
const Skills = () => {
   return (
      <section id="skills" className="skills">
         <div className="skills__container">
            <div className="skills__header">
               <h3>Skills 😍</h3>
            </div>
            <div className="skills__content">
               <div className="row">
                  <div className="col">
                     <img src={js} alt="" />
                     <span className="tooltiptext">JavaScript</span>
                  </div>
                  <div className="col">
                     <img src={cplus} alt="" />
                     <span className="tooltiptext">C++</span>
                  </div>
                  <div className="col">
                     <img src={c} alt="" />
                     <span className="tooltiptext">C</span>
                  </div>
                  <div className="col">
                     <img src={node} alt="" />
                     <span className="tooltiptext">NodeJS</span>
                  </div>
                  <div className="col">
                     <img src={spring} alt="" />
                     <span className="tooltiptext">Spring Boot</span>
                  </div>
               </div>
               <div className="row">
                  <div className="col">
                     <img src={react} alt="" />
                     <span className="tooltiptext">React JS</span>
                  </div>
                  <div className="col">
                     <img src={redux} alt="" />
                     <span className="tooltiptext">Redux</span>
                  </div>
                  <div className="col">
                     <img src={graphql} alt="" />
                     <span className="tooltiptext">GraphQL</span>
                  </div>
                  <div className="col">
                     <img src={firebase} alt="" />
                     <span className="tooltiptext">Firebase</span>
                  </div>
                  <div className="col">
                     <img src={figma} alt="" />
                     <span className="tooltiptext">Figma</span>
                  </div>
               </div>
               <div className="row">
                  <div className="col">
                     <img src={mysql} alt="" />
                     <span className="tooltiptext">MySQL</span>
                  </div>
                  <div className="col">
                     <img src={postgresql} alt="" />
                     <span className="tooltiptext">PostGreSQL</span>
                  </div>
                  <div className="col">
                     <img src={aws} alt="" />
                     <span className="tooltiptext">Amazon Web Services</span>
                  </div>
                  <div className="col">
                     <img src={html} alt="" />
                     <span className="tooltiptext">HTML 5</span>
                  </div>
                  <div className="col">
                     <img src={css} alt="" />
                     <span className="tooltiptext">CSS 3</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Skills
