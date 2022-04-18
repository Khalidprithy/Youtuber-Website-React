import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
                <NavLink className='brand-name' to="/home">Dev.Kbin</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'links'} to="/home">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'links'} to="/courses">Courses</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'links'} to="/shop">Shop</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'links'} to="/blog">Blog</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'links'} to="/about">About</NavLink>
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <button
                                    onClick={handleSignOut}
                                    className='sign-out'>Sign out </button>
                                :
                                <NavLink className='links' to="/login">Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;