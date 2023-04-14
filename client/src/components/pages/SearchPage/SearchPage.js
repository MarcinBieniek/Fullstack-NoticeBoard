import styles from './SearchPage.module.scss';
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

    return (
        <div className={styles.container}>

            {search
            
            ?

            <>
                <h2>{`Search result for phrase ${search} is:`}</h2>
                <Row lg={4} md={3} sm={2} xs={1} className='g-3 my-5'>
                    {filteredSearch.map((notice) => (
                        <Col key={notice._id}>
                            <OfferSmallCard notice={notice} user={user}/>
                        </Col>
                    ))}
                </Row>
            </>

            :

            <span>Nothing found, try again.</span>

            }
        </div>
    );

};

export default SearchPage;