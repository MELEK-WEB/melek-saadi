import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import React from "react";
import "./ProjectContainer.css";

function ProjectContainer({
  Title,
  image,
  description,
  technologies,
  github,
  liveDemo,
}) {
  const [currentImage, setCurentImage] = React.useState(0);

  const setrandomlyImages = () => {
    if (currentImage < image.length - 1) {
      setCurentImage(currentImage + 1);
    } else {
      setCurentImage(0);
    }
  };
  return (
    <div className="project">
      <h3>{Title}</h3>
      <br />
      <img
        src={image[currentImage]}
        alt={Title}
        style={{ width: "100%" }}
        onMouseOver={setrandomlyImages}
      />

      <p className="project__description">{description}</p>

      <ul className="project__stack">
        {technologies.map((item) => (
          <li className="project__stack-item">{item}</li>
        ))}
      </ul>

      {github !=="" ?(
        <a
          href={github}
          target={"_blank"}
          rel="noreferrer"
          aria-label="source code"
          className="link link--icon"
        >
          <GitHubIcon />
        </a>
      ): null}

   {   liveDemo !==""? <a
        href={liveDemo}
        target={"_blank"}
        rel="noreferrer"
        aria-label="live preview"
        className="link link--icon"
      >
        <LaunchIcon />
      </a>: null}
    </div>
  );
}

export default ProjectContainer;
