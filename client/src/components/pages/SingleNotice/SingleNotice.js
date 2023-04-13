import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getNoticeById } from '../../../redux/noticesReducer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMGS_URL } from '../../../configs/config';
import { getUser } from '../../../redux/usersReducer';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config';
import styles from './SingleNotice.module.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import ChairIcon from '@mui/icons-material/Chair';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SingleNotice = () => {

    const { id } = useParams();
    const noticeData = useSelector(state => getNoticeById(state, id))
    const user = useSelector(getUser);
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    const handleDelete = e => {
        e.preventDefault()
            const options = {
        method: 'DELETE',
        };
        fetch(API_URL + 'api/ads/' + id, options);
        navigate('/')
    }

    if(!noticeData) return <Navigate to="/" />
    else return (
        <>

            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <img src={`${IMGS_URL}/${noticeData.photo}`} alt="photo" />
                    <div className={styles.info}>

                        <div className={styles.description}>
                            <div className={styles.header}>
                                <h1>{noticeData.title}</h1>
                                <div className={styles.buttons}>
                                    { user && user.login === noticeData.user &&
                                        <>
                                            <Link to={`/notice/edit/${id}`}>    
                                                <button variant="outline-info">Edit</button>
                                            </Link>
                                            <button onClick={handleShow}>Delete</button>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className={styles.address}>
                                <LocationOnIcon className={styles.icon}/>
                                {noticeData.location}
                            </div>
                            <div className={styles.text}>
                                <h2>Description</h2>
                                <p>{noticeData.description}</p>
                            </div>
                        </div>

                        <div className={styles.numbers}>
                            <div className={styles.wrapper}>
                                <span>Brief information</span>
                                <p><b>Owner: </b>{noticeData.user}</p>
                                <div className={styles.data}>
                                    <div className={styles.number}>
                                        <BedIcon className={styles.icon}/>
                                        <span>{noticeData.bedrooms}</span>
                                    </div>
                                    <div className={styles.number}>
                                        <BathtubIcon className={styles.icon}/>
                                        <span>{noticeData.bathrooms}</span>
                                    </div>
                                    <div className={styles.number}>
                                        <ChairIcon className={styles.icon}/>
                                        <span>{noticeData.rooms}</span>
                                    </div>
                                    <div className={styles.number}>
                                        <AspectRatioIcon className={styles.icon}/>
                                        <span>{noticeData.meters}m</span>
                                    </div>
                                </div>
                                <div className={styles.price}>
                                    <span>Rental price: 
                                        <span className={styles.number}> {noticeData.price}€</span> / month
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This operation will completely remove this post. </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SingleNotice;