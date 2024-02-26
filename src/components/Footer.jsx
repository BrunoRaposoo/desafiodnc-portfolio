import styles from './Footer.module.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export function Footer() {
  return (
    <div className={styles.footer} id='contact'>
      <ul>
        <li><a href="https://www.linkedin.com/in/bruno-raposo-dev/" target='_blank'><FaLinkedin size={30}/></a></li>
        <li><a href="https://github.com/BrunoRaposoo" target='_blank'><FaGithubSquare  size={30}/></a></li>
        <li><a href="https://wa.me/5561981299948" target='_blank'><FaWhatsappSquare  size={30}/></a></li>
        <li><a href="mailto:brunoraposounb@gmail.com" target='_blank'><MdEmail size={34.5}/></a></li>
      </ul>
      <p>Copyright ©2030 All rights reserved</p>
    </div>
  )   
}