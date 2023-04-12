import styles from './TopBar.module.scss';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { getUser } from '../../../redux/usersReducer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TopBar = () => {

  const user = useSelector(getUser);
  console.log('user is', user)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to="/">
            <ApartmentIcon className={styles.icon}/>
            <span>Estates</span>
          </Link>
        </div>
        <div className={styles.menu}>
          <Link to="/">
            Rental Offers
          </Link>
          <Link to="/contact">
            Contact
          </Link>
        </div>
        <div className={styles.registration}>
          
          <div className={styles.login}>
            { user 
              ?
                <Link to="/categories">
                  {"Hello, " + user.login}



                  <AccountCircleIcon className={styles.icon}/>
                </Link>
              :  
                <Link to="/login">
                  Login
                </Link>
            }  
          </div>
          
          <div className={styles.signup}>
            { user 
              ?
                <Link to="/logout">
                  Logout
                  <ExitToAppIcon className={styles.icon} />
                </Link>
              :
                <Link to="/register">
                  Register
                </Link>
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopBar
