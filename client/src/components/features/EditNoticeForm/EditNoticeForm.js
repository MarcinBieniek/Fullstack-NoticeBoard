// react
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editNotices, fetchNotices } from '../../../redux/noticesReducer';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getNoticeById } from '../../../redux/noticesReducer';
import { Navigate } from 'react-router-dom';

// components
import NoticeForm from '../NoticeForm/NoticeForm';

const EditNoticeForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();

    const handleSubmit = (notice) => {
        dispatch(editNotices({ ...notice, id }));

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

        console.log('id is', id)
        console.log('notice is', notice)
        console.log('editedData is', editedData)

        const options = {
            method: 'PUT',
            body: editedData,
        };
        fetch(`http://localhost:8000/api/ads/${id}`, options);
        navigate('/');
    };

    const actionText = "Edit post";
    const noticeData = useSelector(state => getNoticeById(state, id))

    if(!noticeData) return <Navigate to="/" />
    else return (
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
        />
    )
}

export default EditNoticeForm