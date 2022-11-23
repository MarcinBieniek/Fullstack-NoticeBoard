import React from 'react';

import Row from 'react-bootstrap/Row';
import EditNoticeForm from '../../features/EditNoticeForm/EditNoticeForm';

const EditNotice = () => {
  
  return (
    <Row className="d-flex align-items-center justify-content-center">
      <div className="w-75">             
        <h1 className="mb-4">Edit Offer</h1>
        <EditNoticeForm />
      </div>
    </Row>
  );
};

export default EditNotice;