import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut, admin } = useAuth();
    console.log(admin);
    return (
        <div>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/home">GreenLand Resort</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {user.email && !admin? <Nav.Link as={Link} to="/my-orders">My Orders</Nav.Link>: ''}
                        {user.email && admin ? <Nav.Link as={Link} to="/manage-orders">Manage Orders</Nav.Link> : ''}
                        {user.email && admin ? <Nav.Link as={Link} to="/add-service">Add New Services</Nav.Link> : ''}
                        {user.displayName && <span style={{ color: 'black' }}>Hello <u>{user.displayName.toUpperCase()}</u></span>}
                        {
                            user.email ?
                                <button style={{ marginLeft: '1%' }} onClick={logOut}>Log out</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;