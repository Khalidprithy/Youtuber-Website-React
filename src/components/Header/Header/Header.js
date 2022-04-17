import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {

    const [user, setUser] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setUser({});
            })
    }

    return (
        <Navbar className='header' collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Link className='brand-name' to="/home">Dev.Kbin</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='links' to="/home">Home</Link>
                        <Link className='links' to="/shop">Shop</Link>
                        <Link className='links' to="/courses">Courses</Link>
                        <Link className='links' to="/blog">Blog</Link>
                        <Link className='links' to="/about">About</Link>
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <button
                                    onClick={handleSignOut}
                                    className='sign-out'>Sign out </button>
                                :
                                <Link className='links' to="/login">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;