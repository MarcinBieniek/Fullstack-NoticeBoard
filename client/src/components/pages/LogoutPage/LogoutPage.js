import { API_URL } from '../../../config';
import { logOut } from '../../../redux/usersReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const options = {
            method: 'GET',
        };

        fetch(`${API_URL}auth/logout`, options)
            .then(() => {
                dispatch(logOut());
                navigate('/');
            });
    }, [dispatch]);        

    return null;
  
};

export default LogoutPage;