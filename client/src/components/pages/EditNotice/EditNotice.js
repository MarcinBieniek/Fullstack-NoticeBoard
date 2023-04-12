import React from 'react';

import Stack from 'react-bootstrap/Stack';
import EditNoticeForm from '../../features/EditNoticeForm/EditNoticeForm';

const EditNotice = () => {
  
  return (
    <Stack gap={3} className="col-10 col-md-5 mt-5 mb-5 mx-auto">            
      <h1 className="mx-auto">Edit offer</h1>
      <EditNoticeForm />
    </Stack>
  );
};

export default EditNotice;