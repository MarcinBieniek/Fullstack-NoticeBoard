import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './SearchBar.module.scss';

const SearchBarTest = () => {

    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={styles.searchBar}>
            <Form className='d-flex'>
                <Button className={styles.searchButton} as={Link} to={'/searchResult/' + searchValue}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
                <input
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </Form>
        </div>
    )
    
}

export default SearchBarTest;