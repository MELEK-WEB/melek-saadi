import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import Typical from "react-typical";
import { about } from "../../portfolio";
import ModalCV from "../ModalCV";
import "./About.css";


export default function About() {

  const { photo, name, role, description, resume, social } = about;


  return (
    <>
    <div className="about center" style={{marginTop:"0"}}>
      {photo && <img height="320px" alt="Avatar placeholder" src={photo} />}
      <br />
      {name && (
        <h1>
          Hi, I am <span className="about__name"> {name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role"> <Typical steps={role} wrapper="h2" /></h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
      
        {resume && (
         
           
             <ModalCV/>
            
   
        )}

        {social && (
          <>
            {social.Github && (
              <a
                href={social.Github}
                target={"_blank"}
                rel="noreferrer"
                aria-label="github"
                className="link link--icon"
               
              >
                <GitHubIcon />
              </a>
            )}

            {social.Linkedin && (
              <a
                href={social.Linkedin}
                target={"_blank"}
                aria-label="linkedin"
                className="link link--icon"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
    </>
  );
}
