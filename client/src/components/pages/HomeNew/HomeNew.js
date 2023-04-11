import styles from './HomeNew.module.scss';

import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchBar from '../../features/SearchBar/SearchBar';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Map from '../../features/Map/Map';
import NewestOffer from '../../features/NewestOffer /NewestOffer';

import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const HomeNew = () => {

  return (
    <Row className={styles.container}>
      <div className={styles.wrapper}>

        <Col md={12} lg={6} className={styles.left}>

          <Row>
            <NewestOffer />
          </Row>

          <Row xl={3} lg={3} md={1} sm={1} xs={1} className={styles.offers}>
            <Col>
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
            </Col>

            <Col>
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
            </Col>

            <Col>
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
            </Col>

            <Col>
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
            </Col>
          </Row>
        </Col>

        <Col xs={12} lg={6} className={styles.right}>
          <div className={styles.top}>
            <Link to="/">
              <button>
                <span>Add new offer</span>
                <AddIcon className={styles.icon}/>
              </button>
            </Link>
            <SearchBar /> 
          </div>
          <Map />
        </Col>
      </div>
    </Row>
  )
}

export default HomeNew
