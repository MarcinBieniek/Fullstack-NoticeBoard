import styles from './HomeNew.module.scss';
import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HomeNew = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          left
        </div>
        <div className={styles.right}>
          
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
          
          <div className={styles.offers}>

            <div className={styles.offer}>
              <img src={`${process.env.PUBLIC_URL}/images/flat2.jpeg`} alt="Main image"/>  
              <div className={styles.info}>
                <div className={styles.price}>
                  <div className={styles.value}>
                    <span className={styles.bold}>$55</span><span> / night</span>
                  </div>
                  <FavoriteIcon className={styles.icon}/>
                </div>
                <span className={styles.address}>3517 W. Gray St. Utica</span>
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
                    <AspectRatioIcon className={styles.icon}/>
                    <span>67m</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.offer}>
              <img src={`${process.env.PUBLIC_URL}/images/flat2.jpeg`} alt="Main image"/>  
              <div className={styles.info}>
                <div className={styles.price}>
                  <div className={styles.value}>
                    <span className={styles.bold}>$55</span><span> / night</span>
                  </div>
                  <FavoriteIcon className={styles.icon}/>
                </div>
                <span className={styles.address}>3517 W. Gray St. Utica</span>
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
                    <AspectRatioIcon className={styles.icon}/>
                    <span>67m</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.offer}>
              <img src={`${process.env.PUBLIC_URL}/images/flat2.jpeg`} alt="Main image"/>  
              <div className={styles.info}>
                <div className={styles.price}>
                  <div className={styles.value}>
                    <span className={styles.bold}>$55</span><span> / night</span>
                  </div>
                  <FavoriteIcon className={styles.icon}/>
                </div>
                <span className={styles.address}>3517 W. Gray St. Utica</span>
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
                    <AspectRatioIcon className={styles.icon}/>
                    <span>67m</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeNew
