import melekphoto from "./photos/SaadiMelek.png";
import findem from "./photos/findem.png";
import findem2 from "./photos/findem2.png";
import findem3 from "./photos/findem3.png";
import findem4 from "./photos/findem4.png";
import findem5 from "./photos/findem5.png";
import findem6 from "./photos/findem6.png";

import datenight from "./photos/datenight.png";
import datenight1 from "./photos/datenight1.png";
import datenight2 from "./photos/datenight2.png";
import datenight3 from "./photos/datenight3.png";
import datenight4 from "./photos/datenight4.png";
import datenight5 from "./photos/datenight5.png";
import datenight6 from "./photos/datenight6.png";

import kinder from "./photos/kinder.png";
import kinder1 from "./photos/kinder1.png";
import kinder2 from "./photos/kinder2.png";
import kinder3 from "./photos/kinder3.png";
import kinder4 from "./photos/kinder4.png";
import kinder5 from "./photos/kinder5.png";
import kinder6 from "./photos/kinder6.png";

import palmas from "./photos/palmas.png";
import palmas1 from "./photos/palmas1.png";
import education from "./photos/education.png";

import remitafrika from "./photos/remitafrika.png";
import ux from "./photos/ux.png";

const about = {
  photo: melekphoto,
  name: "Melek Saadi",
  role: "Full stack developer",
  description:
    "An engineer student at Higher Institute of Arts and Multimedia Manouba, Living in Tunisia and highly interested in web development and graphic design.",
  resume: "#",
  social: {
    Github: "https://github.com/MELEK-WEB/",
    Linkedin: "https://www.linkedin.com/in/saadi-melek-4977601bb/",
  },
};

const header = {
  homepage: "#",
  title: "Melek__Sa.",
};
const projects = [
  {
    title: "Findem",
    description:
      "a web-based solution that includes the manager's functionalities in order to achieve a good resource management.However, each manager will have access to manage his projects and employees. The main point building a decision system for the projects assignment considering the potential and experience of the team members.Thus, the app ensure that all projects accepted by the application are taken care of by the employees.",
    technologies: ["react", "spring", "mysql"],
    img: [findem5, findem4, findem, findem2, findem3, findem6],
    github: "#",
    liveDemo: "#",
  },
  {
    img: [remitafrika],
    title: "Remitafrika",
    description:
      "based on figma design, Remitafrika is a landingPage for desktop users with modern design features.",
    technologies: ["React", "CSS", "ES6"],
    github: "https://github.com/MELEK-WEB/LandingPage/",
    liveDemo: "https://melek-web.github.io/LandingPage/",
  },
  {
    img: [
      datenight1,
      datenight,
      datenight2,
      datenight3,
      datenight4,
      datenight5,
      datenight6,
    ],
    title: "Date Night",
    description:
      "2D game inspired by the Titanic movie, Jack and rose need to collaborate together in order to reach a date appointment. thus, they should clear the way for each other.",
    technologies: ["photoshop", "unity", "C#"],
    github: "#",
    liveDemo: "#",
  },
  {
    title: "Education Plateform Beta Version",
    description:
      "During 24H hackthon Upside Education,we made a web plateform that helps learners for an eazy amd comfortable coding experience",
    github: "https://github.com/MELEK-WEB/web-editor",
    liveDemo: "https://melek-web.github.io/web-editor/",
    technologies: ["React", "Spring"],
    img: [education],
  },
  {
    img: [kinder, kinder1, kinder2, kinder3, kinder4, kinder5, kinder6],
    title: "Collect Us",
    description:
      "2D/3D advertising game for Kinder's products. The player is found lost in a maze and should escape it. to solve the maze you need to collect special eggs located at the end of levels one and two. ",
    technologies: ["photoshop", "unity", "C#"],
    github: "#",
    liveDemo: "#",
  },
  {
    img: [palmas, palmas1],
    title: "Palmas",
    description:
      "Palmas Hotels & Resorts is a modern, upscale hospitality company that is passionate about ‘making moments’, recognising that small gestures make a big difference to our guests, our owners and our people. We do ordinary things in an extraordinary way – a philosophy that has defined our brand’s success from the very start.. ",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    github: "#",
    liveDemo: "#",
  },
  {
    img: [ux],
    title: "UX/UI website",
    description:
      "based on figma design, modern ux/ui portfolio for creatives web designers .",
    technologies: ["React", "CSS", "ES6"],
    github: "https://github.com/MELEK-WEB/ux_portfolio",
    liveDemo: "https://melek-web.github.io/ux_portfolio/",
  },
];
const contact = {
  email: "saadimelek50@gmail.com",
  linkidin: "https://www.linkedin.com/in/saadi-melek-4977601bb/",
  Facebook: "https://www.facebook.com/est.melek/",
  Phone: "55213294",
};
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Java",
  "Python",
  "Spring Boot",
  "NodeJs",
  "Express",
  "MySQL",
  "PostgresQl",
  "Mongodb",
];
export { header, about, projects, skills, contact };
