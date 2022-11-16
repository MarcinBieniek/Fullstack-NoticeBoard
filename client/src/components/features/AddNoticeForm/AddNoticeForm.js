import { useDispatch} from 'react-redux';
import { addNoticesRequest } from '../../../redux/noticesReducer';
import { useNavigate } from "react-router-dom";

import NoticeForm from '../NoticeForm/NoticeForm'

const AddNoticeForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit  = notice => {
        dispatch(addNoticesRequest({notice}));
        navigate('/');

        console.log('notice is', notice)
    }
    
    const actionText = "Add new offer";

    return (
        <NoticeForm action={handleSubmit} actionText={actionText} />
    )
}

export default AddNoticeForm