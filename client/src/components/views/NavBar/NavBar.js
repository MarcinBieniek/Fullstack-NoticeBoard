import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'

const NavBar = () => {
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
                        <Nav.Link as={NavLink} to="/login">Sign In</Nav.Link>
                        <Nav.Link as={NavLink} to="/register">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </main>
    )
}

export default NavBar