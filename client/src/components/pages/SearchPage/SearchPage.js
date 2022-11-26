import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllNotices, fetchAdvertBySearchPhrase } from '../../../redux/noticesReducer';

import NoticeHeader from '../../features/NoticeHeader/NoticeHeader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchPage = () => {  
    const { searchPhrase } = useParams();
    const dispatch = useDispatch();
    const notices = useSelector(getAllNotices);

    useEffect(() => {
      dispatch(fetchAdvertBySearchPhrase(searchPhrase));
    }, []);

    return (
        <Row xs={1} md={4} className='g-3 my-5'>
            {notices.map((notice) => (
                <Col key={notice._id}>
                    <NoticeHeader {...notice} />
                </Col>
            ))}
        </Row>
    );

};

export default SearchPage;