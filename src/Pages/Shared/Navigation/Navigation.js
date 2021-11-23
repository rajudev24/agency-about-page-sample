import React from 'react';
import './Navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
 
const Navigation = () => {
    return (
        <Navbar  sticky="top" className='navigation'  bg="black" expand="lg">
            <Container fluid>
                <Navbar.Brand className='brand-logo' as={Link} to="/"> <img src="https://i.ibb.co/5ngMF3z/frame-abreviated-logo-white-1.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto menu-list">
                        <Nav.Link as={Link} to="/home">The Reformer</Nav.Link>
                        <Nav.Link as={Link} to="/workout">Workouts</Nav.Link>
                        <Nav.Link as={Link} to="/about" >About</Nav.Link> 
                        <Nav.Link href="#link"><i class="far fa-user-circle "></i> </Nav.Link>
                        <Nav.Link href="#link"><i class="fas fa-shopping-cart shop-cart"></i></Nav.Link>
                        
                        
                    </Nav>
                    <Nav.Link href="#link"> <button className='shop-btn'>SHOP NOW</button> </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;