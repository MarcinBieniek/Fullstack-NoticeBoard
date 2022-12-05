import { getUser } from '../../../redux/usersReducer';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser} from '@fortawesome/free-solid-svg-icons'

import TopMenuButton from '../../common/topMenuButton/topMenuButton';
import SearchBar from '../../features/SearchBar/SearchBar';

import styles from './NavBar.module.scss'

const NavBar = () => {

    const user = useSelector(getUser);

    return (

            <div className={styles.topMenu_container}>
                <div className={styles.content}>
                    
                    <div className={styles.leftContent}>
                        <a href='/' className={styles.logo}>
                            <FontAwesomeIcon icon={faHouse} />
                            <h1>Real Estate</h1>
                        </a>           
                        <div className={styles.leftMenu}>
                            <TopMenuButton title='Categories'/>
                            <TopMenuButton title='Buy'/>
                            <TopMenuButton title='Rent'/>
                            <TopMenuButton title='Contact'/>
                        </div>
                    </div>

                    <div className={styles.rightContent}>            
                        <SearchBar />
                        <div className={styles.rightMenu}>
                            { !user &&
                                <>
                                    <TopMenuButton title='Login'/>
                                    <a href="/login">
                                        <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
                                    </a>
                                </>
                            }
                            { !user &&
                                <TopMenuButton title='Register'/>
                            }
                            { user &&
                                <div className={styles.menuItem}>
                                    <a href='/categories'>{"Hello, " + user.login}</a>
                                </div>
                            }
                            { user &&
                                <TopMenuButton title='Logout'/>
                            }
                    

                        </div>
                    </div>
                </div>
            </div>

    )
}

export default NavBar