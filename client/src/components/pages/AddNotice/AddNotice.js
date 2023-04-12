import React from 'react';

import Stack from 'react-bootstrap/Stack';
import AddNoticeForm from '../../features/AddNoticeForm/AddNoticeForm';

const AddNotice = () => {
  
  return (
    <Stack gap={3} className="col-10 col-md-5 mt-5 mb-5 mx-auto">            
      <h1 className="mx-auto">Add new offer</h1>
      <AddNoticeForm />
    </Stack>
  );
};

export default AddNotice;