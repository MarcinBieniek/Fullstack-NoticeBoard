import styles from './Contact.module.scss';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WebIcon from '@mui/icons-material/Web';

const Contact = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.element}>
        <EmailIcon className={styles.icon}/>
        <a href="mailto: mbieniek.dev@gmail.com"> mbieniek.dev@gmail.com</a>
      </div>
      <div className={styles.element}>
        <LocalPhoneIcon className={styles.icon}/>
        +48 694 943 167
      </div>
      <div className={styles.element}>
        <WebIcon className={styles.icon}/>
        <a href="https://marcindev.netlify.com" target="_blank">marcindev.netlify.com</a>
      </div>
    </div>
  )
}

export default Contact
