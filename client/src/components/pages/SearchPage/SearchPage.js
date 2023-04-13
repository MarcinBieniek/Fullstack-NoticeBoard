import { useSelector } from 'react-redux';
import { getAllNotices } from '../../../redux/noticesReducer';
import { searchInputValue } from '../../../redux/searchRedux';
import { getUser } from '../../../redux/usersReducer';
import OfferSmallCard from '../../features/OfferSmallCard/OfferSmallCard';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchPage = () => {  

    const search = useSelector(searchInputValue);
    const user = useSelector(getUser);

    const filteredSearch = useSelector(getAllNotices).filter(offer => 
        offer.title.toLowerCase().includes(search.toLowerCase()) ||
        offer.location.toLowerCase().includes(search.toLowerCase()) 
    )

    console.log('filteredsearch is', filteredSearch)

    return (
        <Row xs={1} md={4} className='g-3 my-5'>
            {filteredSearch.map((notice) => (
                <Col key={notice._id}>
                    <OfferSmallCard notice={notice} user={user}/>
                </Col>
            ))}
        </Row>
    );

};

export default SearchPage;