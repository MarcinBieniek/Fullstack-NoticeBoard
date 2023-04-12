import styles from './HomeNew.module.scss';

import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchBar from '../../features/SearchBar/SearchBar';
import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import Map from '../../features/Map/Map';
import NewestOffer from '../../features/NewestOffer /NewestOffer';
import { getUser } from '../../../redux/usersReducer';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Modal from 'react-bootstrap/Modal';
import { fetchNotices } from '../../../redux/noticesReducer';
import {getAllNotices} from '../../../redux/noticesReducer';

const HomeNew = () => {

  const dispatch = useDispatch();
  const user = useSelector(getUser);
  useEffect(() => dispatch(fetchNotices(dispatch)), [dispatch]);
  const notices = useSelector(state => getAllNotices(state));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
      <Row className={styles.container}>
        <div className={styles.wrapper}>

          <Col md={12} lg={6} className={styles.left}>

            <Row>
              <NewestOffer notices={notices}/>
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

              {user ?
                <Link to="/notice/add">
                  <button>
                    <span>Add new offer</span>
                    <AddIcon className={styles.icon}/>
                  </button>
                </Link>
              :
                <Link to="/">
                  <button onClick={handleShow}>
                    <span>Add new offer</span>
                    <AddIcon className={styles.icon}/>
                  </button>
                </Link>
              }

              <SearchBar /> 
            </div>
            <Map />
          </Col>
        </div>
      </Row>

      <Modal 
        show={show} 
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles.modal}
      >
      <Modal.Header>
        <Modal.Title>Please login</Modal.Title>
      </Modal.Header>
      <Modal.Body>This option is available only for logged users. <br/>Please register or login.</Modal.Body>
      <Modal.Footer>
        <button variant="primary" onClick={handleClose}>
          <Link to="/register">
            Register
          </Link>
        </button>
        <button variant="primary" onClick={handleClose}>
          <Link to="/login">
            Login
          </Link>
        </button>
        <button onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default HomeNew
