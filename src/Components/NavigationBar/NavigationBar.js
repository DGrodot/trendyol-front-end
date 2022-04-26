import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export const NavigationBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='#' className='ms-2'>
                        <Link to='/' className='text-decoration-none text-light'>
                            Trendyol.tech
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link><Link to='/' className='text-decoration-none text-light'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/teams'
                                            className='text-decoration-none text-light'>Teams</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
