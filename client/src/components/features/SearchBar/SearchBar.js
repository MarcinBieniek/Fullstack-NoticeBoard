import { useState } from 'react';
import { API_URL } from '../../../config';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchBar = () => {

    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    return (
        <div>
            <Form className='d-flex'>
                <Form.Control
                    type='search'
                    placeholder='Search'
                    className='me-2'
                    aria-label='Search'
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button variant='primary' as={Link} to={'/searchResult/' + searchValue}>
                    Search
                </Button>
            </Form>
        </div>
    );
};

export default SearchBar;