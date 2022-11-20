import { useDispatch} from 'react-redux';
import { addNotices, fetchNotices } from '../../../redux/noticesReducer';
import { useNavigate } from "react-router-dom";

import NoticeForm from '../NoticeForm/NoticeForm'

const AddNoticeForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit  = (notice) => {

        console.log('notice is', notice)

        dispatch(addNotices(notice));
        const formData = new FormData(); 
        formData.append('title', notice.title);
        formData.append('description', notice.description);
        formData.append('location', notice.location);
        formData.append('price', notice.price);
        formData.append('bedrooms', notice.bedrooms);
        formData.append('bathrooms', notice.bathrooms);
        formData.append('rooms', notice.rooms);
        formData.append('meters', notice.meters);
        formData.append('photo', notice.photo);
        formData.append('user', notice.user);
        formData.append('date', notice.date);

        console.log('form data is', formData)

        const options = {
            method: 'POST',
            body: formData,
        };
        fetch('http://localhost:8000/api/ads', options);
        dispatch(fetchNotices());
        navigate('/');
    }
    
    const actionText = "Add new offer";

    return (
        <NoticeForm action={handleSubmit} actionText={actionText} />
    )
}

export default AddNoticeForm