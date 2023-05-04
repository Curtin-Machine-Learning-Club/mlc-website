import React from 'react';
import {Navbar, Container, Nav,} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = (props) => 
{
        return(
            <>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <IndexLinkContainer to="/" activeClassName="active">
                                <Navbar.Brand>
                                    <img src='MLC_Logo 2.png' width='25%' height='25%'/>
                                </Navbar.Brand>
                            </IndexLinkContainer>
                        <Nav className="ms-auto">
                            <IndexLinkContainer to="/Signup" activeClassName="active">
                                <Nav.Link><h2>Sign Up</h2></Nav.Link>
                            </IndexLinkContainer>
                            <IndexLinkContainer to="/Meetup" activeClassName="active">
                                <Nav.Link><h2>Meetups</h2></Nav.Link>
                            </IndexLinkContainer>
                            <IndexLinkContainer to ="/Projects" activeClassName="active">
                                <Nav.Link><h2>Projects</h2></Nav.Link>
                            </IndexLinkContainer>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
}

export default Header;