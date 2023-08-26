import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import logo from '../assets/images/Resim1.png'
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [ activeLink, setActiveLink ] = useState('home')

    const onClickActiveLink = (value) => {
        setActiveLink(value);
    }

    const navigate = useNavigate();

    function about () {
        onClickActiveLink('about');
        navigate('/about');
    }

  return (
    <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo" className='logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onClickActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link className={activeLink === 'about' ? "active navbar-link" : "navbar-link"} onClick={about}>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
  )
}

export default Navigation