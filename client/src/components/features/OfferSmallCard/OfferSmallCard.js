import styles from './OfferSmallCard.module.scss';

import Col from 'react-bootstrap/esm/Col';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { IMGS_URL } from '../../../configs/config';
import { Link } from 'react-router-dom';

const OfferSmallCard = ({notice, user}) => {

  return (
    <Col>
      <div className={styles.offer}>
        <Link to={`/notice/${notice._id}`}>
          <img src={`${IMGS_URL}/${notice?.photo}`} alt="Main image"/>  
        </Link>
        <div className={styles.info}>
          <div className={styles.price}>
            <div className={styles.value}>
              <span className={styles.bold}>{notice.price}€</span><span> / month</span>
            </div>
            <div>

              {notice.user === user?.login &&
                <>
                  <Link to={`/notice/edit/${notice._id}`}>
                    <EditLocationAltIcon className={styles.icon} />
                  </Link>
                  <Link to=''>
                    <DeleteIcon className={styles.icon} />
                  </Link>
                </>
              }
              <Link to=''>
                <FavoriteIcon className={styles.icon}/>
              </Link>
            </div>
          </div>
          <span className={styles.address}>{notice.location}</span>
          <div className={styles.numbers}>
            <div className={styles.number}>
              <BedIcon className={styles.icon}/>
              <span>{notice.bedrooms}</span>
            </div>
            <div className={styles.number}>
              <BathtubIcon className={styles.icon}/>
              <span>{notice.bathrooms}</span>
            </div>
            <div className={styles.number}>
              <AspectRatioIcon className={styles.icon}/>
              <span>{notice.meters}m</span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default OfferSmallCard
