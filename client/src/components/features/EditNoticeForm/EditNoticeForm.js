// react
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getNoticeById } from '../../../redux/noticesReducer';
import { Navigate } from 'react-router-dom';
import { API_URL } from '../../../config';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

// components
import NoticeForm from '../NoticeForm/NoticeForm';

const EditNoticeForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [status, setStatus] = useState(null); // null, 'loading, 'success', 'serverError', 'clientError',

    const { id } = useParams();

    const handleSubmit = (notice) => {

        const editedData = new FormData(); 
        editedData.append('title', notice.title);
        editedData.append('description', notice.description);
        editedData.append('location', notice.location);
        editedData.append('price', notice.price);
        editedData.append('bedrooms', notice.bedrooms);
        editedData.append('bathrooms', notice.bathrooms);
        editedData.append('rooms', notice.rooms);
        editedData.append('meters', notice.meters);
        editedData.append('photo', notice.photo);
        editedData.append('user', notice.user);
        editedData.append('map', notice.map);

        const options = {
            method: 'PUT',
            body: editedData,
        };
        setStatus('loading');
        fetch(API_URL + 'api/ads/' + id, options)
            .then(res => {
                if (res.status === 200) {
                    setStatus('success');
                    setTimeout(() => navigate('/'), 2000);
                } else if (res.status === 400) {
                    setStatus('clientError');
                } else {
                    setStatus('serverError');
                }
            });
    };

    const actionText = "Edit post";
    const noticeData = useSelector(state => getNoticeById(state, id))

    if(!noticeData) return <Navigate to="/" />
    else return (
        <div>
            {status === 'success' && (
                <Alert variant='success'>
                    <Alert.Heading>Success!</Alert.Heading>
                    <p>Offer edited succesfully. You'll be redirected to main page.</p>
                </Alert>
            )}
  
            {status === 'serverError' && (
                <Alert variant='danger'>
                    <Alert.Heading>Something went wrong...</Alert.Heading>
                    <p>Unexpected error.. Please try again!</p>
                </Alert>
            )}
  
            {status === 'clientError' && (
                <Alert variant='danger'>
                    <Alert.Heading>Not enough data</Alert.Heading>
                    <p>Please fill empty fields</p>
                </Alert>
            )}
  
            {status === 'loading' && (
                <Spinner animation='border' role='status' className='d-block mx-auto'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            )}

            <NoticeForm 
                action={handleSubmit} 
                actionText={actionText}
                title={noticeData.title} 
                description={noticeData.description}
                location={noticeData.location} 
                price={noticeData.price}
                bedrooms={noticeData.bedrooms}
                bathrooms={noticeData.bathrooms}
                rooms={noticeData.rooms}
                meters={noticeData.meters} 
                photo={noticeData.photo} 
                user={noticeData.user}
                map={noticeData.map}
            />
        </div>
    )
}

export default EditNoticeForm