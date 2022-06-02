import melekphoto from './photos/SaadiMelek.png'
import findem from './photos/findem.png'
import findem2 from './photos/findem2.png'
import findem3 from './photos/findem3.png'
import findem4 from './photos/findem4.png'
import findem5 from './photos/findem5.png'
import findem6 from './photos/findem6.png'

import datenight from './photos/datenight.png'
import datenight1 from './photos/datenight1.png'
import datenight2 from './photos/datenight2.png'
import datenight3 from './photos/datenight3.png'
import datenight4 from './photos/datenight4.png'
import datenight5 from './photos/datenight5.png'
import datenight6 from './photos/datenight6.png'
import datenight7 from './photos/datenight7.png'


const about ={
    photo : melekphoto ,
    name: 'Melek Saadi',
    role: 'Full stack developer',
    description:
    'An engineer student at Higher Institute of Arts and Multimedia Manouba, Living in Tunisia and highly interested in web development and graphic design.',
    resume: '#',

}

const header = {
  
  homepage: '#',
  title: 'JS.',
}
const projects =[
{
    
    title: 'findem',
     description:
      "a web-based solution that includes the manager's functionalities in order to achieve a good resource management.However, each manager will have access to manage his projects and employees. The main point building a decision system for the projects assignment considering the potential and experience of the team members.Thus, the app ensure that all projects accepted by the application are taken care of by the employees.",
    technologies:['react','spring','mysql'],
    img  :[findem5,findem4,findem,findem2,findem3,findem6],
  },
  {
      img  :[datenight1,datenight,datenight2,datenight3,datenight4,datenight5,datenight6,datenight7],
      title :'Date Night',
      description :"2D game inspired by the Titanic movie, Jack and rose need to collaborate together in order to reach a date appointment. thus, they should clear the way for each other.",
      technologies:['photoshop','unity','C#']
  },
  
]
const contact ={
    email: 'saadimelek50@gmail.com',
    linkidin: 'https://www.linkedin.com/in/saadi-melek-4977601bb/',
    Facebook :'https://www.facebook.com/est.melek/',
    Phone : '55213294' ,


}
const skills =[
    'HTML',
    'CSS',
   'JavaScript',
   'MySQL',
  'Postgres',
  'React',
  'Redux',
  'Spring',
  'Material UI',
  'Git',
  'Java',
]
export { header, about, projects, skills, contact }