import styles from './NewestOffer.module.scss';

import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

const NewestOffer = () => {
  return (
    <div className={styles.last_offer}>
      <div className={styles.image}>
        <img src={`${process.env.PUBLIC_URL}/images/flat1.webp`} alt="Main photo" /> 
      </div>   
      <div className={styles.description}>
        <div className={styles.header}>
          <span>Recently added</span>
          <div className={styles.share}>
            <span>Share</span>
            <ShareIcon />
          </div>
        </div>
        <h1>Cosy apartment for rent</h1>
        <div className={styles.location}>
          <LocationOnIcon className={styles.icon}/>
          <span>164 A Route du Vallion, 08300 Nice</span>
        </div>
        <div className={styles.numbers}>
          <div className={styles.number}>
            <BedIcon className={styles.icon}/>
            <span>2</span>
          </div>
          <div className={styles.number}>
            <BathtubIcon className={styles.icon}/>
            <span>1</span>
          </div>
          <div className={styles.number}>
            <DirectionsCarIcon className={styles.icon}/>
            <span>2</span>
          </div>
          <div className={styles.number}>
            <AspectRatioIcon className={styles.icon}/>
            <span>67m</span>
          </div>
        </div>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
        <p>Author: Marcin</p>
        <div className={styles.price}>
          <span>Rental price: 
            <span className={styles.number}> $80</span> / night</span>
        </div>
        <button>See details</button>
      </div>
    </div>
  )
}

export default NewestOffer
