import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import {Nav,Navbar} from 'react-bootstrap';
import { BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Top10 from './Top10';
import About from './About';

export default class Header extends Component {
  render() {
    return (
        <Router>
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className="px-5">
            <Container fluid>
            <Navbar.Brand as={Link} to="/">Best Footballers</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="px-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/Top10" className="px-3">Top 10</Nav.Link>
            <Nav.Link as={Link} to="/About" className="px-3">About</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="px-3">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        <div>
            <Routes>
                <Route path="/Contact"  element={<Contact/>}/>
                <Route path="/Top10" element={<Top10/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
        </Router>
    )
  }
}