import styles from './NewestOffer.module.scss';

import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import ChairIcon from '@mui/icons-material/Chair';

import { IMGS_URL } from '../../../configs/config';
import { getUser } from '../../../redux/usersReducer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NewestOffer = (notices) => {

  const user = useSelector(getUser);

  const allNotices = notices.notices;
  const newestNotice = allNotices[allNotices.length -1 ];
  
  return (
    <div className={styles.last_offer}>
      <div className={styles.image}>
        <img src={`${IMGS_URL}/${newestNotice?.photo}`} alt="Main photo" /> 
      </div>   
      <div className={styles.description}>
        <div className={styles.header}>
          <span>Recently added</span>
          <div className={styles.share}>
            <span>Share</span>
            <ShareIcon />
          </div>
        </div>
        <h1>{newestNotice?.title}</h1>
        <div className={styles.location}>
          <LocationOnIcon className={styles.icon}/>
          <span>{newestNotice?.location}</span>
        </div>
        <div className={styles.numbers}>
          <div className={styles.number}>
            <BedIcon className={styles.icon}/>
            <span>{newestNotice?.bedrooms}</span>
          </div>
          <div className={styles.number}>
            <BathtubIcon className={styles.icon}/>
            <span>{newestNotice?.bathrooms}</span>
          </div>
          <div className={styles.number}>
            <ChairIcon className={styles.icon}/>
            <span>{newestNotice?.rooms}</span>
          </div>
          <div className={styles.number}>
            <AspectRatioIcon className={styles.icon}/>
            <span>{newestNotice?.meters}m</span>
          </div>
        </div>
        <p>{newestNotice?.description}</p>
        <p>Author: {newestNotice?.user}</p>
        <div className={styles.price}>
          <span>Rental price: 
            <span className={styles.number}> {newestNotice?.price}€</span> / month</span>
        </div>
        <div className={styles.buttons}>
          <button>See details</button>

          {newestNotice?.user === user?.login && 
            <div className={styles.hidden_buttons}>
              
              <button>
                <Link to={`/notice/edit/${newestNotice?._id}`}>
                  Edit
                </Link>
              </button>
              
              <button>Delete</button>
            </div> 
          }
        </div>
      </div>
    </div>


  )
}

export default NewestOffer