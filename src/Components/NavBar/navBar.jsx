import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
// import NavDropdown from "react-bootstrap/NavDropdown"
import "./navBar.css"

export default class NavBar extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
    }
    render(){
        return[
            <Container fluid="md">
                {/* <nav>
                    <p><NavLink to="/">Deamon Slayer</NavLink></p>
                    <p><NavLink to="/characterDetail">Character Detail</NavLink></p>
                    <p><NavLink to="/About">About</NavLink></p>
                    <p><NavLink to="/Form">Formulario </NavLink></p>
                </nav> */}
                <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <NavLink className="barra" to="/" >Deamon Slayer</NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"> 
                            <Nav.Link >
                                <NavLink className="barra" to="/characterDetail">Character Detail</NavLink>
                            </Nav.Link>
                            
                            <Nav.Link to="/About">
                                <NavLink className="barra" to="/About">About</NavLink>
                            </Nav.Link>
                            {/* <Nav.Link to="/Form">
                                <NavLink to="/Form" className="barra">Formulario </NavLink>
                            </Nav.Link> */}
                          
                        </Nav>
                        
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        ]
    }
}