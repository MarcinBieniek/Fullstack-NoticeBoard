import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../../redux/usersReducer';
import { useSelector } from 'react-redux';
import SearchBar from '../../features/SearchBar/SearchBar';

const NavBar = () => {

    const user = useSelector(getUser);

    return (
        <main>
            <Navbar className="my-4 px-3 rounded" bg="primary" variant="dark">
            <Navbar.Brand>
                <Nav>
                    <Nav.Link as={NavLink} to="/">Real estate offerts</Nav.Link>
                </Nav>
            </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="float-right">
                        
                        <SearchBar />

                        { !user &&
                            <Nav.Link as={NavLink} to="/login">Sign In</Nav.Link>
                        }
                        { !user &&
                            <Nav.Link as={NavLink} to="/register">Sign Up</Nav.Link>
                        }
                        { user &&
                            <Nav.Link as={NavLink}>{"Hello " + user.login}</Nav.Link>
                        }
                        { user &&
                            <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </main>
    )
}

export default NavBar