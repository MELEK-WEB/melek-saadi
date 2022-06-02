import React from 'react'
import { projects } from '../../portfolio';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './Project.css'

export default function Projects() {
  return (
   

<section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((pr) => (
          <ProjectContainer Title={pr.title} image={pr.img} description={pr.description} technologies={pr.technologies}  />
        
          
        ))}
      </div>
    </section>


  )
}
