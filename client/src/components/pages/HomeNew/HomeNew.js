import styles from './HomeNew.module.scss';

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
import OfferSmallCard from '../../features/OfferSmallCard/OfferSmallCard';

const HomeNew = () => {

  const dispatch = useDispatch();
  const user = useSelector(getUser);
  useEffect(() => dispatch(fetchNotices(dispatch)), [dispatch]);
  const notices = useSelector(state => getAllNotices(state));
  const selectedNotices = notices.slice(0, -1);
  const reverted = [...selectedNotices].reverse();

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
            <Row xl={2} lg={1} md={2} sm={1} xs={1} className={styles.offers}>
              {reverted.map((notice, id) => 
                <OfferSmallCard notice={notice} key={id} user={user}/>
              )}
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
