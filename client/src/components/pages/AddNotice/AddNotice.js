import React from 'react';

import Row from 'react-bootstrap/Row';
import AddNoticeForm from '../../features/AddNoticeForm/AddNoticeForm';

const AddNotice = () => {
  
  return (
    <Row className="d-flex align-items-center justify-content-center">
      <div className="w-75">             
        <h1 className="mb-4">Add Post</h1>
        <AddNoticeForm />
      </div>
    </Row>
  );
};

export default AddNotice;