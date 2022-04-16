import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className='brand-name' to="/home">Dev.Kbin</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='links' to="/shop">Shop</Link>
                        <Link className='links' to="/blog">Blog</Link>
                        <Link className='links' to="/courses">Courses</Link>
                        <Link className='links' to="/about">About</Link>
                    </Nav>
                    <Nav>
                        <Link className='links' to="/signup">Sign up</Link>
                        <Link className='links' to="/login">Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;