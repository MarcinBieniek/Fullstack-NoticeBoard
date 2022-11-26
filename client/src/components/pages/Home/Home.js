import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { getUser } from '../../../redux/usersReducer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { fetchNotices } from '../../../redux/noticesReducer';

import NoticesList from '../../features/NoticesList/NoticesList'

const Home = () => {

  const dispatch = useDispatch();
  const user = useSelector(getUser)
  useEffect(() => dispatch(fetchNotices(dispatch)), [dispatch])

  console.log('user is ', user)
  
  return (
    <main>
      <div className='d-flex justify-content-between mb-2'>
        <h1>All offers</h1>

        { user && 
          <Link to={"/notice/add"}>    
            <Button variant="outline-primary">Add new offer</Button>
          </Link>    
        }

      </div>
      <NoticesList />
    </main>
  );
};

export default Home;