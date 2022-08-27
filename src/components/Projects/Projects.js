import React from 'react'
import {  projects } from '../../portfolio';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './Project.css'

export default function Projects() {
    const test = projects.length>4
  return (
   

<section id='projects' className='section projects'>
      <h2 className='section__title'>Projects </h2>

      <div className='projects__grid'>

        {
     
          !test ?
          
         (  projects.map((pr) => (
            <ProjectContainer Title={pr.title} image={pr.img} 
            description={pr.description} technologies={pr.technologies}  />))
          ):
          (<>
           {
            projects.slice(0,4).map((pr) => (
            <ProjectContainer Title={pr.title} image={pr.img} 
            description={pr.description} technologies={pr.technologies}  />))
            }
          
          </>
          )
      }
      </div>
      <br></br>
      {test && <h5 style={{textAlign:"center" , color: 'var(--clr-primary)'}}>Show more ...</h5>}
    </section>


  )
}
