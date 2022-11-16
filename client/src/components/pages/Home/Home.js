import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import NoticesList from '../../features/NoticesList/NoticesList'

const Home = () => {
  
  return (
    <main>
      <div className='d-flex justify-content-between mb-2'>
        <h1>All offers</h1>
        <Link to={"/notice/add"}>    
          <Button variant="outline-primary">Add new offer</Button>
        </Link>    
      </div>
      <NoticesList />
    </main>
  );
};

export default Home;