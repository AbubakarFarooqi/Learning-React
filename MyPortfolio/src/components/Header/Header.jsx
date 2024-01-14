import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
function Header() {


    const [isToggle, setIstoggle] = useState(false)

    return (
        <>
            <Navbar expand="lg" className="my-navbar" style={{ backgroundColor: 'var(--backgroundColor)' }}>
                <Container >
                    <Navbar.Brand style={{ color: 'var(--secondaryColor)', fontSize: '2rem' }}>Abubakar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"
                        style={{ backgroundColor: 'var(--secondaryColor)' }}
                    // onClick={() => setIstoggle(!isToggle)}

                    />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        // onTransitionEnd={() => setIstoggle(!isToggle)}
                        onEnter={() => setIstoggle(true)}
                        onExited={() => setIstoggle(false)}

                    >
                        <Nav className="me-auto">
                            <NavLink
                                className={isToggle ? 'my-nav-link-collapse' : 'my-nav-link'}
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? 'var(--secondaryColor)' : 'var(--textColor)'
                                    }
                                }
                                }
                                to="/"  > Home </NavLink>

                            <NavLink
                                className={isToggle ? 'my-nav-link-collapse' : 'my-nav-link'}
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? 'var(--secondaryColor)' : 'var(--textColor)'
                                    };
                                }
                                }

                                to="/contact"  > Contact </NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
}




export default Header