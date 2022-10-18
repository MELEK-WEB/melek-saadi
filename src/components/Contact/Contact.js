import { contact } from '../../portfolio'
import './Contact.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Email from '@material-ui/icons/Email';



const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <ul className='skills__list'>
      
              <a href={`mailto:${contact.email}`}>
                    <li  className='skills__list-item btn btn--plain'>
                        <Email color='primary'/>
               </li>
              </a>
              <a href={contact.Phone}>
                    <li  className='skills__list-item btn btn--plain'>
                    
                    <PhoneIcon color='primary' /> 
             
               </li>
              </a>
              <a href={contact.Facebook}>
                    <li  className='skills__list-item btn btn--plain'>
                 <FacebookIcon color='primary'/>
               </li>
              </a>
              <a href={contact.linkidin}>
                    <li  className='skills__list-item btn btn--plain'>
                    <LinkedInIcon color='primary'/>
               </li>
              </a>
              
              
     
      </ul>
     
    </section>
  )
}

export default Contact
