import styles from './SearchBar.module.scss';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { updateSearchString } from '../../../redux/searchRedux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const SearchBarTest = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(updateSearchString(''));
      }, [])

    const [searchValue, setSearchValue] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(updateSearchString(searchValue));
        setSearchValue('');
        navigate("/search");
      }

    return (
        <div className={styles.searchBar}>
            <Form className='d-flex' onSubmit={handleClick}>
                <Button 
                    className={styles.searchButton} 
                    as={Link} 
                    to={'/searchResult/' + searchValue}
                    onClick={handleClick}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
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