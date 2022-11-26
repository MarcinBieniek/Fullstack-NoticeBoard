import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getNoticeById, deleteNotices } from '../../../redux/noticesReducer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMGS_URL } from '../../../configs/config';
import { getUser } from '../../../redux/usersReducer';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config';

//components
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SingleNotice = () => {
    const dispatch = useDispatch();
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
            <Row className="d-flex align-items-center justify-content-center">
                <div className="w-75">
                    <div className="d-flex justify-content-between mb-4">
                        <h1>{noticeData.title}</h1>
                        
                        { user && user.login === noticeData.user &&
                        <div>
                            <Link to={`/notice/edit/${id}`}>    
                                <Button variant="outline-info">Edit</Button>
                            </Link>
                            <Button variant="outline-danger" className="ms-2" onClick={handleShow}>Delete</Button>
                        </div>  
                        }

                    </div>
                    <Card className="border-0">

                        <Card.Img
                        variant='top'
                        src={`${IMGS_URL}/${noticeData.photo}`}
                        alt='Apartment photo'
                        >    
                        </Card.Img>

                        <Card.Text className={"m-0"}>
                            <span dangerouslySetInnerHTML={{__html: noticeData.description }}></span>
                        </Card.Text>
                        <Card.Text className={"m-0"}><span className={"fw-bold"}>Location:</span>{' '+ noticeData.location}</Card.Text>
                        <Card.Text className={"m-0"}><span className={"fw-bold"}>Price:</span>{' ' + noticeData.price + '$'}</Card.Text>
                        <Card.Text className={"m-0"}><span className={"fw-bold"}>Bedrooms:</span>{' ' + noticeData.bedrooms}</Card.Text>
                        <Card.Text className={"m-0"}><span className={"fw-bold"}>Bathrooms:</span>{' ' + noticeData.bathrooms}</Card.Text>
                        <Card.Text className={"m-0"}><span className={"fw-bold"}>Rooms:</span>{' ' + noticeData.rooms}</Card.Text>
                        <Card.Text className={"m-0"}><span className={"fw-bold"}>Meters:</span>{' ' + noticeData.meters}</Card.Text>
                        <Card.Text className={"m-0"}><span className={"fw-bold"}>User:</span>{' '+ noticeData.user}</Card.Text>
                        <Card.Text className={"m-0"}><span className={"fw-bold"}>Date:</span>{' '+ noticeData.date}</Card.Text>
                        
                    </Card>
                </div>
            </Row>

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