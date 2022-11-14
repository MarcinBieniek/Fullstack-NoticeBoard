import React from 'react';
import { useSelector } from 'react-redux';
import {getAllNotices} from '../../../redux/noticesReducer';
import Row from 'react-bootstrap/Row';

import NoticeHeader from '../NoticeHeader/NoticeHeader';

const NoticesList = () => {
  
    const notices = useSelector(state => getAllNotices(state));

    return (
        <main>
            <Row xs={1} md={3} className="justify-content-space-between">
                {notices.map(notice => <NoticeHeader key={notice.id} {...notice} />)}          
            </Row>
        </main>
    );
};

export default NoticesList;