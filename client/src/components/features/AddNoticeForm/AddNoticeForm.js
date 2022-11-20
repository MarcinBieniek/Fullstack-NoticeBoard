import { useDispatch} from 'react-redux';
import { addNotices, fetchNotices } from '../../../redux/noticesReducer';
import { useNavigate } from "react-router-dom";

import NoticeForm from '../NoticeForm/NoticeForm'

const AddNoticeForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit  = (notice) => {
        dispatch(addNotices(notice));
        const formData = new FormData();
        formData.append('id', notice._id); 
        formData.append('title', notice.title);
        formData.append('author', notice.author);
        formData.append('date', notice.date);
        formData.append('price', notice.price);
        formData.append('text', notice.text);
        formData.append('foto', notice.foto);
        formData.append('city', notice.city);
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