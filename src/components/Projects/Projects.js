//import React, { useState } from "react";
import { useState} from "react";
import { projects } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Project.css";

export default function Projects() {
  const [test, setTest] = useState(projects.length > 4);
  const [projectList, setProjectList] = useState(projects.slice(0,4))

  const Style = {
    cursor: "pointer",
    textAlign: "center",
    color: "var(--clr-primary)",
  };
  function getAllProjects() {
    setProjectList(projects)
    setTest(prv => ! prv)
  }

  
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects </h2>

      <div className="projects__grid">
        {projectList.map((pr) => {
          return (
            <ProjectContainer
              Title={pr.title}
              image={pr.img}
              description={pr.description}
              technologies={pr.technologies}
              github={pr.github}
              liveDemo={pr.liveDemo}
            />
          );
        })}
      </div>
      <br></br>
      {test && <h5 style={Style} onClick={getAllProjects}> Show more ...</h5>}
    </section>
  );
}
